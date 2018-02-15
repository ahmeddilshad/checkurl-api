var express = require('express');
var  bodyParser = require('body-parser');
var app = express();

//will get a dynamic port from admin other wise will start at 3000
var port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json());

//routing goes here
app.use('/api', require('./routes'));

// If no route is matched by now, it must be a 404
app.use(function(req, res) {
  res.status(404);
  res.json({'msg': 'No Routes Found'});
});

//Listening on defined port
app.listen(port, function() {
  console.log("Server is ready at port :: " + port);
});