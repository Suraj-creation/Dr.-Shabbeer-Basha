const mongoose = require('mongoose');

const LectureSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  lectureNumber: {
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
  date: {
    type: Date
  },
  topicsCovered: [{
    type: String
  }],
  slides: [{
    title: String,
    url: String,
    fileName: String
  }],
  videos: [{
    title: String,
    url: String,
    duration: String,
    platform: {
      type: String,
      enum: ['YouTube', 'Vimeo', 'Custom'],
      default: 'YouTube'
    }
  }],
  readingMaterials: [{
    title: String,
    author: String,
    year: String,
    url: String,
    type: {
      type: String,
      enum: ['Paper', 'Book', 'Article', 'Tutorial'],
      default: 'Paper'
    }
  }],
  additionalResources: [{
    title: String,
    url: String,
    type: String
  }],
  isPublished: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for efficient querying
LectureSchema.index({ courseId: 1, lectureNumber: 1 });

module.exports = mongoose.model('Lecture', LectureSchema);
