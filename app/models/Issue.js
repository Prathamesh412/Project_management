var mongoose = require('mongoose');

var issueSchema= new mongoose.Schema({
  name: String,
  description: String,
  creator:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  project_id:[{type: mongoose.Schema.Types.ObjectId, ref: 'Project'}],
  timestamp:[{type: Date, default: Date.now}]

});

module.exports =mongoose.model('Issue',issueSchema);