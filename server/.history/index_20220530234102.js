// import { sha256 } from "js-sha256";
// import { encode } from "js-base64";
const pkceChallenge = require("pkce-challenge").default;
const crypto = require("crypto");
const express = require('express')
var querystring = require('querystring')
var request = require('request');
//const { code } = require('tar/lib/types');
const app = express()
const port = 3001
//const unirest = require("unirest")
var redirect_uri = 'http://localhost:3001/callback'
const client_id = '26b86d24b482437baed72eae2de1b2e2'
const client_secret = '62f163c3122e44399b460316890f7c39'
const code_challenge_method = 'S256'
//const code_verifier = 'knEMPbK95FoMRReQbLZxHEKuP2GMqqmGoHByUSwFk7p2YwvgxgnaYRxzie3DtBpeSMVt9wyS62tL'


//const code = '74F4C9BE207282D06E6767896B19F243BB61926FA1F3C0CB315B0B31ED975D2B'

const SpotifyWebApi = require('spotify-web-api-node');
var resAuthorizationCode;

// var spotifyApi = new SpotifyWebApi({
//     clientId: client_id,
//     clientSecret: client_secret,
//     redirectUri: redirect_uri
//   });

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

  //https://medium.com/swlh/modern-oauth-for-single-page-applications-using-pkce-e1cdd2f1b84
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  
  const code_verifier = generateRandomString(getRandomInt(43, 128));
  const sha256Hash = crypto.createHmac("sha256", code_verifier);
  //const hash = sha256(code_verifier);
  const code = encode(hash, true)
  var state = makeid(12);


var scope = 'user-top-read';

console.log(('https://accounts.spotify.com/authorize?' +
querystring.stringify({
  response_type: 'code',
  client_id: client_id,
  scope: scope,
  redirect_uri: redirect_uri,
  code_challenge_method: code_challenge_method,
  state: state,
  code_challenge: code
})))
// request access from user
app.get('/login', function(req, res) {   
    var state = generateRandomString(16);
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

  console.log(resAuthorizationCode)

//   spotifyApi.clientCredentialsGrant().
//   then(function(result) {
//       console.log('It worked! Your access token is: ' + result.body.access_token); 
//   }).catch(function(err) {
//       console.log('If this is printed, it probably means that you used invalid ' +
//       'clientId and clientSecret values. Please check!');
//       console.log('Hint: ');
//       console.log(err);
//   });


// hello world
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })




  //request access token

  // app.get('/callback', function(req, res) {
  //   const request = unirest("GET", 'https://accounts.spotify.com/api/token');
  //   request.query({});

  // });

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
          res.send({
            'access_token': access_token
          });
        }
        else {
          res.send({
            'error': error,
            'response.statusCode': response.statusCode,
            'body': body
          });
        }
      });
      //res.send(res);
     // console.log(resAuthorizationCode);
    }
    


  });

  
app.listen(3001, function () {
  console.log("express has started on port 3001");
});

  //Request a refreshed Access Token
  app.get('/refresh_token', function(req, res) {

    var refresh_token = req.query.refresh_token;
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
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
        var access_token = body.access_token;
        res.send({
          'access_token': access_token
        });
      }
    });
  });

//   app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`);
//   });