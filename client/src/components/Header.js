import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaChevronRight, FaHome, FaBook, FaTasks, FaBookReader, FaClipboardList, FaFileAlt, FaBoxOpen, FaShieldAlt, FaBars } from 'react-icons/fa';
import './Header.css';

// Navigation items configuration - Updated order, removed My Progress, renamed Curriculum to Lectures
const navItems = [
  { path: '/', label: 'Home', icon: <FaHome /> },
  { path: '/lectures', label: 'Lectures', icon: <FaBook /> },
  { path: '/assignments', label: 'Assignments', icon: <FaTasks /> },
  { path: '/tutorials', label: 'Tutorials', icon: <FaBookReader /> },
  { path: '/exams', label: 'Exams', icon: <FaClipboardList /> },
  { path: '/prerequisites', label: 'Prerequisites', icon: <FaFileAlt /> },
  { path: '/resources', label: 'Resources', icon: <FaBoxOpen /> },
];

// Breadcrumb mapping - Updated Curriculum to Lectures
const breadcrumbLabels = {
  '/': 'Home',
  '/lectures': 'Lectures',
  '/assignments': 'Assignments',
  '/tutorials': 'Tutorials',
  '/exams': 'Exams',
  '/prerequisites': 'Prerequisites',
  '/resources': 'Resources',
  '/admin': 'Admin',
  '/admin/login': 'Login',
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Generate breadcrumbs
  const getBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    if (paths.length === 0) return [];
    
    const breadcrumbs = [{ path: '/', label: 'Home' }];
    let currentPath = '';
    
    paths.forEach(segment => {
      currentPath += `/${segment}`;
      breadcrumbs.push({
        path: currentPath,
        label: breadcrumbLabels[currentPath] || segment.charAt(0).toUpperCase() + segment.slice(1)
      });
    });
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <div className="logo-icon-wrapper">
              <span className="logo-icon">DL</span>
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-text">Deep Learning</span>
              <span className="logo-subtext">Course Platform</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                <span className="nav-text">{item.label}</span>
                <span className="nav-underline"></span>
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            {/* Admin Portal Button - Professional Design */}
            <Link to="/admin/login" className="admin-portal-btn">
              <FaShieldAlt className="admin-icon" />
              <span className="admin-text">Admin Portal</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Breadcrumbs */}
        {breadcrumbs.length > 1 && (
          <div className="breadcrumb-container">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.path}>
                  {index > 0 && <FaChevronRight className="breadcrumb-separator" aria-hidden="true" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="breadcrumb-current" aria-current="page">{crumb.label}</span>
                  ) : (
                    <Link to={crumb.path} className="breadcrumb-link">{crumb.label}</Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu */}
      <nav 
        className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <div className="logo-icon-wrapper small">
              <span className="logo-icon">DL</span>
            </div>
            <span>Deep Learning</span>
          </div>
          <button 
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="mobile-nav-icon">{item.icon}</span>
              <span className="mobile-nav-text">{item.label}</span>
              <FaChevronRight className="mobile-nav-arrow" />
            </Link>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <Link 
            to="/admin/login" 
            className="mobile-admin-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaShieldAlt /> Admin Portal
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
