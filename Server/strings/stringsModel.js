var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var stringsSchema = mongoose.Schema([{
	string: { type: String }
}]);

module.exports = mongoose.model('Strings', stringsSchema);
