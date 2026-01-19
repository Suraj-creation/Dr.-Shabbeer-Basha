import React, { useState, useEffect } from 'react';
import { courseAPI, prerequisiteAPI } from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import './PublicPages.css';

function PrerequisitesPage() {
  const [courses, setCourses] = useState([]);
  const [prerequisites, setPrerequisites] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadCourses(); }, []);
  useEffect(() => {
    if (selectedCourse) loadPrerequisites();
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

  const loadPrerequisites = async () => {
    try {
      const response = await prerequisiteAPI.getByCourse(selectedCourse);
      setPrerequisites(response.data.data || []);
    } catch (error) { console.error('Error:', error); }
  };

  const getLevelBadge = (level) => {
    const colors = {
      'Beginner': 'badge-success',
      'Intermediate': 'badge-warning',
      'Advanced': 'badge-danger'
    };
    return colors[level] || 'badge-info';
  };

  return (
    <div className="public-page">
      <Header userRole="student" />
      
      <main className="main-container">
        <div className="page-title-section">
          <h1>📋 Prerequisites</h1>
          <p>Required knowledge and recommended preparation before taking this course</p>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <span className="loading-text">Loading prerequisites...</span>
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

            <section className="prerequisites-section">
              {prerequisites.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">📚</div>
                  <h3>No Prerequisites Defined</h3>
                  <p>Prerequisites will appear here when available.</p>
                </div>
              ) : (
                <div className="course-grid">
                  {prerequisites.map(prereq => (
                    <div key={prereq._id} className="course-card">
                      <div className="content-card-header">
                        <h3>{prereq.title}</h3>
                        {prereq.level && <span className={`badge ${getLevelBadge(prereq.level)}`}>{prereq.level}</span>}
                      </div>
                      
                      {prereq.courseCode && (
                        <p style={{fontSize: '0.9rem', color: '#3498db', marginBottom: '12px', fontWeight: 600}}>
                          {prereq.courseCode}
                        </p>
                      )}
                      
                      {prereq.description && <p>{prereq.description}</p>}
                      
                      {prereq.estimatedDuration && (
                        <p style={{marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px', color: '#7f8c8d'}}>
                          <FaClock /> Estimated: {prereq.estimatedDuration}
                        </p>
                      )}
                      
                      {prereq.resources && prereq.resources.length > 0 && (
                        <div className="links-section">
                          <h4>📚 Learning Resources</h4>
                          <ul>
                            {prereq.resources.map((resource, i) => (
                              <li key={i}>
                                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                  {resource.title} <FaExternalLinkAlt size={10} />
                                  {resource.title}
                                </a>
                                {resource.type && (
                                  <span style={{marginLeft: '8px', fontSize: '12px', color: '#666'}}>
                                    ({resource.type})
                                  </span>
                                )}
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

export default PrerequisitesPage;
