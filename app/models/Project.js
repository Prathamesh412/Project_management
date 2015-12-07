var mongoose = require('mongoose');

var projectSchema= new mongoose.Schema({
  name: String,
  moderator:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  admin:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]

});

module.exports =mongoose.model('Project',passportSchema);