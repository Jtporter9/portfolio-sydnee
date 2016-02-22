var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Projects = Schema([{
	number: { type: Number },
	name: { type: String },
	link: { type: String },
	picture: { type: String }
}]);

module.exports = mongoose.model('Projects', Projects);