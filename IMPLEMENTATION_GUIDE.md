# 🛠️ Implementation Guide - Expanding Functionality

This guide shows you how to complete the placeholder manager pages using the LectureManager as a template.

## Pattern Overview

All manager pages follow the same pattern:
1. **State Management** - Lists, forms, editing
2. **CRUD Operations** - Create, Read, Update, Delete
3. **Form Handling** - Dynamic fields, arrays
4. **API Integration** - Using service layer
5. **UI Components** - Consistent styling

## Example: Complete AssignmentManager

Here's how to implement AssignmentManager (you can copy-paste this):

```javascript
import React, { useState, useEffect } from 'react';
import { assignmentAPI, courseAPI, lectureAPI } from '../../services/api';
import './ManagerPage.css';

const AssignmentManager = () => {
  const [assignments, setAssignments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [lectures, setLectures] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    courseId: '',
    assignmentNumber: '',
    title: '',
    description: '',
    learningObjectives: [''],
    requirements: [''],
    relatedLectures: [],
    releaseDate: '',
    dueDate: '',
    totalPoints: 100,
    status: 'Upcoming',
    submissionFormat: '.py, .ipynb, .pdf',
    rubric: [{ criteria: '', points: 0, description: '' }],
    isPublished: false
  });

  useEffect(() => {
    loadCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      loadAssignments();
      loadLectures();
    }
  }, [selectedCourse]);

  const loadCourses = async () => {
    try {
      const res = await courseAPI.getAll();
      setCourses(res.data.data || []);
      if (res.data.data && res.data.data.length > 0) {
        setSelectedCourse(res.data.data[0]._id);
      }
    } catch (error) {
      console.error('Error loading courses:', error);
    }
  };

  const loadAssignments = async () => {
    try {
      const res = await assignmentAPI.getByCourse(selectedCourse);
      setAssignments(res.data.data || []);
    } catch (error) {
      console.error('Error loading assignments:', error);
    }
  };

  const loadLectures = async () => {
    try {
      const res = await lectureAPI.getByCourse(selectedCourse);
      setLectures(res.data.data || []);
    } catch (error) {
      console.error('Error loading lectures:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSubmit = { ...formData, courseId: selectedCourse };
      
      if (editingId) {
        await assignmentAPI.update(editingId, dataToSubmit);
        alert('Assignment updated successfully!');
      } else {
        await assignmentAPI.create(dataToSubmit);
        alert('Assignment created successfully!');
      }
      
      resetForm();
      loadAssignments();
    } catch (error) {
      console.error('Error saving assignment:', error);
      alert('Error saving assignment');
    }
  };

  const handleEdit = (assignment) => {
    setFormData(assignment);
    setEditingId(assignment._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      try {
        await assignmentAPI.delete(id);
        alert('Assignment deleted successfully!');
        loadAssignments();
      } catch (error) {
        console.error('Error deleting assignment:', error);
        alert('Error deleting assignment');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      courseId: '',
      assignmentNumber: '',
      title: '',
      description: '',
      learningObjectives: [''],
      requirements: [''],
      relatedLectures: [],
      releaseDate: '',
      dueDate: '',
      totalPoints: 100,
      status: 'Upcoming',
      submissionFormat: '.py, .ipynb, .pdf',
      rubric: [{ criteria: '', points: 0, description: '' }],
      isPublished: false
    });
    setEditingId(null);
    setShowForm(false);
  };

  const addArrayItem = (field, template) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], template]
    });
  };

  const updateArrayItem = (field, index, value) => {
    const updatedArray = [...formData[field]];
    updatedArray[index] = value;
    setFormData({ ...formData, [field]: updatedArray });
  };

  const removeArrayItem = (field, index) => {
    const updatedArray = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: updatedArray });
  };

  const getStatusBadgeClass = (status) => {
    const statusClasses = {
      'Upcoming': 'badge-warning',
      'Active': 'badge-success',
      'Graded': 'badge-success',
      'Ungraded': 'badge-warning',
      'Past Due': 'badge-danger'
    };
    return statusClasses[status] || 'badge-warning';
  };

  return (
    <div className="manager-page">
      <div className="page-header">
        <h1>📝 Assignment Manager</h1>
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Cancel' : '➕ Add New Assignment'}
        </button>
      </div>

      <div className="course-selector">
        <label>Select Course:</label>
        <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
          {courses.map(course => (
            <option key={course._id} value={course._id}>
              {course.courseCode} - {course.courseTitle}
            </option>
          ))}
        </select>
      </div>

      {showForm && (
        <div className="form-card">
          <h2>{editingId ? 'Edit Assignment' : 'Create New Assignment'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Assignment Number *</label>
                <input
                  type="number"
                  value={formData.assignmentNumber}
                  onChange={(e) => setFormData({ ...formData, assignmentNumber: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Total Points *</label>
                <input
                  type="number"
                  value={formData.totalPoints}
                  onChange={(e) => setFormData({ ...formData, totalPoints: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Feedforward Neural Networks"
                required
              />
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="4"
                placeholder="Detailed description of the assignment..."
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Release Date *</label>
                <input
                  type="date"
                  value={formData.releaseDate ? formData.releaseDate.split('T')[0] : ''}
                  onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label>Due Date *</label>
                <input
                  type="date"
                  value={formData.dueDate ? formData.dueDate.split('T')[0] : ''}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="Upcoming">Upcoming</option>
                <option value="Active">Active</option>
                <option value="Graded">Graded</option>
                <option value="Ungraded">Ungraded</option>
                <option value="Past Due">Past Due</option>
              </select>
            </div>

            <div className="form-group">
              <label>Learning Objectives</label>
              {formData.learningObjectives.map((obj, index) => (
                <div key={index} className="array-item">
                  <input
                    type="text"
                    value={obj}
                    onChange={(e) => updateArrayItem('learningObjectives', index, e.target.value)}
                    placeholder="Learning objective"
                  />
                  <button type="button" onClick={() => removeArrayItem('learningObjectives', index)}>✕</button>
                </div>
              ))}
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => addArrayItem('learningObjectives', '')}
              >
                + Add Objective
              </button>
            </div>

            <div className="form-group">
              <label>Requirements</label>
              {formData.requirements.map((req, index) => (
                <div key={index} className="array-item">
                  <input
                    type="text"
                    value={req}
                    onChange={(e) => updateArrayItem('requirements', index, e.target.value)}
                    placeholder="Requirement"
                  />
                  <button type="button" onClick={() => removeArrayItem('requirements', index)}>✕</button>
                </div>
              ))}
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => addArrayItem('requirements', '')}
              >
                + Add Requirement
              </button>
            </div>

            <div className="form-group">
              <label>Related Lectures</label>
              <select
                multiple
                value={formData.relatedLectures}
                onChange={(e) => {
                  const selected = Array.from(e.target.selectedOptions, option => option.value);
                  setFormData({ ...formData, relatedLectures: selected });
                }}
                style={{ height: '150px' }}
              >
                {lectures.map(lecture => (
                  <option key={lecture._id} value={lecture._id}>
                    Lecture {lecture.lectureNumber}: {lecture.title}
                  </option>
                ))}
              </select>
              <small>Hold Ctrl/Cmd to select multiple</small>
            </div>

            <div className="form-group">
              <label>Submission Format</label>
              <input
                type="text"
                value={formData.submissionFormat}
                onChange={(e) => setFormData({ ...formData, submissionFormat: e.target.value })}
                placeholder=".py, .ipynb, .pdf"
              />
            </div>

            <div className="form-group">
              <label>Grading Rubric</label>
              {formData.rubric.map((item, index) => (
                <div key={index} className="nested-item">
                  <input
                    type="text"
                    value={item.criteria}
                    onChange={(e) => updateArrayItem('rubric', index, { ...item, criteria: e.target.value })}
                    placeholder="Criteria"
                  />
                  <input
                    type="number"
                    value={item.points}
                    onChange={(e) => updateArrayItem('rubric', index, { ...item, points: e.target.value })}
                    placeholder="Points"
                    style={{ width: '100px' }}
                  />
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => updateArrayItem('rubric', index, { ...item, description: e.target.value })}
                    placeholder="Description"
                  />
                  <button type="button" onClick={() => removeArrayItem('rubric', index)}>✕</button>
                </div>
              ))}
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={() => addArrayItem('rubric', { criteria: '', points: 0, description: '' })}
              >
                + Add Rubric Item
              </button>
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                />
                <span>Publish immediately</span>
              </label>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                {editingId ? 'Update Assignment' : 'Create Assignment'}
              </button>
              <button type="button" className="btn-secondary" onClick={resetForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="list-card">
        <h2>Assignments ({assignments.length})</h2>
        {assignments.length === 0 ? (
          <p className="empty-message">No assignments yet. Create your first assignment!</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Release Date</th>
                  <th>Due Date</th>
                  <th>Points</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {assignments.map((assignment) => (
                  <tr key={assignment._id}>
                    <td>{assignment.assignmentNumber}</td>
                    <td>
                      <strong>{assignment.title}</strong>
                      <br />
                      <small>{assignment.description?.substring(0, 50)}...</small>
                    </td>
                    <td>{new Date(assignment.releaseDate).toLocaleDateString()}</td>
                    <td>{new Date(assignment.dueDate).toLocaleDateString()}</td>
                    <td>{assignment.totalPoints}</td>
                    <td>
                      <span className={`badge ${getStatusBadgeClass(assignment.status)}`}>
                        {assignment.status}
                      </span>
                    </td>
                    <td className="actions">
                      <button className="btn-edit" onClick={() => handleEdit(assignment)}>Edit</button>
                      <button className="btn-delete" onClick={() => handleDelete(assignment._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssignmentManager;
```

