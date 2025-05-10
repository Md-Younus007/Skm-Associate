import React from 'react';
import { motion }  from 'framer-motion';
import './Gallery.css';

const teamMembers = [
  {
    name: 'Shoaib khan',
    email: 'Sk380559@gmail.com',
    phone: '+91-9182830481',
    position: 'Founder & Civil Engineer',
    experience: '7+ Years in Construction and Project Management',
  },
  {
    name: 'Syed Minhaj',
    email: 'Minhaj@gmail.com',
    phone: '+91-9391137918',
    position: 'Structural Designer',
    experience: '5 Years in Structural Planning and CAD Design',
  },
  {
    name: 'MD YOUNUS',
    email: 'younusmohd779@gmail.com',
    phone: '+91-8328097832',
    position: 'Real Estate Agent',
    experience: '7 Years in the field and bussiness',
  },
];

const Gallery = () => {
  return (
    <div className="about-page">
      <section className="about-intro">
        <h2>About SKM Associates</h2>
        <p>
          At SKM Associates, we are committed to shaping the future with excellence in civil engineering and construction. 
          With a legacy of delivering robust and innovative infrastructure, we specialize in transforming your vision into tangible structures.
          Our multidisciplinary team ensures that every project meets the highest standards of quality, safety, and sustainability.
        </p>
        <p>
          Whether it's residential buildings, commercial complexes, or public infrastructure, our solutions are tailored 
          to meet specific needs, timelines, and budgets. We bring together technical expertise and a client-centric 
          approach to ensure complete satisfaction at every stage.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet Our Core Team</h2>
        <div className="card-container">
          {teamMembers.map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <h3>{member.name}</h3>
              <p><strong>Position:</strong> {member.position}</p>
              <p><strong>Email:</strong> {member.email}</p>
              <p><strong>Phone:</strong> {member.phone}</p>
              <p><strong>Experience:</strong> {member.experience}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
