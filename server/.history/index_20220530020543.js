const express = require('express');
const { code } = require('tar/lib/types');
const app = express();
const port = 3001;
const unirest = require("unirest");
var redirect_uri = 'http://localhost:3001/callback';
const client_id = '26b86d24b482437baed72eae2de1b2e2';
const client_secret = '62f163c3122e44399b460316890f7c39';
const code_challenge_method = S256;
const code_verifier = knEMPbK95FoMRReQbLZxHEKuP2GMqqmGoHByUSwFk7p2YwvgxgnaYRxzie3DtBpeSMVt9wyS62tL

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

//request access from user
app.get('/login', function(req, res) {

    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';
  
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        code_challenge_method: code_challenge_method,
        code_challenge: code,
        state: state
      }));
  });

  //request access token
  app.get('/callback', function(req, res) {

    var code = req.query.code || null;
    var state = req.query.state || null;
  
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
    }
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