## Quick Conversion Guide for Other Managers

### 1. CourseManager
- **No course selector** (manages courses themselves)
- **Fields**: courseCode, courseTitle, subtitle, description, instructor (name, email, office, officeHours), semester, lectureSlot, lectureLocation, credits, level, enrollmentStatus, maxStudents
- **Simple form** (no complex arrays)

### 2. TAManager
- **Fields**: firstName, lastName, email, lab, officeHours, availableDays (checkboxes), responsibilities (array), photoUrl
- **Table columns**: Name, Email, Lab, Office Hours, Days, Actions

### 3. TutorialManager
- **Similar to LectureManager**
- **Fields**: tutorialNumber, title, description, topicsCovered, coveredInLectures (multi-select), whyItMatters, videos, slides, practiceProblems

### 4. PrerequisiteManager
- **Simple list** (no complex nested fields)
- **Fields**: title, courseCode, description, resources (array), level (dropdown), estimatedDuration
- **No course selector** if prerequisites belong to course

### 5. ExamManager
- **Fields**: examType (dropdown), title, date, time (start/end), location, duration, totalMarks, format, syllabus (array), coveredLectures (multi-select), guidelines (array), preparationResources (array), samplePapers (array), importantDates (array of objects)

### 6. ResourceManager
- **Category-based**
- **Fields**: category (dropdown), title, description, url, author, publisher, year, tags (array), isPremium (checkbox), icon
- **Table**: Group by category

