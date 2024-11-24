import React from 'react';
// Create a CSS file for styling, if needed
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Welcome to IIIT Vadodara, where education meets excellence. 
          Our university is committed to providing the best learning environment for students 
          and preparing them for a successful future.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to inspire and nurture the next generation of leaders, innovators, 
          and professionals. We aim to provide top-notch education, cutting-edge facilities, 
          and opportunities for holistic growth.
        </p>
      </section>

      <section className="about-vision">
        <h2>Our Vision</h2>
        <p>
          To be a global leader in education, research, and community engagement. 
          We strive to empower students with knowledge, skills, and values to create 
          a better future for themselves and society.
        </p>
      </section>

      <section className="about-values">
        <h2>Core Values</h2>
        <ul>
          <li><strong>Excellence:</strong> Commitment to academic and professional excellence.</li>
          <li><strong>Integrity:</strong> Upholding the highest standards of honesty and ethics.</li>
          <li><strong>Innovation:</strong> Encouraging creativity and forward-thinking solutions.</li>
          <li><strong>Community:</strong> Building a strong, inclusive, and supportive environment.</li>
        </ul>
      </section>

      <section className="about-history">
        <h2>Our History</h2>
        <p>
          Established in Vadodara, IIIT Vadodara has a proud tradition of academic 
          excellence and community service. Over the years, we have evolved to meet the 
          changing needs of students and society while staying true to our core mission.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
