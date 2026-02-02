import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { 
  FaHeart, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaArrowUp,
  FaCode,
  FaRocket,
  FaCopyright,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaAddressBook
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);
  const [particleCount, setParticleCount] = useState(20);
  const [isTablet, setIsTablet] = useState(false);
  
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const socialRef = useRef([]);
  const particlesRef = useRef([]);
  const backToTopRef = useRef(null);
  const heartbeatRef = useRef(null);

  // Check screen size and adjust settings
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
      setParticleCount(mobile ? 8 : tablet ? 12 : 20);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Create particle effect
  useEffect(() => {
    const particles = [];
    const count = isMobile ? 8 : isTablet ? 12 : 20;
    
    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        speed: Math.random() * 2 + 0.5,
        delay: Math.random() * 5
      });
    }
    particlesRef.current = particles;
  }, [isMobile, isTablet]);

  // GSAP Animations - Disable some on mobile for performance
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      // Logo animation
      gsap.from(logoRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Links stagger animation
      linksRef.current.forEach((link, i) => {
        if (link) {
          gsap.from(link, {
            scrollTrigger: {
              trigger: link,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            x: -30,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "back.out(1.7)"
          });
        }
      });

      // Social icons animation
      socialRef.current.forEach((icon, i) => {
        if (icon) {
          gsap.from(icon, {
            scrollTrigger: {
              trigger: icon,
              start: "top 90%",
              toggleActions: "play none none reverse"
            },
            scale: 0,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.15,
            ease: "elastic.out(1, 0.5)"
          });
        }
      });

      // Back to top button animation
      gsap.from(backToTopRef.current, {
        scrollTrigger: {
          trigger: backToTopRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Continuous animations
      if (!isMobile) {
        gsap.to('.social-icon', {
          y: -5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.2
        });

        // Heartbeat animation
        gsap.to(heartbeatRef.current, {
          scale: 1.2,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });

        // Floating code icons
        gsap.to('.floating-code', {
          y: -10,
          rotation: 360,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.5
        });
      }

    }, footerRef);

    return () => ctx.revert();
  }, [isMobile]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { name: 'Home', href: '#', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaUser /> },
    { name: 'Skills', href: '#skills', icon: <FaTools /> },
    { name: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
    { name: 'Contact', href: '#contact', icon: <FaAddressBook /> }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/thashree43', 
      icon: <FaGithub />,
      color: '#333'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/thashreef-khan-248b86301/', 
      icon: <FaLinkedin />,
      color: '#0a66c2'
    },
    { 
      name: 'Email', 
      href: 'mailto:thashreefkhan4@gmail.com', 
      icon: <FaEnvelope />,
      color: '#ea4335'
    }
  ];

  // Floating code positions based on screen size
  const floatingCodePositions = isMobile ? [] : isTablet ? [
    { left: '10%', top: '20%' },
    { left: '85%', top: '30%' }
  ] : [
    { left: '10%', top: '20%' },
    { left: '85%', top: '30%' },
    { left: '15%', top: '70%' },
    { left: '90%', top: '80%' }
  ];

  return (
    <footer className="footer" ref={footerRef}>
      {/* Background Particles */}
      <div className="particles-container">
        {particlesRef.current.map((particle) => (
          <div 
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Code Icons */}
      {!isMobile && floatingCodePositions.map((pos, index) => (
        <div 
          key={index}
          className="floating-code" 
          style={pos}
        >
          <FaCode />
        </div>
      ))}

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <div className="footer-logo-wrapper" ref={logoRef}>
              <div className="logo-glow"></div>
              <a href="#home" className="footer-logo">
                <span className="logo-text">Thashreef</span>
                <span className="logo-dot"></span>
                <span className="logo-highlight">Khan</span>
              </a>
              <p className="logo-tagline">
                Building digital experiences with passion and precision
              </p>
              <div className="logo-decoration">
                <div className="decoration-line"></div>
                <FaRocket className="rocket-icon" />
                <div className="decoration-line"></div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="links-title">
              <span className="title-text">Quick Navigation</span>
              <div className="title-underline"></div>
            </h4>
            <div className="links-grid">
              {footerLinks.map((link, index) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="footer-link"
                  ref={el => linksRef.current[index] = el}
                >
                  <div className="link-icon">
                    {link.icon}
                  </div>
                  <span className="link-text">{link.name}</span>
                  <div className="link-dot"></div>
                  <div className="link-hover-line"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-social-section">
            <h4 className="social-title">
              <span className="title-text">Connect With Me</span>
              <div className="title-underline"></div>
            </h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--hover-color': social.color }}
                  ref={el => socialRef.current[index] = el}
                >
                  <div className="social-icon-wrapper">
                    <div className="social-icon">
                      {social.icon}
                    </div>
                    {!isMobile && <div className="icon-glow"></div>}
                    {!isMobile && <div className="icon-pulse"></div>}
                  </div>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="divider-sparkle"></div>
          <div className="divider-line"></div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright-section">
            <FaCopyright className="copyright-icon" />
            <p className="copyright-text">
              {currentYear} Thashreef Khan. All rights reserved.
            </p>
          </div>
          
          {/* <div className="made-with-love">
            <span className="love-text">Made with</span>
            <div className="heart-container" ref={heartbeatRef}>
              <FaHeart className="heart-icon" />
              {!isMobile && <div className="heart-glow"></div>}
            </div>
            <span className="love-text">by Thashreef</span>
          </div> */}

          <button 
            className="back-to-top"
            onClick={scrollToTop}
            ref={backToTopRef}
            aria-label="Back to top"
          >
            <FaArrowUp />
            {!isMobile && <div className="back-to-top-glow"></div>}
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0a192f 0%, #0f172a 100%);
          color: white;
          padding: 3rem 1rem 1.5rem;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          width: 100%;
          box-sizing: border-box;
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }

        .particle {
          position: absolute;
          background: rgba(100, 255, 218, 0.3);
          border-radius: 50%;
          width: 3px;
          height: 3px;
          animation: floatParticle 6s ease-in-out infinite;
        }

        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(10px, -10px); opacity: 0.6; }
          50% { transform: translate(-5px, 5px); opacity: 0.8; }
          75% { transform: translate(5px, 10px); opacity: 0.4; }
        }

        .floating-code {
          position: absolute;
          color: rgba(96, 165, 250, 0.1);
          font-size: 1.5rem;
          z-index: 1;
          pointer-events: none;
          display: none;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
          z-index: 2;
          width: 100%;
          box-sizing: border-box;
        }

        /* Main Content */
        .footer-content {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-bottom: 2rem;
          width: 100%;
        }

        /* Logo Section */
        .footer-logo-wrapper {
          position: relative;
          text-align: center;
          width: 100%;
        }

        .logo-glow {
          position: absolute;
          top: -2rem;
          left: 50%;
          transform: translateX(-50%);
          width: 8rem;
          height: 8rem;
          background: radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
          filter: blur(30px);
          z-index: 1;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 2rem;
          font-weight: 800;
          color: white;
          text-decoration: none;
          margin-bottom: 1rem;
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
          justify-content: center;
        }

        .logo-text {
          background: linear-gradient(45deg, #64ffda, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-dot {
          width: 6px;
          height: 6px;
          background: #64ffda;
          border-radius: 50%;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .logo-highlight {
          color: #64ffda;
        }

        .logo-tagline {
          color: #8892b0;
          font-size: 1rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          max-width: 100%;
          text-align: center;
        }

        .logo-decoration {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.5rem;
          justify-content: center;
        }

        .decoration-line {
          flex: 1;
          max-width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #64ffda, transparent);
        }

        .rocket-icon {
          color: #64ffda;
          font-size: 1.2rem;
          animation: rocketFloat 3s ease-in-out infinite;
        }

        @keyframes rocketFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Links Section */
        .links-title,
        .social-title {
          margin-bottom: 1.5rem;
          position: relative;
          text-align: center;
        }

        .title-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #64ffda;
          display: block;
          margin-bottom: 0.5rem;
        }

        .title-underline {
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #64ffda, transparent);
          border-radius: 2px;
          margin: 0 auto;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          max-width: 300px;
          margin: 0 auto;
        }

        .footer-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #8892b0;
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.8rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
          min-height: 80px;
          justify-content: center;
          background: rgba(255, 255, 255, 0.02);
        }

        .footer-link:hover {
          color: white;
          background: rgba(100, 255, 218, 0.05);
          transform: translateY(-3px);
        }

        .link-icon {
          font-size: 1.2rem;
          color: #64ffda;
        }

        .link-text {
          font-weight: 500;
        }

        .link-dot {
          width: 4px;
          height: 4px;
          background: #64ffda;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
          position: absolute;
          bottom: 5px;
        }

        .footer-link:hover .link-dot {
          opacity: 1;
        }

        .link-hover-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #64ffda, #60a5fa);
          transition: width 0.3s ease;
        }

        .footer-link:hover .link-hover-line {
          width: 100%;
        }

        /* Social Section */
        .social-icons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          max-width: 300px;
          margin: 0 auto;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: #8892b0;
          padding: 1rem;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
        }

        .social-link:hover {
          color: white;
          background: rgba(255, 255, 255, 0.03);
          transform: translateY(-3px);
        }

        .social-link:hover .social-name {
          color: var(--hover-color);
        }

        .social-icon-wrapper {
          position: relative;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon {
          font-size: 1.2rem;
          color: inherit;
          position: relative;
          z-index: 2;
        }

        .icon-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--hover-color);
          border-radius: 50%;
          opacity: 0.1;
          transition: all 0.3s ease;
        }

        .social-link:hover .icon-glow {
          opacity: 0.2;
          transform: scale(1.2);
        }

        .icon-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid var(--hover-color);
          opacity: 0;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .social-name {
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s ease;
          flex: 1;
        }

        /* Divider */
        .footer-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin: 2rem 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .divider-sparkle {
          width: 6px;
          height: 6px;
          background: #64ffda;
          border-radius: 50%;
          animation: sparkle 2s infinite;
          box-shadow: 0 0 10px #64ffda;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.5; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Bottom Section */
        .footer-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          text-align: center;
        }

        .copyright-section {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #8892b0;
          font-size: 0.85rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .copyright-icon {
          font-size: 0.8rem;
          opacity: 0.7;
        }

        .copyright-text {
          margin: 0;
        }

        .made-with-love {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #8892b0;
          font-size: 0.85rem;
          justify-content: center;
        }

        .heart-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
        }

        .heart-icon {
          color: #ef4444;
          font-size: 1rem;
          position: relative;
          z-index: 2;
        }

        .heart-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #ef4444;
          border-radius: 50%;
          opacity: 0.2;
          filter: blur(8px);
        }

        .back-to-top {
          width: 45px;
          height: 45px;
          background: rgba(100, 255, 218, 0.1);
          border: 2px solid rgba(100, 255, 218, 0.2);
          border-radius: 50%;
          color: #64ffda;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          margin-top: 0.5rem;
        }

        .back-to-top:hover {
          background: rgba(100, 255, 218, 0.2);
          transform: translateY(-3px);
        }

        .back-to-top-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .back-to-top:hover .back-to-top-glow {
          left: 100%;
        }

        /* Tablet Styles (768px and up) */
        @media (min-width: 768px) {
          .footer {
            padding: 4rem 2rem 2rem;
          }

          .floating-code {
            display: block;
            font-size: 1.8rem;
          }

          .footer-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }

          .footer-logo-section {
            grid-column: 1 / -1;
          }

          .logo-glow {
            top: -3rem;
            width: 10rem;
            height: 10rem;
          }

          .footer-logo {
            font-size: 2.5rem;
          }

          .logo-tagline {
            font-size: 1.1rem;
            max-width: 500px;
            margin: 0 auto 2rem;
          }

          .links-title,
          .social-title {
            text-align: left;
          }

          .title-underline {
            margin: 0;
          }

          .links-grid {
            grid-template-columns: 1fr;
            max-width: 100%;
            margin: 0;
          }

          .footer-link {
            flex-direction: row;
            justify-content: flex-start;
            text-align: left;
            min-height: auto;
            padding: 0.8rem 1rem;
          }

          .link-icon {
            font-size: 1rem;
            width: 20px;
          }

          .link-text {
            flex: 1;
            font-size: 0.95rem;
          }

          .social-icons {
            max-width: 100%;
            margin: 0;
          }

          .social-link {
            padding: 0.8rem 1rem;
          }

          .social-name {
            font-size: 0.9rem;
          }

          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }

          .back-to-top {
            margin-top: 0;
            width: 40px;
            height: 40px;
          }
        }

        /* Desktop Styles (1024px and up) */
        @media (min-width: 1024px) {
          .footer {
            padding: 5rem 2rem 2.5rem;
          }

          .floating-code {
            font-size: 2rem;
          }

          .footer-content {
            grid-template-columns: 2fr 1fr 1fr;
            gap: 4rem;
          }

          .footer-logo-section {
            grid-column: auto;
            text-align: left;
          }

          .logo-glow {
            left: -2rem;
            top: -2rem;
            transform: none;
            width: 12rem;
            height: 12rem;
          }

          .footer-logo {
            justify-content: flex-start;
          }

          .logo-tagline {
            text-align: left;
            margin: 0 0 2rem;
            max-width: 400px;
          }

          .logo-decoration {
            justify-content: flex-start;
          }

          .decoration-line {
            max-width: 80px;
          }

          .links-grid {
            gap: 1rem;
          }

          .footer-link:hover {
            transform: translateX(10px);
          }

          .social-link:hover {
            transform: translateY(-5px);
          }

          .back-to-top {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
        }

        /* Large Desktop Styles (1200px and up) */
        @media (min-width: 1200px) {
          .footer {
            padding: 6rem 2rem 3rem;
          }

          .footer-logo {
            font-size: 3rem;
          }

          .logo-tagline {
            font-size: 1.15rem;
          }

          .links-grid {
            gap: 1.2rem;
          }

          .footer-link {
            padding: 1rem 1.2rem;
            font-size: 1rem;
          }

          .social-link {
            padding: 1rem 1.2rem;
          }

          .social-name {
            font-size: 1rem;
          }

          .copyright-section {
            font-size: 0.9rem;
          }
        }

        /* Small Mobile Devices (480px and below) */
        @media (max-width: 480px) {
          .footer {
            padding: 2rem 1rem 1rem;
          }

          .footer-logo {
            font-size: 1.8rem;
            gap: 0.3rem;
          }

          .logo-tagline {
            font-size: 0.9rem;
            line-height: 1.4;
          }

          .links-grid {
            grid-template-columns: 1fr;
            max-width: 250px;
          }

          .footer-link {
            flex-direction: row;
            justify-content: flex-start;
            text-align: left;
            min-height: auto;
            padding: 0.7rem;
          }

          .link-icon {
            font-size: 1rem;
            width: 20px;
          }

          .link-text {
            flex: 1;
            font-size: 0.85rem;
          }

          .social-link {
            padding: 0.8rem;
          }

          .social-name {
            font-size: 0.85rem;
          }

          .copyright-section {
            font-size: 0.8rem;
          }

          .back-to-top {
            width: 40px;
            height: 40px;
            font-size: 0.9rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .footer {
            padding: 2rem 1rem 1rem;
          }

          .footer-content {
            gap: 2rem;
            margin-bottom: 1.5rem;
          }

          .footer-link {
            min-height: 60px;
            padding: 0.5rem;
          }

          .social-link {
            padding: 0.7rem;
          }

          .footer-bottom {
            padding-top: 1rem;
          }
        }

        /* High DPI Screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .particle {
            width: 2px;
            height: 2px;
          }
        }

        /* Print Styles */
        @media print {
          .footer {
            background: white !important;
            color: black !important;
            border-top: 2px solid #ccc;
          }

          .particles-container,
          .floating-code,
          .logo-glow,
          .icon-glow,
          .icon-pulse,
          .heart-glow,
          .back-to-top-glow,
          .link-hover-line {
            display: none !important;
          }

          .footer-link,
          .social-link {
            background: transparent !important;
            color: #333 !important;
            text-decoration: underline;
          }

          .footer-link:hover,
          .social-link:hover {
            transform: none !important;
          }

          .back-to-top {
            display: none !important;
          }

          .logo-text {
            -webkit-text-fill-color: #333 !important;
            color: #333 !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;