// Dependencies
var express      = require('express')
  , bodyParser   = require('body-parser')
  , cors         = require('cors')
  , mongoose     = require('mongoose')
  , app          = express()
  , port         = 3000
// Mongoose //
  , mongoUri = "mongodb://localhost:27017/Chatroom";

// Express Middleware //
app.use(bodyParser.json());
app.use(cors());

// Connetions //
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log("Successsfully connected to mongodb");
});

app.use(express.static(__dirname + './../Public'));

// PORT //
app.listen(port, function () {
	console.log('listening on port: ' + port);
});
