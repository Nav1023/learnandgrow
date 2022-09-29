const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const CourseSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String
  },
  price: {
    type: String,
  },
  discount: {
    type: Number,
  },
  instructor:[{
    name: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
    },
    social: {
      type: String
    }
  }],
  videos: [{
    title: {
      type: String,
    },
    url: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
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

module.exports = Course = mongoose.model('course', CourseSchema);
