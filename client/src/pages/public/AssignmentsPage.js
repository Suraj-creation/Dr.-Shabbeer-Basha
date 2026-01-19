import React, { useState, useEffect } from 'react';
import { courseAPI, assignmentAPI } from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaCalendarAlt, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import './PublicPages.css';

const AssignmentsPage = () => {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => { loadCourses(); }, []);
  useEffect(() => { if (selectedCourse) loadAssignments(); }, [selectedCourse]);

  const loadCourses = async () => {
    try {
      const r = await courseAPI.getAll();
      const d = r.data.data || [];
      setCourses(d);
      if (d.length > 0) setSelectedCourse(d[0]._id);
      setLoading(false);
    } catch (e) { console.error(e); setLoading(false); }
  };

  const loadAssignments = async () => {
    try {
      const r = await assignmentAPI.getByCourse(selectedCourse);
      setAssignments(r.data.data || []);
    } catch (e) { console.error(e); }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active': return 'badge-success';
      case 'Graded': return 'badge-info';
      case 'Past Due': return 'badge-danger';
      default: return 'badge-warning';
    }
  };

  return (
    <div className="public-page">
      <Header />
      <main className="main-container">
        <div className="page-title-section">
          <h1>Assignments</h1>
          <p>View and download course assignments with due dates and requirements</p>
        </div>
        {loading ? (
          <div className="loading-container"><div className="loading-spinner"></div><span className="loading-text">Loading...</span></div>
        ) : (
          <>
            <div className="course-selector-container">
              <label>Select Course:</label>
              <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                {courses.map(c => <option key={c._id} value={c._id}>{c.courseCode} - {c.courseTitle}</option>)}
              </select>
            </div>
            <section className="assignments-section">
              {assignments.length === 0 ? (
                <div className="empty-state"><div className="empty-state-icon"></div><h3>No Assignments Available</h3><p>Assignments will appear here when published.</p></div>
              ) : (
                <div className="assignments-list">
                  {assignments.map(a => (
                    <div key={a._id} className="content-card">
                      <div className="content-card-header">
                        <h3>Assignment {a.assignmentNumber}: {a.title}</h3>
                        <span className={`badge ${getStatusClass(a.status)}`}>{a.status}</span>
                      </div>
                      <p>{a.description}</p>
                      <div className="info-grid">
                        <div className="info-item"><label><FaCalendarAlt /> Release Date</label><span>{new Date(a.releaseDate).toLocaleDateString()}</span></div>
                        <div className="info-item"><label><FaCalendarAlt /> Due Date</label><span style={{color:'#e74c3c',fontWeight:600}}>{new Date(a.dueDate).toLocaleDateString()}</span></div>
                        <div className="info-item"><label>Total Points</label><span>{a.totalPoints}</span></div>
                        {a.submissionFormat && <div className="info-item"><label>Format</label><span>{a.submissionFormat}</span></div>}
                      </div>
                      {a.learningObjectives && a.learningObjectives.length > 0 && (
                        <div className="links-section"><h4>Learning Objectives</h4><ul className="content-list">{a.learningObjectives.map((obj, i) => <li key={i}>{obj}</li>)}</ul></div>
                      )}
                      {a.requirements && a.requirements.length > 0 && (
                        <div className="links-section"><h4>Requirements</h4><ul className="content-list">{a.requirements.map((r, i) => <li key={i}>{r}</li>)}</ul></div>
                      )}
                      {a.templateFiles && a.templateFiles.length > 0 && (
                        <div className="links-section"><h4><FaDownload /> Template Files</h4><ul>{a.templateFiles.map((f, i) => <li key={i}><a href={f.url} target="_blank" rel="noopener noreferrer">{f.fileName} <FaExternalLinkAlt size={10} /></a></li>)}</ul></div>
                      )}
                      {a.rubric && a.rubric.length > 0 && (
                        <div className="links-section"><h4>Grading Rubric</h4><table className="styled-table"><thead><tr><th>Criteria</th><th>Points</th><th>Description</th></tr></thead><tbody>{a.rubric.map((item, i) => <tr key={i}><td>{item.criteria}</td><td>{item.points}</td><td>{item.description}</td></tr>)}</tbody></table></div>
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
};

export default AssignmentsPage;