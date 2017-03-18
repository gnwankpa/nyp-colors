const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: { type: String, required: true },
  qNumber: { type: Number, required: true },
  redAnswer: { type: String, required: true },
  greenAnswer: { type: String, required: true },
  blueAnswer: { type: String, required: true },
  yellowAnswer: { type: String, required: true }
});

module.exports = mongoose.model('Question', QuestionSchema);