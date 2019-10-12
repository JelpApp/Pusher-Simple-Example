var Pusher = require('pusher');
const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000

// // Pusher configuration

// // To run enable fowlowing lines

// var channels_client = new Pusher({
//   appId: '878956',
//   key: 'b4258bc489ab7ed787a5',
//   secret: 'cde3e9574f229a841d64',
//   cluster: 'mt1',
//   encrypted: true
// });

//App configuration
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
//app.use(bodyParser.json()); // support json encoded bodies

// POST /message 
app.post('/message', function(req, res) {

  console.debug(req);

  var mensaje = "this";
  console.log("/message " + mensaje);

  var message = {
    "message": mensaje,
    "timestamp": new Date()
  };
  channels_client.trigger('my-channel', 'my-event', message);
  
  res.send(message);
});

// Start app
app.listen(port, () => console.log(`>>> Example app listening on port ${port}!`))