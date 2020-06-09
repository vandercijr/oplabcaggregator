'use strict'

const bodyParser  = require('body-parser');
const express     = require('express');
const app         = express();
const path    = require("path");
const dotenv  = require('dotenv');

dotenv.config({path: path.resolve(__dirname + '/.env') });

const port =  process.env.PORT || 4000;
const twitterRoutes = require('./src/routes/twitter.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/twitter', twitterRoutes);

app.listen(port, () => {
  console.log('Oplab Challenge Aggregator server is alive on port', port);
});

module.exports = app;
