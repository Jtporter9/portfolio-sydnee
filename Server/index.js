// Dependencies
var express      = require('express')
  , bodyParser   = require('body-parser')
  , cors         = require('cors')
  , mongoose     = require('mongoose')
  , app          = express()
  , port         = 3000
// Mongoose //
  , mongoUri     = "mongodb://localhost:27017/Chatroom"
// Refs //
  , stringsCtrl      = require('./strings/stringsCtrl')
  , projectsCtrl     = require('./projects/projCtrl')

// Express Middleware //
app.use(bodyParser.json());
app.use(cors());

// Connetions //
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log("Successsfully connected to mongodb");
});

app.use(express.static(__dirname + './../Public'));

// Strings Endpoints //
app.post('/api/strings', stringsCtrl.addString);
app.get('/api/strings', stringsCtrl.getString);
app.delete('/api/strings/:id', stringsCtrl.deleteString);
app.put('/api/strings/:id', stringsCtrl.updateString);

// Projects Endpoints //
app.post('/api/projects', projectsCtrl.addProject);
app.get('/api/projects', projectsCtrl.getProject);
app.delete('/api/projects', projectsCtrl.deleteProject);

// PORT //
app.listen(port, function () {
	console.log('listening on port: ' + port);
});
