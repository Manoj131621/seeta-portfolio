import React from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import styles from './Projects.module.scss';

const projectsData = [
  {
    title: 'ShopSphere (E-commerce Frontend)',
    description: 'A responsive e-commerce frontend built with React, Redux Toolkit, and SCSS. Features include product filters, sorting, debounced search, and a mobile-first design.',
    tags: ['React', 'Redux', 'SCSS'],
    image: '/images/project-shopsphere.png',
    link: '#',
  },
  {
    title: 'React Interview Playground',
    description: 'A practice platform with multiple routes, hooks, user management, and todos. Built with React Router and Redux Toolkit.',
    tags: ['React', 'Redux', 'Router'],
    image: '/images/project-playground.png',
    link: '#',
  },
  {
    title: 'Cox Telecom Application',
    description: 'A web application built with React for managing telecom services. Includes user management, dashboard, and service handling.',
    tags: ['React', 'REST APIs', 'JavaScript'],
    image: '/images/project-cox.png',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        <p className="section-subtitle">Here are some of the projects I've built to strengthen my skills and showcase my work.</p>

        <div className={styles.projectsGrid}>
          {projectsData.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {/* <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
              </div> */}
              <div className={styles.projectBody}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <a href={project.link} className={styles.projectLink}>
                  View Project <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}

          <div className={`${styles.projectCard} ${styles.moreProjectsCard}`}>
            <div className={styles.plusIconWrapper}>
              <Plus size={32} />
            </div>
            <h3>More Projects</h3>
            <p>I'm always working on new ideas. Check back soon for more projects!</p>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.viewAllLink}>
              View All Projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}