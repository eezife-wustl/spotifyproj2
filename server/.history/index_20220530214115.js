const express = require('express')
var querystring = require('querystring')
//const { code } = require('tar/lib/types');
const app = express()
const port = 3001
const unirest = require("unirest")
var redirect_uri = 'http://localhost:3001/callback'
const client_id = '26b86d24b482437baed72eae2de1b2e2'
const client_secret = '62f163c3122e44399b460316890f7c39'
const code_challenge_method = 'S256'
const code_verifier = 'knEMPbK95FoMRReQbLZxHEKuP2GMqqmGoHByUSwFk7p2YwvgxgnaYRxzie3DtBpeSMVt9wyS62tL'
const code = '74F4C9BE207282D06E6767896B19F243BB61926FA1F3C0CB315B0B31ED975D2B'
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
  
var state = generateRandomString(16);
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
     resAuthorizationCode = res.code;
     console.log(res.code);
     console.log(res.error);
     console.log(res.state);
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

  //const authorizationCode = resAuthorizationCode;

//   spotifyApi
//   .authorizationCodeGrant(authorizationCode)
//   .then(function(data) {
//     console.log('Retrieved access token', data.body['access_token']);

//     // Set the access token
//     spotifyApi.setAccessToken(data.body['access_token']);

//     // Use the access token to retrieve information about the user connected to it
//     return spotifyApi.getMe();
//   })
//   .then(function(data) {
//     // "Retrieved data for Faruk Sahin"
//     console.log('Retrieved data for ' + data.body['display_name']);

//     // "Email is farukemresahin@gmail.com"
//     console.log('Email is ' + data.body.email);

//     // "Image URL is http://media.giphy.com/media/Aab07O5PYOmQ/giphy.gif"
//     console.log('Image URL is ' + data.body.images[0].url);

//     // "This user has a premium account"
//     console.log('This user has a ' + data.body.product + ' account');
//   })
//   .catch(function(err) {
//     console.log('Something went wrong:', err.message);
//   });

// hello world
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




  //request access token
  var data;
app.get('/callback', function(req, res, body) {

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
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')),
          'Content-Type' : 'application/x-www-form-urlencoded'
        },
        json: true
      };
      //res.send(res);
     // console.log(resAuthorizationCode);
    }
    console.log(body)
  });

  console.log(data);
  
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