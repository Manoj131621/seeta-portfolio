import React from 'react';
import { MapPin, Briefcase, Mail, Phone } from 'lucide-react';
import styles from './About.module.scss'; // Import CSS module

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutContent}>
            <p className={styles.bioText}>
              I'm Seeta Manojkumar, a Frontend Developer with 4+ years of experience in building
              modern web applications using React.js. I have hands-on experience in application
              support and have worked on enterprise projects, focusing on performance, user
              experience, and clean code.
            </p>
            <p className={styles.bioText}>
              I enjoy turning ideas into real products and am always excited to learn new technologies.
              I'm currently looking for new opportunities where I can grow and contribute my skills.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <MapPin className={styles.infoIcon} size={20} />
                <div>
                  <span className={styles.label}>Location</span>
                  <p>Anywhere in India</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Briefcase className={styles.infoIcon} size={20} />
                <div>
                  <span className={styles.label}>Experience</span>
                  <p>4+ Years</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Mail className={styles.infoIcon} size={20} />
                <div>
                  <span className={styles.label}>Email</span>
                  <p>manojprfp@gmail.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.infoIcon} size={20} />
                <div>
                  <span className={styles.label}>Phone</span>
                  <p>+917013966325</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.imageWrapper}>
              <img src="/images/Manojoffice.jpeg" alt="Seeta Manojkumar working" />
            </div>
            <div className={styles.quoteCard}>
              <span className={styles.quoteMark}>“</span>
              <p className={styles.quoteText}>Better things are coming, keep going.</p>
              <span className={styles.quoteAuthor}>- Seeta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}