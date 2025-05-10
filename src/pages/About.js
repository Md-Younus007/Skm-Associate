import React from 'react';
import { useEffect } from 'react';
import './About.css';
import aboutImage from '../assetes1/aboutImage.webp'; // Make sure this image exists

const About = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-up');
    sections.forEach((el, index) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      setTimeout(() => {
        el.style.transition = 'all 0.8s ease-out';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, index * 300);
    });
  }, []);

  return (
    <div className="about-container">
      <img src={aboutImage} alt="About SKM Associates" className="about-image fade-up" />

      <section className="about-section fade-up">
        <h1>About SKM Associates</h1>
        <p>
          SKM Associates is a renowned construction and planning firm with a reputation built on trust,
          quality, and innovation. Our team of architects, engineers, and project managers work together 
          to craft spaces that stand the test of time. With a client-first approach, we ensure each project 
          reflects our core values: Integrity, Excellence, and Sustainability.
        </p>
      </section>

      <section className="services-section fade-up">
        <h2>Our Services</h2>
        <ul>
          <li>Architectural Plan</li>
          <li>3D & 2D Elevation Plan</li>
          <li>Structural Plan</li>
          <li>Valuation and Surveying</li>
          <li>Vastu Architectural Plan</li>
          <li>Project Management</li>
        </ul>
      </section>
    </div>
  );
};
export default About;
