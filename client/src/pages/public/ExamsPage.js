import React, { useState, useEffect } from 'react';
import { courseAPI, examAPI } from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './PublicPages.css';

function ExamsPage() {
  const [courses, setCourses] = useState([]);
  const [exams, setExams] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadCourses(); }, []);
  useEffect(() => {
    if (selectedCourse) loadExams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCourse]);

  const loadCourses = async () => {
    try {
      const response = await courseAPI.getAll();
      const coursesData = response.data.data || [];
      setCourses(coursesData);
      if (coursesData.length > 0) setSelectedCourse(coursesData[0]._id);
      setLoading(false);
    } catch (error) { console.error('Error:', error); setLoading(false); }
  };

  const loadExams = async () => {
    try {
      const response = await examAPI.getByCourse(selectedCourse);
      setExams(response.data.data || []);
    } catch (error) { console.error('Error:', error); }
  };

  const getExamTypeBadge = (type) => {
    const colors = {
      'Midterm': 'badge-warning',
      'End-Semester': 'badge-danger',
      'Quiz': 'badge-success',
      'Final': 'badge-danger'
    };
    return colors[type] || 'badge-info';
  };

  return (
    <div className="public-page">
      <Header userRole="student" />
      
      <main className="main-container">
        <div className="page-title-section">
          <h1>📋 Examinations</h1>
          <p>View exam schedules, locations, and guidelines</p>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <span className="loading-text">Loading exams...</span>
          </div>
        ) : (
          <>
            <div className="course-selector-container">
              <label>Select Course:</label>
              <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                {courses.map(course => (
                  <option key={course._id} value={course._id}>
                    {course.courseCode} - {course.courseTitle}
                  </option>
                ))}
              </select>
            </div>

            <section className="exams-section">
              {exams.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">📝</div>
                  <h3>No Exams Scheduled</h3>
                  <p>Exam information will appear here when available.</p>
                </div>
              ) : (
                <div className="exams-list">
                  {exams.map(exam => (
                    <div key={exam._id} className="content-card">
                      <div className="content-card-header">
                        <h3>{exam.title}</h3>
                        <span className={`badge ${getExamTypeBadge(exam.examType)}`}>{exam.examType}</span>
                      </div>
                      
                      <div className="info-grid">
                        {exam.date && (
                          <div className="info-item">
                            <label><FaCalendarAlt /> Date</label>
                            <span>{new Date(exam.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                        )}
                        {exam.time && (
                          <div className="info-item">
                            <label><FaClock /> Time</label>
                            <span>{exam.time.start} - {exam.time.end}</span>
                          </div>
                        )}
                        {exam.location && (
                          <div className="info-item">
                            <label><FaMapMarkerAlt /> Location</label>
                            <span>{exam.location}</span>
                          </div>
                        )}
                        {exam.duration && (
                          <div className="info-item">
                            <label>Duration</label>
                            <span>{exam.duration}</span>
                          </div>
                        )}
                        {exam.totalMarks && (
                          <div>
                            <strong>💯 Total Marks:</strong> {exam.totalMarks}
                          </div>
                        )}
                        {exam.format && (
                          <div>
                            <strong>📋 Format:</strong> {exam.format}
                          </div>
                        )}
                      </div>
                      
                      {exam.syllabus && exam.syllabus.length > 0 && (
                        <div style={{marginTop: '15px'}}>
                          <h4>📚 Syllabus:</h4>
                          <ul>
                            {exam.syllabus.map((topic, i) => <li key={i}>{topic}</li>)}
                          </ul>
                        </div>
                      )}
                      
                      {exam.guidelines && exam.guidelines.length > 0 && (
                        <div style={{marginTop: '15px'}}>
                          <h4>ℹ️ Guidelines:</h4>
                          <ul>
                            {exam.guidelines.map((guideline, i) => <li key={i}>{guideline}</li>)}
                          </ul>
                        </div>
                      )}
                      
                      {exam.preparationResources && exam.preparationResources.length > 0 && (
                        <div style={{marginTop: '15px'}}>
                          <h4>📖 Preparation Resources:</h4>
                          <ul>
                            {exam.preparationResources.map((resource, i) => (
                              <li key={i}>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default ExamsPage;
