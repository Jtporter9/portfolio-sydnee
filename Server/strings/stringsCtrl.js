var Strings = require('./stringsModel');

module.exports = {

  addStrings: function (req, res, next) {
  		console.log(req.body);
  		new Strings(req.body).save(function (err, data) {
  			if (err) res.status(500).send(err);
  			else res.send(data);
  		});
  	},
	// addStrings: function (req, res) {
	// 	var newStrings = new Strings(req.body);
	// 	newStrings.save(function (err, result) {
	// 		if (err) return res.status(500).send(err);
	// 		else res.send(result);
	// 	});
	// },
	getStrings: function (req, res, next) {
		Strings.find().then(function (Strings) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(Strings);
      }		})
	},
	// findStrings: function (req, res, next) {
	// 	Strings.find().populate('messages').populate('people').exec().then(function (conversations, err) {
	// 		if (err) {
	// 			res.status(500).send(err);
	// 		} else {
	// 			res.send(conversations);
	// 		}
	// 	})
	// },
	updateStrings: function (req, res, next) {
		Strings.findByIdAndUpdate(req.params.id, req.body, function (err, updatedStrings) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(updatedStrings);
			}
		})
	},
	deleteStrings: function (req, res, next) {
		Strings.findByIdAndRemove(req.params.id, req.body, function (err, deletedStrings) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(deletedStrings);
			}
		});
	}
}
