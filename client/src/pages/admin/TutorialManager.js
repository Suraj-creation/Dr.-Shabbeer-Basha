import React, { useState, useEffect } from 'react';
import { tutorialAPI, courseAPI, lectureAPI } from '../../services/api';
import './ManagerPage.css';

const TutorialManager = () => {
  const [tutorials, setTutorials] = useState([]);
  const [courses, setCourses] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    tutorialNumber: '',
    title: '',
    description: '',
    topicsCovered: [''],
    coveredInLectures: [],
    whyItMatters: '',
    videos: [{ title: '', url: '', duration: '' }],
    slides: [{ title: '', url: '' }],
    practiceProblems: [{ title: '', url: '', solutionsUrl: '' }],
    isPublished: true
  });

  useEffect(() => { loadCourses(); }, []);
  useEffect(() => { 
    if (selectedCourse) { 
      loadTutorials(); 
      loadLectures(); 
    } 
  }, [selectedCourse]);

  const loadCourses = async () => {
    try {
      const response = await courseAPI.getAll();
      const coursesData = response.data.data || [];
      setCourses(coursesData);
      if (coursesData.length > 0) setSelectedCourse(coursesData[0]._id);
    } catch (error) {
      console.error('Error loading courses:', error);
    }
  };

  const loadLectures = async () => {
    if (!selectedCourse) return;
    try {
      const response = await lectureAPI.getByCourse(selectedCourse);
      setLectures(response.data.data || []);
    } catch (error) {
      console.error('Error loading lectures:', error);
    }
  };

  const loadTutorials = async () => {
    if (!selectedCourse) return;
    try {
      const response = await tutorialAPI.getAllByCourse(selectedCourse);
      setTutorials(response.data.data || []);
    } catch (error) {
      console.error('Error loading tutorials:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  const removeArrayItem = (field, index) => {
    if (formData[field].length > 1) {
      setFormData(prev => ({ ...prev, [field]: prev[field].filter((_, i) => i !== index) }));
    }
  };

  const handleVideoChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      videos: prev.videos.map((item, i) => i === index ? { ...item, [field]: value } : item)
    }));
  };

  const addVideo = () => {
    setFormData(prev => ({ ...prev, videos: [...prev.videos, { title: '', url: '', duration: '' }] }));
  };

  const removeVideo = (index) => {
    if (formData.videos.length > 1) {
      setFormData(prev => ({ ...prev, videos: prev.videos.filter((_, i) => i !== index) }));
    }
  };

  const handleSlideChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      slides: prev.slides.map((item, i) => i === index ? { ...item, [field]: value } : item)
    }));
  };

  const addSlide = () => {
    setFormData(prev => ({ ...prev, slides: [...prev.slides, { title: '', url: '' }] }));
  };

  const removeSlide = (index) => {
    if (formData.slides.length > 1) {
      setFormData(prev => ({ ...prev, slides: prev.slides.filter((_, i) => i !== index) }));
    }
  };

  const handleProblemChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      practiceProblems: prev.practiceProblems.map((item, i) => i === index ? { ...item, [field]: value } : item)
    }));
  };

  const addProblem = () => {
    setFormData(prev => ({ ...prev, practiceProblems: [...prev.practiceProblems, { title: '', url: '', solutionsUrl: '' }] }));
  };

  const removeProblem = (index) => {
    if (formData.practiceProblems.length > 1) {
      setFormData(prev => ({ ...prev, practiceProblems: prev.practiceProblems.filter((_, i) => i !== index) }));
    }
  };

  const handleLectureToggle = (lectureId) => {
    setFormData(prev => ({
      ...prev,
      coveredInLectures: prev.coveredInLectures.includes(lectureId)
        ? prev.coveredInLectures.filter(id => id !== lectureId)
        : [...prev.coveredInLectures, lectureId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSubmit = {
        ...formData,
        courseId: selectedCourse,
        topicsCovered: formData.topicsCovered.filter(t => t.trim()),
        videos: formData.videos.filter(v => v.title.trim() || v.url.trim()),
        slides: formData.slides.filter(s => s.title.trim() || s.url.trim()),
        practiceProblems: formData.practiceProblems.filter(p => p.title.trim())
      };

      if (editingId) {
        await tutorialAPI.update(editingId, dataToSubmit);
        alert('Tutorial updated successfully!');
      } else {
        await tutorialAPI.create(dataToSubmit);
        alert('Tutorial created successfully!');
      }
      resetForm();
      loadTutorials();
    } catch (error) {
      console.error('Error saving tutorial:', error);
      alert('Failed to save tutorial. Please check all required fields.');
    }
  };

  const handleEdit = (tutorial) => {
    setFormData({
      tutorialNumber: tutorial.tutorialNumber || '',
      title: tutorial.title || '',
      description: tutorial.description || '',
      topicsCovered: tutorial.topicsCovered?.length ? tutorial.topicsCovered : [''],
      coveredInLectures: tutorial.coveredInLectures?.map(l => l._id || l) || [],
      whyItMatters: tutorial.whyItMatters || '',
      videos: tutorial.videos?.length ? tutorial.videos : [{ title: '', url: '', duration: '' }],
      slides: tutorial.slides?.length ? tutorial.slides : [{ title: '', url: '' }],
      practiceProblems: tutorial.practiceProblems?.length ? tutorial.practiceProblems : [{ title: '', url: '', solutionsUrl: '' }],
      isPublished: tutorial.isPublished !== undefined ? tutorial.isPublished : true
    });
    setEditingId(tutorial._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this tutorial?')) {
      try {
        await tutorialAPI.delete(id);
        alert('Tutorial deleted successfully!');
        loadTutorials();
      } catch (error) {
        console.error('Error deleting tutorial:', error);
        alert('Failed to delete tutorial');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      tutorialNumber: '',
      title: '',
      description: '',
      topicsCovered: [''],
      coveredInLectures: [],
      whyItMatters: '',
      videos: [{ title: '', url: '', duration: '' }],
      slides: [{ title: '', url: '' }],
      practiceProblems: [{ title: '', url: '', solutionsUrl: '' }],
      isPublished: true
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="manager-page">
      <div className="page-header">
        <h1>📚 Tutorial Manager</h1>
        <button 
          className="btn-primary" 
          onClick={() => setShowForm(!showForm)} 
          disabled={!selectedCourse}
        >
          {showForm ? '✕ Cancel' : '➕ Add New Tutorial'}
        </button>
      </div>

      {/* Course Selector */}
      <div className="course-selector">
        <label>Select Course:</label>
        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
          <option value="">-- Choose a course --</option>
          {courses.map(course => (
            <option key={course._id} value={course._id}>
              {course.courseCode} - {course.courseTitle}
            </option>
          ))}
        </select>
      </div>

      {/* Form */}
      {showForm && (
        <div className="form-card">
          <h2>{editingId ? '✏️ Edit Tutorial' : '➕ Create New Tutorial'}</h2>
          <form onSubmit={handleSubmit}>
            {/* Basic Info Section */}
            <div className="form-section">
              <h3 className="section-title">📋 Basic Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Tutorial Number *</label>
                  <input
                    type="number"
                    name="tutorialNumber"
                    value={formData.tutorialNumber}
                    onChange={handleInputChange}
                    placeholder="e.g., 1"
                    required
                    min="1"
                  />
                </div>
                <div className="form-group">
                  <label>Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Introduction to Python Programming"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Brief description of what this tutorial covers..."
                />
              </div>

              <div className="form-group">
                <label>Why It Matters</label>
                <textarea
                  name="whyItMatters"
                  value={formData.whyItMatters}
                  onChange={handleInputChange}
                  rows="2"
                  placeholder="Explain why students should learn this topic..."
                />
              </div>
            </div>

            {/* Topics Section */}
            <div className="form-section">
              <h3 className="section-title">📝 Topics Covered</h3>
              {formData.topicsCovered.map((topic, index) => (
                <div key={index} className="array-item">
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => handleArrayChange('topicsCovered', index, e.target.value)}
                    placeholder={`Topic ${index + 1}`}
                  />
                  <button type="button" onClick={() => removeArrayItem('topicsCovered', index)} className="btn-remove">
                    ✕
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => addArrayItem('topicsCovered')} className="btn-secondary">
                + Add Topic
              </button>
            </div>

            {/* Related Lectures Section */}
            <div className="form-section">
              <h3 className="section-title">🎓 Related Lectures</h3>
              <div className="checkbox-group">
                {lectures.length === 0 ? (
                  <p className="empty-message">No published lectures available. Create lectures first.</p>
                ) : (
                  lectures.map(lecture => (
                    <label key={lecture._id} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.coveredInLectures.includes(lecture._id)}
                        onChange={() => handleLectureToggle(lecture._id)}
                      />
                      <span>Lecture {lecture.lectureNumber}: {lecture.title}</span>
                    </label>
                  ))
                )}
              </div>
            </div>

            {/* Videos Section */}
            <div className="form-section">
              <h3 className="section-title">🎥 Tutorial Videos</h3>
              {formData.videos.map((video, index) => (
                <div key={index} className="nested-item">
                  <input
                    type="text"
                    value={video.title}
                    onChange={(e) => handleVideoChange(index, 'title', e.target.value)}
                    placeholder="Video Title (e.g., Part 1 - Basics)"
                    style={{ flex: 2 }}
                  />
                  <input
                    type="url"
                    value={video.url}
                    onChange={(e) => handleVideoChange(index, 'url', e.target.value)}
                    placeholder="YouTube URL"
                    style={{ flex: 3 }}
                  />
                  <input
                    type="text"
                    value={video.duration}
                    onChange={(e) => handleVideoChange(index, 'duration', e.target.value)}
                    placeholder="Duration (e.g., 15:30)"
                    style={{ width: '100px', flex: 'none' }}
                  />
                  <button type="button" onClick={() => removeVideo(index)} className="btn-remove">
                    ✕
                  </button>
                </div>
              ))}
              <button type="button" onClick={addVideo} className="btn-secondary">
                + Add Video
              </button>
            </div>

            {/* Slides Section */}
            <div className="form-section">
              <h3 className="section-title">📄 Tutorial Slides</h3>
              {formData.slides.map((slide, index) => (
                <div key={index} className="nested-item">
                  <input
                    type="text"
                    value={slide.title}
                    onChange={(e) => handleSlideChange(index, 'title', e.target.value)}
                    placeholder="Slide Title"
                    style={{ flex: 1 }}
                  />
                  <input
                    type="url"
                    value={slide.url}
                    onChange={(e) => handleSlideChange(index, 'url', e.target.value)}
                    placeholder="URL (Google Drive, Dropbox, etc.)"
                    style={{ flex: 2 }}
                  />
                  <button type="button" onClick={() => removeSlide(index)} className="btn-remove">
                    ✕
                  </button>
                </div>
              ))}
              <button type="button" onClick={addSlide} className="btn-secondary">
                + Add Slides
              </button>
            </div>

            {/* Practice Problems Section */}
            <div className="form-section">
              <h3 className="section-title">✏️ Practice Problems</h3>
              {formData.practiceProblems.map((problem, index) => (
                <div key={index} className="nested-item">
                  <input
                    type="text"
                    value={problem.title}
                    onChange={(e) => handleProblemChange(index, 'title', e.target.value)}
                    placeholder="Problem Title"
                    style={{ flex: 1 }}
                  />
                  <input
                    type="url"
                    value={problem.url}
                    onChange={(e) => handleProblemChange(index, 'url', e.target.value)}
                    placeholder="Problem URL"
                    style={{ flex: 1 }}
                  />
                  <input
                    type="url"
                    value={problem.solutionsUrl}
                    onChange={(e) => handleProblemChange(index, 'solutionsUrl', e.target.value)}
                    placeholder="Solutions URL (optional)"
                    style={{ flex: 1 }}
                  />
                  <button type="button" onClick={() => removeProblem(index)} className="btn-remove">
                    ✕
                  </button>
                </div>
              ))}
              <button type="button" onClick={addProblem} className="btn-secondary">
                + Add Problem
              </button>
            </div>

            {/* Publish Toggle */}
            <div className="form-section">
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="isPublished"
                    checked={formData.isPublished}
                    onChange={handleInputChange}
                  />
                  <span>✅ Publish immediately (visible to students)</span>
                </label>
              </div>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editingId ? '💾 Update Tutorial' : '➕ Create Tutorial'}
              </button>
              <button type="button" className="btn-secondary" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tutorials List */}
      {selectedCourse && (
        <div className="list-card">
          <h2>📚 Tutorials ({tutorials.length})</h2>
          {tutorials.length === 0 ? (
            <p className="empty-message">No tutorials yet. Create your first tutorial!</p>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Topics</th>
                    <th>Videos</th>
                    <th>Slides</th>
                    <th>Problems</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tutorials.map(tutorial => (
                    <tr key={tutorial._id}>
                      <td><strong>{tutorial.tutorialNumber}</strong></td>
                      <td>
                        <strong>{tutorial.title}</strong>
                        {tutorial.description && (
                          <br />
                        )}
                        <small style={{ color: '#666' }}>
                          {tutorial.description?.substring(0, 50)}
                          {tutorial.description?.length > 50 ? '...' : ''}
                        </small>
                      </td>
                      <td>{tutorial.topicsCovered?.length || 0}</td>
                      <td>{tutorial.videos?.length || 0} 🎥</td>
                      <td>{tutorial.slides?.length || 0} 📄</td>
                      <td>{tutorial.practiceProblems?.length || 0} ✏️</td>
                      <td>
                        <span className={`badge ${tutorial.isPublished ? 'badge-success' : 'badge-warning'}`}>
                          {tutorial.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="actions">
                        <button className="btn-edit" onClick={() => handleEdit(tutorial)}>
                          Edit
                        </button>
                        <button className="btn-delete" onClick={() => handleDelete(tutorial._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TutorialManager;
