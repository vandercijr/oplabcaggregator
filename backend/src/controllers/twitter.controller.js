/**
 * Arquivo: twitter.controller.js
 * Author: Vanderci Curvelo Junior
 * Description: controller for twitter as a workarroung for CORS wich twitter API apparently don't suport : 'twitter.controller.js'
 * Data: 08/05/2020
 *
 * Documentação: http://chaijs.com/guide/styles/#assert
 *
 */
const  Twitter = require('oplab-challenge/src/algorithms/twitter/twitter');

const TwitterController = {
  retrieveTweets : (req, res, next) => {
    const MAX_TWEETS  = 5;
    const _search = req.params.search;
    if (_search.length !== "")  {
      const twitter_response = Twitter({
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          access_token_key: process.env.TOKEN_KEY,
          access_token_secret: process.env.TOKEN_SECRET,
        },
        _search,
        MAX_TWEETS
      );

      const _tweets = [];

      twitter_response
      .then((data) =>  {
        return res.json(data);
      })
      .catch((err)  =>  {
        throw err;
      })

      // let number_of_tweets = 1;
      //
      // twitter_stream.on('data', function(event) {
      //   console.log(event);
      //   _tweets.push({
      //     created_at: event.created_at,
      //     text: event.text,
      //     source: event.source
      //   });
      //
      //   if (number_of_tweets >= MAX_TWEETS) {
      //     twitter_stream.destroy();
      //   }
      //   number_of_tweets++;
      // });
      //
      // twitter_stream.on('end', function(error) {
      //   res.status(200).json(_tweets);
      // });
      //
      // twitter_stream.on('error', function(error) {
      //   throw error;
      // });
    }
  }
};

module.exports = TwitterController;
