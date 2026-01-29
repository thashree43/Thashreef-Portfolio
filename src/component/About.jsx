import React from 'react';
import { FaCode, FaServer, FaDatabase, FaRocket, FaUsers, FaAward } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode />,
      title: 'Frontend Expertise',
      description: 'React.js, Redux Toolkit, TypeScript, Tailwind CSS, Material UI'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Node.js, Express.js, REST APIs, Socket.io, Event-driven Architecture'
    },
    {
      icon: <FaDatabase />,
      title: 'Database Management',
      description: 'PostgreSQL, MongoDB, Redis (Caching, Pub/Sub)'
    },
    {
      icon: <FaRocket />,
      title: 'Performance Focus',
      description: 'Optimizing applications for speed, scalability, and usability'
    },
    {
      icon: <FaUsers />,
      title: 'Team Collaboration',
      description: 'Collaborating with backend teams for seamless integration'
    },
    {
      icon: <FaAward />,
      title: 'Quality Delivery',
      description: 'Passionate about delivering high-quality software solutions'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Frontend-focused Full Stack Developer</h3>
              <p>
                With <strong>2 years of experience</strong> building responsive, scalable, and 
                high-performance web applications using modern technologies.
              </p>
              <p>
                Experienced in translating UI/UX designs into responsive applications, 
                integrating frontend systems with backend APIs, and optimizing applications 
                for speed, scalability, and usability.
              </p>
              <p>
                Strong experience in building reusable UI components, managing application state 
                using Redux Toolkit, and collaborating with backend teams to ensure seamless 
                system integration.
              </p>
            </div>
            
            <div className="experience-highlights">
              <h4>Key Experience Areas:</h4>
              <ul>
                <li>Building and maintaining Node.js backend services</li>
                <li>Implementing Redis caching and pub/sub for performance optimization</li>
                <li>Developing Socket.io-based real-time communication features</li>
                <li>Handling async/await and Promise-based logic</li>
                <li>Containerizing applications using Docker</li>
                <li>Implementing JWT authentication and role-based access control</li>
                <li>Production bug fixing and system reliability improvements</li>
              </ul>
            </div>
          </div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .about {
          background: #f8fafc;
        }
        
        .about-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .about-text {
          margin-bottom: 3rem;
        }
        
        .about-text h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: #1e293b;
        }
        
        .about-text p {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          color: #475569;
          line-height: 1.8;
        }
        
        .experience-highlights {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          margin-top: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .experience-highlights h4 {
          color: #3b82f6;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        
        .experience-highlights ul {
          list-style: none;
          padding-left: 0;
        }
        
        .experience-highlights li {
          padding: 0.5rem 0;
          color: #475569;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .experience-highlights li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #10b981;
          font-weight: bold;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .feature-card {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          border-color: #3b82f6;
        }
        
        .feature-icon {
          font-size: 2.5rem;
          color: #3b82f6;
          margin-bottom: 1rem;
          background: #eff6ff;
          width: 70px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          margin: 0 auto 1rem;
        }
        
        .feature-card h4 {
          margin-bottom: 0.8rem;
          color: #1e293b;
          font-size: 1.2rem;
        }
        
        .feature-card p {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;