//https://www.npmjs.com/package/pkce-challenge
const pkceChallenge = require("pkce-challenge").default;
const challenge = pkceChallenge(128);
const crypto = require("crypto");
const express = require('express')
var querystring = require('querystring')
var request = require('request');
var helmet = require('helmet');
var compression = require('compression');


//const { code } = require('tar/lib/types');
const app = express()
const port = 3001
//const unirest = require("unirest")
var redirect_uri = 'http://localhost:3001/callback'
const client_id = '26b86d24b482437baed72eae2de1b2e2'
const client_secret = '62f163c3122e44399b460316890f7c39'
const code_challenge_method = 'S256'
//const code_verifier = 'knEMPbK95FoMRReQbLZxHEKuP2GMqqmGoHByUSwFk7p2YwvgxgnaYRxzie3DtBpeSMVt9wyS62tL'
const code_verifier = challenge.code_verifier
// const code = '74F4C9BE207282D06E6767896B19F243BB61926FA1F3C0CB315B0B31ED975D2B'
const code = challenge.code_challenge
const SpotifyWebApi = require('spotify-web-api-node');
var resAuthorizationCode;
var cors = require('cors')
app.use(cors())
app.use(compression()); //Compress all routes
app.use(helmet());
var spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: redirect_uri
  });

//https://www.kindacode.com/article/how-to-easily-generate-a-random-string-in-node-js/
  generateRandomString = (myLength) => {
    const chars =
      "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    const randomArray = Array.from(
      { length: myLength },
      (v, k) => chars[Math.floor(Math.random() * chars.length)]
    );
  
    const randomString = randomArray.join("");
    return randomString;
  };

var state = generateRandomString(16);
var scope = 'user-top-read';

// console.log(('https://accounts.spotify.com/authorize?' +
// querystring.stringify({
//   response_type: 'code',
//   client_id: client_id,
//   scope: scope,
//   redirect_uri: redirect_uri,
//   code_challenge_method: code_challenge_method,
//   state: state,
//   code_challenge: code
// })))

// request access from user
app.get('/login', function(req, res) {   
    req.header("Access-Control-Allow-Origin", "*");
    var scope = 'user-top-read';
  
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        code_challenge_method: code_challenge_method,
        state: state,
        code_challenge: code
      }));
  });

// hello world
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

  //request access token
app.get('/callback', function(req, res) {

    var code = req.query.code || code || null ;
    var state = req.query.state || state || null;
  
    if (state === null) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
    } else {
      var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code',
          client_id: client_id,
          code_verifier: code_verifier
        },
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        json: true

      };
      //res.send(Buffer.from(`${client_id}:${client_secret}`).toString('base64'))
      request.post(authOptions, function(error, response, body) {
        var access_token = body.access_token;
        // res.send({
        //   'access_token': access_token
        // });
        if (!error && response.statusCode === 200) {
          var access_token = body.access_token;

          spotifyApi.setAccessToken(access_token);
          // res.send({
          //   'access_token': access_token
          // });
          //res.redirect("http://localhost:3000");
          res.redirect("http://localhost:3001/refresh_token");
        }
        else {
          // res.send({
          //   'error': error,
          //   'response.statusCode': response.statusCode,
          //   'body': body
          // });
          //res.redirect("http://localhost:3000");
         res.redirect("http://localhost:3001/refresh_token");
        }
      });
    }
  });

app.get('/usertoptracks', function(req, res) {
    spotifyApi.getMyTopTracks({ limit: 50})
    .then(function(data) {
      let topTracks = data.body.items;
      //res.send({topTracks});
      res.json({topTracks});
    }, function(err) {
      res.send({'Something went wrong!': err});
    });
  });


  //Request a refreshed Access Token
  app.get('/refresh_token', function(req, res) {

    var refresh_token = req.query.refresh_token;
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: { 'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
      form: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      },
      json: true
    };
  
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var access_token = body.refresh_token;
        spotifyApi.setAccessToken(access_token);
        res.redirect("http://localhost:3000");
      }
      else {
        res.redirect("http://localhost:3000/?status=success");
      }
    });
  });

  app.get('/trackdata/', function(req, res) {
    let trackiesy = req.query.tracks;
    // console.log(trackiesy);
    spotifyApi.getAudioFeaturesForTracks(trackiesy)
    .then(function(data) {
      // console.log(data.body);
      let audioFeatures = data.body.audio_features
      res.json({audioFeatures});
    }, function(err) {
      res.send({'Something went wrong!': err});
      // done(err);
    });
  });

  app.get('/playlisttracks/', function(req, res) {
    let playlist = req.query.playlist;
    spotifyApi.getPlaylistTracks(playlist, {
    offset: 0,
    limit: 50,
    fields: 'items'
  })
  .then(
    function(data) {
      //console.log('The playlist contains these tracks', data.body.items);
      let tracks = data.body.items;
      res.json({tracks});
    },
    function(err) {
      res.send({'Something went wrong!': err});
    }
  );
  });

  app.listen(3001, function () {
    console.log("express has started on port 3001");
  });
//request top tracks
