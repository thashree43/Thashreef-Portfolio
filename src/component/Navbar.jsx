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

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <a href="#home" className="logo">Portfolio</a>
          
          <div className="nav-menu">
            <ul className={isOpen ? 'nav-links active' : 'nav-links'}>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>
      </div>
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
          padding: 20px 0;
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        
        .nav-link {
          text-decoration: none;
          color: var(--text-dark);
          font-weight: 500;
          font-size: 1.1rem;
          transition: color 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: var(--primary-color);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-color);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text-dark);
        }
        
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          
          .nav-links {
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            opacity: 0;
            transition: all 0.3s ease;
          }
          
          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;