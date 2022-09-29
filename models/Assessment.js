const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const AssessmentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  negativeMarking: {
    type: Boolean
  },
  questions:[{
    question: {
      type: Schema.Types.ObjectId,
      ref: 'question'
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

module.exports = Assessment = mongoose.model('assessment', AssessmentSchema);