## Common Patterns

### Array Field Template
```javascript
{formData.arrayField.map((item, index) => (
  <div key={index} className="array-item">
    <input
      type="text"
      value={item}
      onChange={(e) => updateArrayItem('arrayField', index, e.target.value)}
      placeholder="Item name"
    />
    <button type="button" onClick={() => removeArrayItem('arrayField', index)}>✕</button>
  </div>
))}
<button type="button" className="btn-secondary" onClick={() => addArrayItem('arrayField', '')}>
  + Add Item
</button>
```

### Object Array Template
```javascript
{formData.objectArray.map((item, index) => (
  <div key={index} className="nested-item">
    <input
      value={item.field1}
      onChange={(e) => updateArrayItem('objectArray', index, { ...item, field1: e.target.value })}
      placeholder="Field 1"
    />
    <input
      value={item.field2}
      onChange={(e) => updateArrayItem('objectArray', index, { ...item, field2: e.target.value })}
      placeholder="Field 2"
    />
    <button type="button" onClick={() => removeArrayItem('objectArray', index)}>✕</button>
  </div>
))}
```

### Multi-Select for Related Items
```javascript
<select
  multiple
  value={formData.relatedItems}
  onChange={(e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, relatedItems: selected });
  }}
  style={{ height: '150px' }}
>
  {items.map(item => (
    <option key={item._id} value={item._id}>
      {item.title}
    </option>
  ))}
</select>
```

## Testing Workflow

1. Start MongoDB
2. Run `npm run setup` (first time only)
3. Run `npm run dev`
4. Login to admin
5. Create a course
6. Test each manager:
   - Create item
   - Edit item
   - Delete item
   - Verify on public site

## Next Steps

1. **Complete remaining managers** using the patterns above
2. **Enhance public pages** to display data from API
3. **Add file upload UI** for documents
4. **Implement search** and filtering
5. **Add pagination** for large lists
6. **Create detailed views** for each item

## Code Reusability Tips

Create a generic `useManager` hook:
```javascript
const useManager = (api, courseDependent = true) => {
  // Common logic for all managers
  // Returns: items, loading, create, update, delete functions
};
```

Create form components:
- `ArrayInput.js` - Reusable array field
- `DateRangePicker.js` - Release/Due dates
- `RelatedItemsSelect.js` - Multi-select

## Documentation

Each manager should have:
- Clear field labels
- Placeholder text
- Help text for complex fields
- Validation messages
- Success/error notifications

---

**You now have a complete foundation!** Use LectureManager.js and AssignmentManager as templates to implement the remaining managers. The pattern is consistent across all components.
