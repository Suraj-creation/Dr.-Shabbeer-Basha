import React, { useState, useEffect } from 'react';
import { courseAPI, tutorialAPI } from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaPlay, FaLightbulb, FaExternalLinkAlt } from 'react-icons/fa';
import './PublicPages.css';

function TutorialsPage() {
  const [courses, setCourses] = useState([]);
  const [tutorials, setTutorials] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadCourses(); }, []);
  useEffect(() => {
    if (selectedCourse) loadTutorials();
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

  const loadTutorials = async () => {
    try {
      const response = await tutorialAPI.getByCourse(selectedCourse);
      setTutorials(response.data.data || []);
    } catch (error) { console.error('Error:', error); }
  };

  return (
    <div className="public-page">
      <Header userRole="student" />
      
      <main className="main-container">
        <div className="page-title-section">
          <h1>📚 Tutorials</h1>
          <p>Supplementary tutorials and practice materials</p>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <span className="loading-text">Loading tutorials...</span>
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

            <section className="tutorials-section">
              {tutorials.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">📖</div>
                  <h3>No Tutorials Available</h3>
                  <p>Tutorials will appear here when published.</p>
                </div>
              ) : (
                <div className="tutorials-list">
                  {tutorials.map(tutorial => (
                    <div key={tutorial._id} className="content-card">
                      <div className="content-card-header">
                        <h3>Tutorial {tutorial.tutorialNumber}: {tutorial.title}</h3>
                        {tutorial.isPublished && <span className="badge badge-success">Published</span>}
                      </div>
                      
                      {tutorial.description && <p>{tutorial.description}</p>}
                      
                      {tutorial.topicsCovered && tutorial.topicsCovered.length > 0 && (
                        <div className="links-section">
                          <h4>📌 Topics Covered</h4>
                          <ul className="content-list">
                            {tutorial.topicsCovered.map((topic, i) => <li key={i}>{topic}</li>)}
                          </ul>
                        </div>
                      )}
                      
                      {tutorial.whyItMatters && (
                        <div style={{marginTop: '16px', padding: '16px', background: 'rgba(52, 152, 219, 0.08)', borderRadius: '12px', borderLeft: '4px solid #3498db'}}>
                          <h4 style={{margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <FaLightbulb color="#f39c12" /> Why It Matters
                          </h4>
                          <p style={{margin: 0}}>{tutorial.whyItMatters}</p>
                        </div>
                      )}
                      
                      {tutorial.videos && tutorial.videos.length > 0 && (
                        <div className="links-section">
                          <h4><FaPlay /> Videos ({tutorial.videos.length})</h4>
                          <ul>
                            {tutorial.videos.map((video, i) => (
                              <li key={i}>
                                <a href={video.url} target="_blank" rel="noopener noreferrer">
                                  {video.title} {video.duration && `(${video.duration})`} <FaExternalLinkAlt size={10} />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {tutorial.slides && tutorial.slides.length > 0 && (
                        <div style={{marginTop: '15px'}}>
                          <h4>📄 Slides ({tutorial.slides.length}):</h4>
                          <ul>
                            {tutorial.slides.map((slide, i) => (
                              <li key={i}>
                                <a href={slide.url} target="_blank" rel="noopener noreferrer">{slide.title}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {tutorial.practiceProblems && tutorial.practiceProblems.length > 0 && (
                        <div style={{marginTop: '15px'}}>
                          <h4>✏️ Practice Problems ({tutorial.practiceProblems.length}):</h4>
                          {tutorial.practiceProblems.map((problem, i) => (
                            <div key={i} style={{marginBottom: '10px', padding: '10px', background: '#f9f9f9', borderRadius: '4px'}}>
                              <strong>{problem.title}</strong> 
                              <span className={`badge ${problem.difficulty === 'Easy' ? 'badge-success' : problem.difficulty === 'Medium' ? 'badge-warning' : 'badge-danger'}`} style={{marginLeft: '10px'}}>
                                {problem.difficulty}
                              </span>
                              <p style={{marginTop: '5px'}}>{problem.description}</p>
                            </div>
                          ))}
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

export default TutorialsPage;
