var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var Strings = Schema([{
	string: { type: String }
}]);

module.exports = mongoose.model('Strings', Strings);
