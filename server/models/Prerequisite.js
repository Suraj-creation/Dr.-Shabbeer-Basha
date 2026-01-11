const mongoose = require('mongoose');

const PrerequisiteSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  courseCode: {
    type: String,
    trim: true
  },
  description: {
    type: String
  },
  resources: [{
    title: String,
    url: String,
    type: {
      type: String,
      enum: ['Course', 'Book', 'Tutorial', 'Video'],
      default: 'Course'
    }
  }],
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Intermediate'
  },
  estimatedDuration: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Prerequisite', PrerequisiteSchema);
