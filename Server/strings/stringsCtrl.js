var String = require('./stringsModel.js');

module.exports = {
	addString: function (req, res) {
		var newString = new String(req.body);
		newString.save(function (err, result) {
			if (err) return res.status(500).send(err);
			else res.send(result);
		});
	},
	getString: function (req, res, next) {
		String.find().then(function (String) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(String);
      }		})
	},
	// findString: function (req, res, next) {
	// 	String.find().populate('messages').populate('people').exec().then(function (conversations, err) {
	// 		if (err) {
	// 			res.status(500).send(err);
	// 		} else {
	// 			res.send(conversations);
	// 		}
	// 	})
	// },
	updateString: function (req, res, next) {
		String.findByIdAndUpdate(req.params.id, req.body, function (err, updatedString) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(updatedString);
			}
		})
	},
	deleteString: function (req, res, next) {
		String.findByIdAndRemove(req.params.id, req.body, function (err, deletedString) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(deletedString);
			}
		});
	}
}
