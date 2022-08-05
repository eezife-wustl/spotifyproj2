//https://www.npmjs.com/package/pkce-challenge
require("dotenv").config();
const pkceChallenge = require("pkce-challenge").default;
const challenge = pkceChallenge(128);
const crypto = require("crypto");
const express = require('express')
var querystring = require('querystring')
var request = require('request');
var helmet = require('helmet');
var compression = require('compression');
const session = require('cookie-session');



//const { code } = require('tar/lib/types');
const app = express()
const path = require("path");
const port = process.env.PORT || 3001
//const unirest = require("unirest")
//var redirect_uri = 'http://localhost:3001/callback'
var redirect_uri = 'https://musiacs-by-erika.herokuapp.com/callback'
var prod_uri = 'https://musiacs-by-erika.herokuapp.com/callback'
const client_id = process.env.CLIENT;
const client_secret = process.env.SECRET;
const code_challenge_method = 'S256'
//const code_verifier = 'knEMPbK95FoMRReQbLZxHEKuP2GMqqmGoHByUSwFk7p2YwvgxgnaYRxzie3DtBpeSMVt9wyS62tL'
const code_verifier = challenge.code_verifier
// const code = '74F4C9BE207282D06E6767896B19F243BB61926FA1F3C0CB315B0B31ED975D2B'
const code = challenge.code_challenge
const SpotifyWebApi = require('spotify-web-api-node');
var resAuthorizationCode;
// var cors = require('cors')
// app.use(cors())
app.use(compression()); //Compress all routes
app.use(helmet());
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(
  session({
    name: 'session',
    keys: ['key1', 'key2'],
    spotifyAccount: ["something"],
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
  })
);

var spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: redirect_uri
  });

//https://www.kindacode.com/article/how-to-easily-generate-a-random-string-in-node-js///
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
        state: state
      }));
  });

// hello world
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

  //request access token
  app.get('/callback', function(req, res) {

    let code = req.query.code || code || null ;
    console.log(code)
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
          client_id: client_id
        },
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        json: true

      };
      //res.send(Buffer.from(`${client_id}:${client_secret}`).toString('base64'))
      spotifyApi.authorizationCodeGrant(code).then(
        function(data) {
          console.log('The token expires in ' + data.body['expires_in']);
          console.log('The access token is ' + data.body['access_token']);
          console.log('The refresh token is ' + data.body['refresh_token']);
          var refresh_token = data.body['refresh_token']
          var access_token = data.body['access_token']

      
          var refresh_token = data.body['refresh_token']
          // Set the access token on the API object to use it in later calls
          spotifyApi.setAccessToken(data.body['access_token']);
          spotifyApi.setRefreshToken(data.body['refresh_token']);

          req.session.spotifyAccount = { access_token, refresh_token }
          res.redirect("https://musiacs-by-erika.herokuapp.com/?status=success&refresh_token=" + refresh_token);
        },
        function(err) {
          console.log('Something went wrong!', err);
          res.redirect("https://musiacs-by-erika.herokuapp.com/?status=error");
        }
      );
    }
  });

app.get('/usertoptracks', function(req, res) {
  spotifyApi.setAccessToken(req.session.spotifyAccount["access_token"])
  spotifyApi.setRefreshToken(req.session.spotifyAccount["refresh_token"])
  spotifyApi.refreshAccessToken().then(
    function(data) {
      console.log('The access token has been refreshed!');
  
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
      console.log(data.body['access_token']);
    },
    function(err) {
      console.log('Could not refresh access token', err);
    });
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
        res.redirect("https://musiacs-by-erika.herokuapp.com");
      }
      else {
        res.redirect("https://musiacs-by-erika.herokuapp.com/?status=success");
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

  // if (process.env.NODE_ENV === "production") {
  //   app.use(express.static('build'))
  //   app.get('*', (req,res) => {
  //     req.sendFIle(path.resolve(_dirname, 'build', 'index.html'))
  //   })
  // }
  // app.use(express.static(path.join(__dirname, "client", "build")));

  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  // });

  app.listen(port, function () {
    console.log("express has started on port 3001");
  });
//request top tracks
