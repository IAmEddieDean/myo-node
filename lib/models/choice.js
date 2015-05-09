'use strict';

var Mongoose = require('mongoose');

var choiceSchema = Mongoose.Schema({
  name: {type: String},
  url: {type: Number},
  type: {type: String}
});

var Choice = Mongoose.model('Choice', choiceSchema);
module.exports = Choice;
