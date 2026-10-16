import React from 'react';
import styles from './Experience.module.scss';

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        {/* Section Header */}
        <span className={styles.sectionCategory}>MY JOURNEY</span>
        <h2 className={styles.sectionTitle}>
          Experience & <span>education</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          A concise overview of my professional background.
        </p>

        <div className={styles.timeline}>
          {/* Timeline Item 1: Accenture - React Developer */}
          <div className={styles.timelineItem}>
            <div className={styles.markerWrapper}>
              <div className={styles.timelineMarker}></div>
              <span className={styles.timeLabel}>Jan 2022 — Feb 2026</span>
            </div>

            <div className={styles.timelineCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.company}>Accenture</h3>
                  <h4 className={styles.role}>React Developer</h4>
                </div>
                <span className={styles.badge}>Professional experience</span>
              </div>

              <ul className={styles.detailsList}>
                <li>Built and maintained web application features using React.js.</li>
                <li>Worked on UI development, bug fixing, and performance improvements.</li>
                <li>Contributed to application support and collaborated with project teams.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 2: Accenture - Accessibility Tester */}
          <div className={styles.timelineItem}>
            <div className={styles.markerWrapper}>
              <div className={styles.timelineMarker}></div>
              <span className={styles.timeLabel}>Jun 2021 — Dec 2022</span>
            </div>

            <div className={styles.timelineCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.company}>Accenture</h3>
                  <h4 className={styles.role}>Accessibility Tester</h4>
                </div>
                <span className={styles.badge}>Quality & Testing</span>
              </div>

              <ul className={styles.detailsList}>
                <li>Performed manual accessibility testing against WCAG standards across web and mobile experiences.</li>
                <li>Identified and documented accessibility issues and shared recommendations with developers and designers.</li>
                <li>Checked compatibility using screen readers and keyboard navigation.</li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 3: Education */}
          <div className={styles.timelineItem}>
            <div className={styles.markerWrapper}>
              <div className={styles.timelineMarker}></div>
              <span className={styles.timeLabel}>2015 — 2019</span>
            </div>

            <div className={styles.timelineCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.company}>B.Tech in Computer Science and Engineering</h3>
                  <h4 className={styles.role}>Mahatma Gandhi University, Nalgonda</h4>
                </div>
                <span className={styles.badge}>Education</span>
              </div>

              <ul className={styles.detailsList}>
                <li>Graduated with 70% aggregate, focusing on software principles and core computer science fundamentals.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}