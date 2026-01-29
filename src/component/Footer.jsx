import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home" className="logo">Portfolio</a>
            <p>Building the web, one line at a time.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Portfolio. Made with <FaHeart style={{ color: '#ef4444' }} /> 
            by Jane Doe
          </p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: var(--dark-color);
          color: white;
          padding: 60px 0 30px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-logo .logo {
          color: white;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        .footer-logo p {
          color: #9ca3af;
          max-width: 300px;
        }
        
        .link-group h4 {
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .link-group ul {
          list-style: none;
        }
        
        .link-group li {
          margin-bottom: 0.5rem;
        }
        
        .link-group a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .link-group a:hover {
          color: white;
        }
        
        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #374151;
          color: #9ca3af;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-logo p {
            margin: 0 auto;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;