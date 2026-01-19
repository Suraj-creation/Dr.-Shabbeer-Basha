import React, { useState, useEffect } from 'react';
import { courseAPI, resourceAPI } from '../../services/api';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import './PublicPages.css';

const ResourcesPage = () => {
  const [courses, setCourses] = useState([]);
  const [resources, setResources] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Books', 'Online Courses', 'Research Papers', 'Tools & Frameworks', 'Communities', 'Datasets', 'Documentation', 'Other'];

  useEffect(() => { loadCourses(); }, []);
  useEffect(() => { if (selectedCourse) loadResources(); }, [selectedCourse]);

  const loadCourses = async () => {
    try {
      const r = await courseAPI.getAll();
      const d = r.data.data || [];
      setCourses(d);
      if (d.length > 0) setSelectedCourse(d[0]._id);
      setLoading(false);
    } catch (e) { console.error(e); setLoading(false); }
  };

  const loadResources = async () => {
    try {
      const r = await resourceAPI.getByCourse(selectedCourse);
      setResources(r.data.data || []);
    } catch (e) { console.error(e); }
  };

  const filteredResources = selectedCategory === 'All' ? resources : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="public-page">
      <Header />
      <main className="main-container">
        <div className="page-title-section">
          <h1>Resources</h1>
          <p>Books, tools, papers, and other learning materials</p>
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
              <label style={{marginLeft:'20px'}}>Category:</label>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            <section className="resources-section">
              {filteredResources.length === 0 ? (
                <div className="empty-state"><div className="empty-state-icon"></div><h3>No Resources Available</h3><p>Resources will appear here when added.</p></div>
              ) : (
                <div className="course-grid">
                  {filteredResources.map(r => (
                    <div key={r._id} className="course-card">
                      <div className="content-card-header">
                        <h4>{r.icon && `${r.icon} `}{r.title}</h4>
                        {r.isPremium && <span className="badge badge-warning"><FaStar size={10} /> Premium</span>}
                      </div>
                      <span className="badge badge-info" style={{marginBottom:'12px'}}>{r.category}</span>
                      {r.description && <p>{r.description}</p>}
                      {(r.author || r.publisher || r.year) && (
                        <p style={{fontSize:'0.9rem',color:'#7f8c8d',marginTop:'12px'}}>
                          {r.author && `By ${r.author}`}{r.publisher && `  ${r.publisher}`}{r.year && `  ${r.year}`}
                        </p>
                      )}
                      {r.tags && r.tags.length > 0 && (
                        <div style={{marginTop:'12px',display:'flex',flexWrap:'wrap',gap:'6px'}}>
                          {r.tags.map((tag, i) => <span key={i} style={{display:'inline-block',background:'rgba(52,152,219,0.1)',color:'#3498db',padding:'4px 10px',borderRadius:'20px',fontSize:'0.8rem',fontWeight:500}}>{tag}</span>)}
                        </div>
                      )}
                      {r.url && <div style={{marginTop:'16px'}}><a href={r.url} target="_blank" rel="noopener noreferrer" className="btn">View Resource <FaExternalLinkAlt size={12} /></a></div>}
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

export default ResourcesPage;