import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.scss';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  // Helper function to check valid email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const ownerEmail = 'manojprfp@gmail.com';

  // Check if email matches owner email (case-insensitive)
  const isOwnerEmail = formData.email.trim().toLowerCase() === ownerEmail;

  // Check if all fields are filled, email is valid, and it is NOT the owner's email
  const isFormValid =
    formData.name.trim() !== '' &&
    isValidEmail(formData.email) &&
    !isOwnerEmail &&
    formData.message.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: ownerEmail,
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert(`Thank you ${formData.name}! Your message has been sent successfully.`);
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
        setLoading(false);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send message. Please check your network or configuration.');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <h2 className="section-title">Get <span>In Touch</span></h2>
        <p className="section-subtitle">
          I'm open to new opportunities and would love to hear from you. Feel free to reach out!
        </p>

        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <div className={styles.iconBox}><Mail size={20} /></div>
              <div>
                <span className={styles.label}>Email</span>
                <a href={`mailto:${ownerEmail}`}>{ownerEmail}</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}><Phone size={20} /></div>
              <div>
                <span className={styles.label}>Phone</span>
                <p>+91 70139 66325</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}><MapPin size={20} /></div>
              <div>
                <span className={styles.label}>Location</span>
                <p>Hyderabad, India</p>
              </div>
            </div>

            <div className={styles.socialGroup}>
              <a href="https://www.linkedin.com/in/seeta-manojkumar-734b63241/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/Manoj131621" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
              <a href={`mailto:manojprfp@gmail.com`} aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && formData.name.trim() === '' && (
                <span className={styles.errorText}>Name is required.</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && formData.email.trim() === '' && (
                <span className={styles.errorText}>Email is required.</span>
              )}
              {touched.email && formData.email.trim() !== '' && !isValidEmail(formData.email) && (
                <span className={styles.errorText}>Please enter a valid email address.</span>
              )}
              {touched.email && isOwnerEmail && (
                <span className={styles.errorText}>Enter your email address here.</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              {touched.message && formData.message.trim() === '' && (
                <span className={styles.errorText}>Message cannot be empty.</span>
              )}
            </div>

            <button
              type="submit"
              className={styles.btnSend}
              disabled={!isFormValid || loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}