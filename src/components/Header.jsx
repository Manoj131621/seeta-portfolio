import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#home" className="logo">Seeta Manojkumar</a>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="/Seeta_Manojkumar_React_Developer.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
          Resume
        </a>
      </div>
    </header>
  );
}