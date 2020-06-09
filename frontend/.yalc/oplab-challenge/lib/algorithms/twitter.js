"use strict";

var Twitter = require('./twitter/twitter.js');

var path = require('path');

var dotenv = require('dotenv');

var argv = process.argv.slice(2);

(function () {
  if (!(argv[0] !== '')) {
    console.log('Inválid Parameter. Should be diferent from blank');
    return false;
  }

  if (!(argv[1] > 0)) {
    console.log('Inválid Parameter. Should be greater than zero');
    return false;
  }

  dotenv.config({
    path: path.resolve(__dirname + '/../../.env')
  });
  var twitter_response = Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.TOKEN_KEY,
    access_token_secret: process.env.TOKEN_SECRET
  }, argv[0], argv[1]);
  twitter_response.then(function (res) {
    console.log(res);
  })["catch"](function (err) {
    console.log(err);
  }); // const MAX_TWEETS  = 5;
  // let number_of_tweets = 1;
  // twitter_stream.on('data', function(event) {
  //   console.log(event.text);
  //
  //   if (number_of_tweets > MAX_TWEETS) {
  //     twitter_stream.destroy();
  //   }
  //   number_of_tweets++;
  // });
  //
  // twitter_stream.on('end', function(error) {
  //   console.log('the end')
  // });
  //
  // twitter_stream.on('error', function(error) {
  //   throw error;
  // });
  // twitter.events.on('tweet', (e) =>  {
  //   console.log(e.tweet);
  // })
})(); //
// consumer_key: 'VOARaw13dL5pdVHdLyTiR2fNQ',
// consumer_secret: 'CZB30b2mp9FmwmqEWMgItJ08BRRV8jTdxlDx3OuEnBqlvEQPSR',
// access_token_key: '134885090-skb3uksh8sYDsL8dDayUXRZeaWoDbaA9QpjN7sud',
// access_token_secret: 'FbtX9iXdmB9NW7ej1z1Yo88MMByP3nJ18UGWpmr1dkMtZ',
// headers: {
//   "Authorization": "Bearer " + '134885090-skb3uksh8sYDsL8dDayUXRZeaWoDbaA9QpjN7sud'
// }