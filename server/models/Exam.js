const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  examType: {
    type: String,
    enum: ['Midterm', 'End-Semester', 'Quiz', 'Final'],
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    start: String,
    end: String
  },
  location: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  totalMarks: {
    type: Number,
    required: true
  },
  format: {
    type: String,
    default: 'Written'
  },
  syllabus: [{
    type: String
  }],
  coveredLectures: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecture'
  }],
  guidelines: [{
    type: String
  }],
  preparationResources: [{
    title: String,
    url: String,
    type: String
  }],
  samplePapers: [{
    title: String,
    url: String,
    year: String
  }],
  importantDates: [{
    event: String,
    date: Date,
    description: String
  }],
  isPublished: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Exam', ExamSchema);
