import React from 'react';
import './Home.css';
import myImage from '../assetes1/myImage.jpg'; // ✅ Proper import

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="text-box">
          <h1>Transform Your Vision<br />into Reality!</h1>
          <ul>
            <li>End-to-End Service</li>
            <li>100% Transparency</li>
            <li>On-time project completion</li>
          </ul>
        </div>
      </section>

      <div className="container">
        <div className="image-box">
          <img src={myImage} alt="Sample" />
        </div>

         <div className="content-box">
          <h2> Building the Future with Excellence</h2>
            <h3>Welcome to SKM Associates – Expert Civil Engineering & Construction Services</h3>
          <p>At SKM Associates, we deliver innovative and high-quality infrastructure solutions that meet the demands of a modern world. With a focus on precision engineering, sustainable construction, and project excellence, we’ve built a reputation as a trusted partner in the industry.
          </p>
            <h3>Our Core Services</h3>
            <ul>
            <li> Civil Construction & Contracting</li>
            <li> Project Planning & Management</li>
            <li> Structural Engineering</li>
            <li> Interior & Exterior Finishing</li>
            <li> Site Development & Supervision</li>
            </ul>
        </div>
      </div>
<div className='container2'>
    <div className='contentbox2'>
                <h2>Your Vision, Our Commitment</h2>
                <p>From foundation to finish, SKM Associates ensures every detail is executed with perfection. Whether it's residential apartments, corporate buildings, or infrastructure works, we turn ideas into enduring structures.
                </p>
                <h3>Let’s Build Together</h3>
                <p>📞+91 9182830481 Contact Us today to discuss your upcoming project and see how we can help bring your vision to life.
                🌐 SKM Associates — Engineering Trust. Building Quality.</p>
            </div>
            </div>
    </div>
  );
};
export default Home;