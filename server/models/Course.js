const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  courseTitle: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    office: String,
    officeHours: String
  },
  semester: {
    type: String,
    required: true
  },
  lectureSlot: String,
  lectureLocation: String,
  credits: Number,
  level: String,
  enrollmentStatus: {
    type: String,
    enum: ['Open', 'Closed', 'Coming Soon'],
    default: 'Open'
  },
  maxStudents: Number,
  image: String,
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', CourseSchema);
