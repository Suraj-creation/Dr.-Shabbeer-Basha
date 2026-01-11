const mongoose = require('mongoose');

const AssignmentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  assignmentNumber: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  learningObjectives: [{
    type: String
  }],
  requirements: [{
    type: String
  }],
  relatedLectures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecture'
  }],
  releaseDate: {
    type: Date,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  totalPoints: {
    type: Number,
    default: 100
  },
  status: {
    type: String,
    enum: ['Upcoming', 'Active', 'Graded', 'Ungraded', 'Past Due'],
    default: 'Upcoming'
  },
  templateFiles: [{
    fileName: String,
    url: String,
    size: Number
  }],
  submissionFormat: {
    type: String,
    default: '.py, .ipynb, .pdf'
  },
  rubric: [{
    criteria: String,
    points: Number,
    description: String
  }],
  isPublished: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

AssignmentSchema.index({ courseId: 1, assignmentNumber: 1 });

module.exports = mongoose.model('Assignment', AssignmentSchema);
