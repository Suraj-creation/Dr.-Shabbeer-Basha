const express = require('express');
const router = express.Router();
const TeachingAssistant = require('../models/TeachingAssistant');
const auth = require('../middleware/auth');

// Get all TAs for a course
router.get('/course/:courseId', async (req, res) => {
  try {
    const tas = await TeachingAssistant.find({ 
      courseId: req.params.courseId,
      isActive: true 
    }).sort({ order: 1, lastName: 1 });
    
    res.json({ success: true, count: tas.length, data: tas });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get single TA
router.get('/:id', async (req, res) => {
  try {
    const ta = await TeachingAssistant.findById(req.params.id);
    if (!ta) {
      return res.status(404).json({ success: false, message: 'Teaching Assistant not found' });
    }
    res.json({ success: true, data: ta });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Create TA
router.post('/', auth, async (req, res) => {
  try {
    const ta = new TeachingAssistant(req.body);
    await ta.save();
    res.status(201).json({ success: true, message: 'Teaching Assistant added successfully', data: ta });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update TA
router.put('/:id', auth, async (req, res) => {
  try {
    const ta = await TeachingAssistant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!ta) {
      return res.status(404).json({ success: false, message: 'Teaching Assistant not found' });
    }
    res.json({ success: true, message: 'Teaching Assistant updated successfully', data: ta });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Delete TA
router.delete('/:id', auth, async (req, res) => {
  try {
    const ta = await TeachingAssistant.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!ta) {
      return res.status(404).json({ success: false, message: 'Teaching Assistant not found' });
    }
    res.json({ success: true, message: 'Teaching Assistant removed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
