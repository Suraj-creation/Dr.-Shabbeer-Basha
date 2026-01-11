const express = require('express');
const router = express.Router();
const Lecture = require('../models/Lecture');
const auth = require('../middleware/auth');

// Get all lectures for a course
router.get('/course/:courseId', async (req, res) => {
  try {
    const lectures = await Lecture.find({ 
      courseId: req.params.courseId,
      isPublished: true 
    }).sort({ lectureNumber: 1 });
    
    res.json({ success: true, count: lectures.length, data: lectures });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get single lecture
router.get('/:id', async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    if (!lecture) {
      return res.status(404).json({ success: false, message: 'Lecture not found' });
    }
    res.json({ success: true, data: lecture });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Create lecture
router.post('/', auth, async (req, res) => {
  try {
    const lecture = new Lecture(req.body);
    await lecture.save();
    res.status(201).json({ success: true, message: 'Lecture created successfully', data: lecture });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update lecture
router.put('/:id', auth, async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!lecture) {
      return res.status(404).json({ success: false, message: 'Lecture not found' });
    }
    res.json({ success: true, message: 'Lecture updated successfully', data: lecture });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Delete lecture
router.delete('/:id', auth, async (req, res) => {
  try {
    const lecture = await Lecture.findByIdAndDelete(req.params.id);
    if (!lecture) {
      return res.status(404).json({ success: false, message: 'Lecture not found' });
    }
    res.json({ success: true, message: 'Lecture deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
