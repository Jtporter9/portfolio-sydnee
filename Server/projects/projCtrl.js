var Project = require('./projModel');

module.exports = {

  addProject: function (req, res, next) {
  		console.log('REQ.BODY HERE!!.....', req.body);
      //FROM MONGOOSE VIDEO 
      Project.insert(req.body, function(err, result) {
        if (err)res.send(err);
        else res.json(result);
      })
  		// new Project(req.body).save(function (err, newProj) {
  		// 	if (err) res.status(500).send(err);
  		// 	else res.send(newProj);
  		// });
  	},
	getProject: function (req, res, next) {
		Project.find().then(function (Project) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(Project);
      }		})
	},
	// findProject: function (req, res, next) {
	// 	Project.find().populate('messages').populate('people').exec().then(function (conversations, err) {
	// 		if (err) {
	// 			res.status(500).send(err);
	// 		} else {
	// 			res.send(conversations);
	// 		}
	// 	})
	// },
	// updateProject: function (req, res, next) {
	// 	Project.findByIdAndUpdate(req.params.id, req.body, function (err, updatedProject) {
	// 		if (err) {
	// 			res.status(500).send(err);
	// 		} else {
	// 			res.send(updatedProject);
	// 		}
	// 	})
	// },
	deleteProject: function (req, res, next) {
		Project.findByIdAndRemove(req.params.id, req.body, function (err, deletedProject) {
			if (err) {
				res.status(500).send(err);
			} else {
				res.send(deletedProject);
			}
		});
	}
}
