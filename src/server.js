const express = require('express');
const app     = express();
const router  = express.Router();
const path    = require("path");
const port    = process.env.PORT || 8000;
const bodyParser  = require('body-parser');

app.use('/jquery', express.static(__dirname + '/../node_modules/jquery/dist'));
app.use('/bootstrap', express.static(__dirname + '/../node_modules/bootstrap/dist'));
app.use('/app', express.static(__dirname + '/static/index.html'));

// router.get('/', function (req, res)  {
//   console.log('boludo');
//   console.log(req);
//   return res.sendFile(path.resolve('/static/index.html'));
// });

app.listen(port, () => {
  console.log('server is alive on port', port);
});
