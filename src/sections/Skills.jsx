import React from 'react';
import {
  Code2,
  FileCode,
  Layers,
  Globe,
  GitBranch,
  Terminal,
  Wrench
} from 'lucide-react';
import styles from './Skills.module.scss';

const skillsData = [
  { icon: Code2, name: 'React.js', desc: 'Building interactive UI components' },
  { icon: FileCode, name: 'JavaScript', desc: 'ES6+, DOM, async/await, modern JS features' },
  { icon: Layers, name: 'Redux Toolkit', desc: 'State management' },
  { icon: Globe, name: 'REST APIs', desc: 'API integration & data handling' },
  { icon: GitBranch, name: 'Git & GitHub', desc: 'Version control & collaboration' },
  { icon: Terminal, name: 'VS Code', desc: 'Development environment' },
  { icon: Wrench, name: 'Other Tools', desc: 'NPM, Postman, Figma, Chrome DevTools' },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className={styles.skillsGrid}>
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className={styles.skillCard}>
                <div className={styles.iconWrapper}>
                  <Icon size={26} />
                </div>
                <h3>{skill.name}</h3>
                <p>{skill.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}