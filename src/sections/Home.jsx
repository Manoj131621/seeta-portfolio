import React from 'react';
import { Mail, Code2, FileCode2, Layers, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <p className="greeting">Hello, I'm</p>
            <h1>Seeta Manojkumar</h1>
            <h2 className="title-tag">React Developer <span>|</span> Frontend Engineer</h2>
            <p className="description">
              I build responsive and user-friendly web applications with React.js. Passionate about
              creating clean code, solving real-world problems, and continuously learning new technologies.
            </p>
            <div className="cta-group">
              <a href="#projects" className="btn-primary">View My Projects</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>

            {/* Social Icons with Inline SVGs */}
            <div className="social-links">
              {/* LinkedIn SVG */}
              <a href="https://www.linkedin.com/in/seeta-manojkumar-734b63241/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              {/* GitHub SVG */}
              <a href="https://github.com/Manoj131621" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              {/* Mail Icon from Lucide */}
              <a href="mailto:manojprfp@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="image-card">
              <img src="/images/Manojkumar.jpeg" alt="Seeta Manojkumar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}