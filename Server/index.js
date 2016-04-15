// Dependencies
var express      = require('express')
  , bodyParser   = require('body-parser')
  , cors         = require('cors')
  , morgan       = require('morgan')
  , mongoose     = require('mongoose')
  , env          = process.env.NODE_ENV = process.env.NODE_ENV || 'development'
  , app          = express()
  , port         = process.env.PORT || 3000
// Mongoose //
   , mongoUri     = "mongodb://localhost:27017/sydsportfolio"
// Refs //
  , stringsCtrl  = require('./strings/stringsCtrl.js')
  , projectsCtrl = require('./projects/projCtrl.js')

// Express Middleware //
app.use(bodyParser.json());
app.use(cors());

// Connetions //
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
	console.log("Successsfully connected to mongodb.. =)");
});

app.use(express.static(__dirname + './../Public'));

// Strings Endpoints //
app.post('/api/strings', stringsCtrl.addStrings);
app.get('/api/strings', stringsCtrl.getStrings);
app.delete('/api/strings/:id', stringsCtrl.deleteStrings);
app.put('/api/strings/:id', stringsCtrl.updateStrings);

// Projects Endpoints //
app.post('/api/projects', projectsCtrl.addProject);
app.get('/api/projects', projectsCtrl.getProject);
app.delete('/api/projects/:id', projectsCtrl.deleteProject);

// PORT //
app.listen(port, function () {
	console.log('listening on port: ' + port);
});
