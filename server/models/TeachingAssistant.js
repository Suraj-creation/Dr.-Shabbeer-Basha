const mongoose = require('mongoose');

const TeachingAssistantSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  lab: {
    type: String,
    trim: true
  },
  officeHours: {
    type: String,
    trim: true
  },
  availableDays: [{
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  }],
  responsibilities: [{
    type: String
  }],
  photoUrl: String,
  contactPreference: {
    type: String,
    enum: ['Email', 'Office Hours', 'Both'],
    default: 'Both'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('TeachingAssistant', TeachingAssistantSchema);
