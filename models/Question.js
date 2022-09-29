const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const QuestionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  image: {
    type: String
  },
  mark: {
    type: String,
  },
  answer: {
    type: String,
  },
  options:[{
    title: {
      type: String,
      required: true,
    },
    correct: {
      type: Boolean,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  modifiedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Question = mongoose.model('question', QuestionSchema);
