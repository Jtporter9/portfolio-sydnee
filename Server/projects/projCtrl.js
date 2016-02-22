var Project = require('./projModel');

module.exports = {

  addProject: function (req, res, next) {
  		console.log(req.body);
  		new Project(req.body).save(function (err, data) {
  			if (err) res.status(500).send(err);
  			else res.send(data);
  		});
  	},
	// addProject: function (req, res) {
  //   console.log('addProject firing...');
	// 	var newProject = new Project(req.body);
	// 	newProject.save(function (err, result) {
	// 		if (err) return res.status(500).send(err);
	// 		else res.send(result);
	// 	});
	// },
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