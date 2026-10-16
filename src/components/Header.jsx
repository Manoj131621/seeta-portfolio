import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
// import styles from './Header.module.scss'; // or adjust path to your header styles

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          Seeta<span className="logo-dot">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Desktop Resume Button */}
        <a 
          href="/Seeta_Manojkumar_React_Developer.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-resume desktop-resume"
        >
          Resume
        </a>

        {/* Mobile Hamburger / Close Trigger */}
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay & Card Menu */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}>
          <div 
            className="mobile-card-drawer" 
            onClick={(e) => e.stopPropagation()} // Prevent clicking inside drawer from closing
          >
            <nav className="mobile-nav-links">
              <a href="#home" onClick={closeMenu}>Home</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#skills" onClick={closeMenu}>Skills</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a href="#experience" onClick={closeMenu}>Experience</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </nav>

            <a 
              href="/Seeta_Manojkumar_React_Developer.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mobile-btn-resume"
              onClick={closeMenu}
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}