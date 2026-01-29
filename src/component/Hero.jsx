import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              Hi, I'm <span className="highlight">Thashreef Khan</span>
            </h1>
            <h2 className="hero-subtitle fade-in">
              Full Stack Developer (Frontend-Focused)
            </h2>
            <p className="hero-description fade-in">
              Building responsive, scalable, and high-performance web applications using 
              React.js, Node.js, and PostgreSQL. Passionate about delivering high-quality, 
              user-friendly software solutions.
            </p>
            
            <div className="contact-info-grid fade-in">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>thashreefkhan4@gmail.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>9345826343</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Cherambadi, The Nilgiris, Tamil Nadu</span>
              </div>
            </div>
            
            <div className="hero-buttons fade-in">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
              <a href="/Thashreef_Khan.pdf" download className="btn btn-outline">Download Resume</a>
            </div>
            
            <div className="social-links fade-in">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-circle">
              <div className="inner-circle">
                <span className="initials">TK</span>
              </div>
              <div className="tech-badge react">React</div>
              <div className="tech-badge node">Node.js</div>
              <div className="tech-badge redux">Redux</div>
              <div className="tech-badge postgres">PostgreSQL</div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
        }
        
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        
        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .highlight {
          color: #60a5fa;
          background: linear-gradient(90deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }
        
        .hero-description {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 500px;
          color: #94a3b8;
        }
        
        .contact-info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
          background: rgba(30, 41, 59, 0.5);
          padding: 1.5rem;
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #cbd5e1;
        }
        
        .contact-icon {
          color: #60a5fa;
          font-size: 1.2rem;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .social-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          font-size: 1.5rem;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-links a:hover {
          transform: translateY(-5px);
          background: #3b82f6;
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }
        
        .profile-circle {
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #1e293b, #0f172a);
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          border: 2px solid #334155;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .inner-circle {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 4rem;
          font-weight: bold;
          box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.3);
        }
        
        .initials {
          font-size: 5rem;
          font-weight: 700;
          background: linear-gradient(45deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .tech-badge {
          position: absolute;
          padding: 8px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          animation: float 6s ease-in-out infinite;
        }
        
        .tech-badge.react {
          background: linear-gradient(45deg, #61dafb, #21a1c1);
          color: #282c34;
          top: 50px;
          left: -30px;
          animation-delay: 0s;
        }
        
        .tech-badge.node {
          background: linear-gradient(45deg, #339933, #267326);
          color: white;
          top: 150px;
          right: -40px;
          animation-delay: 1s;
        }
        
        .tech-badge.redux {
          background: linear-gradient(45deg, #764abc, #5a3696);
          color: white;
          bottom: 150px;
          left: -30px;
          animation-delay: 2s;
        }
        
        .tech-badge.postgres {
          background: linear-gradient(45deg, #336791, #2a5677);
          color: white;
          bottom: 50px;
          right: -50px;
          animation-delay: 3s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-buttons {
            justify-content: center;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .hero-description {
            margin: 0 auto 2rem;
          }
          
          .profile-circle {
            width: 300px;
            height: 300px;
          }
          
          .inner-circle {
            width: 220px;
            height: 220px;
          }
          
          .tech-badge {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .profile-circle {
            width: 250px;
            height: 250px;
          }
          
          .inner-circle {
            width: 180px;
            height: 180px;
          }
          
          .initials {
            font-size: 3.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;