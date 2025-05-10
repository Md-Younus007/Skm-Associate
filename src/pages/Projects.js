import React, { useState } from 'react';
import './Projects.css';

const Project = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card">
      <div className="project-title" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="project-content"><p>{content}</p></div>}
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Skyline Residency',
      content: `Skyline Residency is an exceptional residential project crafted to provide the perfect blend of luxury, comfort, and convenience. Located in a rapidly developing urban zone, it offers modern architectural design combined with state-of-the-art amenities. The apartment complex includes 2BHK, 3BHK, and penthouse options with spacious layouts, high ceilings, and natural lighting that enhance the living experience.

Residents will enjoy premium features such as a fully equipped gym, swimming pool, landscaped gardens, children’s play area, and 24/7 security surveillance. The project is also eco-conscious, featuring rainwater harvesting, solar lighting in common areas, and energy-efficient systems.

Skyline Residency is ideal for families, working professionals, and retirees looking for a secure, peaceful, and well-connected neighborhood. It is just minutes away from reputed schools, hospitals, malls, and public transport, making daily life hassle-free. The interiors are tastefully designed, using top-quality materials and contemporary finishes. This project aims to deliver more than just a home—it provides a holistic lifestyle experience.`
    },
    {
      title: 'SKM Corporate Towers',
      content: `SKM Corporate Towers is a futuristic office space development tailored for modern businesses. Located in a prime commercial area, it provides a strategic advantage for enterprises seeking visibility, accessibility, and prestige. With 24x7 access, high-speed elevators, smart security systems, and energy-efficient construction, the building caters to both startups and established corporations.

Each floor offers customizable layouts, ergonomic design, high-speed internet readiness, and ample natural light, ensuring productivity and wellness. The property includes conference rooms, breakout areas, a rooftop cafeteria, and dedicated parking spaces for staff and clients.

Designed to inspire innovation, the towers create an ambiance that reflects professionalism and modernity. Its proximity to airports, metro stations, hotels, and business parks makes it an ideal hub for regional headquarters or flagship offices.

SKM Corporate Towers sets a benchmark for smart office infrastructure in the city.`
    },
    {
      title: 'GreenVille Villas',
      content: `GreenVille Villas redefines luxury living with a focus on nature and tranquility. Nestled in a lush green environment, this gated community offers elegantly designed villas surrounded by landscaped gardens, water features, and walking trails. Each villa boasts spacious interiors, private gardens, rooftop terraces, and premium finishes that reflect both opulence and functionality.

Ideal for families seeking a calm retreat away from city chaos, GreenVille Villas provides amenities like a clubhouse, yoga lawn, swimming pool, jogging track, and security with smart surveillance. The villas are built with sustainable materials and feature energy-efficient appliances, rainwater harvesting, and solar panels.

Strategically located near key residential and commercial hotspots, yet tucked away in a serene zone, the project ensures balance between connectivity and peace. With nearby schools, hospitals, shopping hubs, and recreation centers, it offers an enriched lifestyle for modern families.

GreenVille Villas is not just a home; it’s a personal sanctuary where elegance meets peace.`
    },
  ];

  return (
    <div className="projects-container">
      <h1>Our Projects</h1>
      {projects.map((proj, idx) => (
        <Project key={idx} title={proj.title} content={proj.content} />
      ))}
    </div>
  );
};

export default Projects;
