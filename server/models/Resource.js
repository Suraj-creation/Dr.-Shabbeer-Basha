const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'Books',
      'Online Courses',
      'Research Papers',
      'Tools & Frameworks',
      'Communities',
      'Datasets',
      'Documentation',
      'Other'
    ]
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  author: {
    type: String
  },
  publisher: {
    type: String
  },
  year: {
    type: String
  },
  tags: [{
    type: String
  }],
  isPremium: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

ResourceSchema.index({ courseId: 1, category: 1 });

module.exports = mongoose.model('Resource', ResourceSchema);
