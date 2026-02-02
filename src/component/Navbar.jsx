import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  // Close menu when clicking outside on mobile
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <a href="#home" className="logo">Thashreef Khan</a>
          
          <div className="nav-menu">
            <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={handleLinkClick}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div 
              className="mobile-menu-btn" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          padding: 1rem 0;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color, #3b82f6);
          text-decoration: none;
          z-index: 1002;
        }
        
        .nav-menu {
          display: flex;
          align-items: center;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }
        
        .nav-link {
          text-decoration: none;
          color: var(--text-dark, #1f2937);
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }
        
        .nav-link:hover {
          color: var(--primary-color, #3b82f6);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-color, #3b82f6);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-dark, #1f2937);
          background: none;
          border: none;
          padding: 0.5rem;
          z-index: 1002;
        }
        
        .mobile-menu-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .navbar {
            padding: 0.8rem 0;
          }
          
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-links {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: white;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            gap: 2rem;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            z-index: 1001;
            margin: 0;
          }
          
          .nav-links.active {
            transform: translateX(0);
          }
          
          .nav-link {
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
          }
          
          .mobile-menu-overlay {
            display: block;
          }
        }
        
        @media (max-width: 480px) {
          .logo {
            font-size: 1.3rem;
          }
          
          .mobile-menu-btn {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;