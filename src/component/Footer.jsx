import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  FaHeart, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaArrowUp,
  FaCode,
  FaRocket,
  FaCopyright
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const socialRef = useRef([]);
  const particlesRef = useRef([]);
  const backToTopRef = useRef(null);
  const heartbeatRef = useRef(null);

  // Create particle effect
  useEffect(() => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
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
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation with typing effect
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

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
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
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Floating Code Icons */}
      <div className="floating-code" style={{ left: '10%', top: '20%' }}>
        <FaCode />
      </div>
      <div className="floating-code" style={{ left: '85%', top: '30%' }}>
        <FaCode />
      </div>
      <div className="floating-code" style={{ left: '15%', top: '70%' }}>
        <FaCode />
      </div>
      <div className="floating-code" style={{ left: '90%', top: '80%' }}>
        <FaCode />
      </div>

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
                  <div className="link-dot"></div>
                  <span>{link.name}</span>
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
                    <div className="icon-glow"></div>
                    <div className="icon-pulse"></div>
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
            <span>Made with</span>
            <div className="heart-container" ref={heartbeatRef}>
              <FaHeart className="heart-icon" />
              <div className="heart-glow"></div>
            </div>
            <span>by Thashreef</span>
          </div> */}

          <button 
            className="back-to-top"
            onClick={scrollToTop}
            ref={backToTopRef}
            aria-label="Back to top"
          >
            <FaArrowUp />
            <div className="back-to-top-glow"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #0a192f 0%, #0f172a 100%);
          color: white;
          padding: 80px 0 40px;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
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
          font-size: 2rem;
          z-index: 1;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* Main Content */
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        /* Logo Section */
        .footer-logo-wrapper {
          position: relative;
        }

        .logo-glow {
          position: absolute;
          top: -50px;
          left: -50px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
          filter: blur(50px);
          z-index: 1;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          text-decoration: none;
          margin-bottom: 20px;
          position: relative;
          z-index: 2;
        }

        .logo-text {
          background: linear-gradient(45deg, #64ffda, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-dot {
          width: 8px;
          height: 8px;
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
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 25px;
          max-width: 400px;
        }

        .logo-decoration {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 30px;
        }

        .decoration-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, transparent, #64ffda, transparent);
        }

        .rocket-icon {
          color: #64ffda;
          font-size: 1.5rem;
          animation: rocketFloat 3s ease-in-out infinite;
        }

        @keyframes rocketFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Links Section */
        .links-title,
        .social-title {
          margin-bottom: 30px;
          position: relative;
        }

        .title-text {
          font-size: 1.3rem;
          font-weight: 600;
          color: #64ffda;
          display: block;
          margin-bottom: 10px;
        }

        .title-underline {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, #64ffda, transparent);
          border-radius: 2px;
        }

        .links-grid {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8892b0;
          text-decoration: none;
          font-size: 1.1rem;
          padding: 10px 15px;
          border-radius: 10px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .footer-link:hover {
          color: white;
          background: rgba(100, 255, 218, 0.05);
          transform: translateX(10px);
        }

        .link-dot {
          width: 6px;
          height: 6px;
          background: #64ffda;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
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
          gap: 20px;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          color: #8892b0;
          padding: 15px;
          border-radius: 15px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .social-link:hover {
          color: white;
          background: rgba(255, 255, 255, 0.03);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .social-link:hover .social-name {
          color: var(--hover-color);
        }

        .social-icon-wrapper {
          position: relative;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon {
          font-size: 1.5rem;
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
          font-size: 1.1rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        /* Divider */
        .footer-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin: 40px 0;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        }

        .divider-sparkle {
          width: 10px;
          height: 10px;
          background: #64ffda;
          border-radius: 50%;
          animation: sparkle 2s infinite;
          box-shadow: 0 0 20px #64ffda;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0.5; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        /* Bottom Section */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
        }

        .copyright-section {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #8892b0;
          font-size: 0.95rem;
        }

        .copyright-icon {
          font-size: 0.9rem;
          opacity: 0.7;
        }

        .made-with-love {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #8892b0;
          font-size: 0.95rem;
        }

        .heart-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
        }

        .heart-icon {
          color: #ef4444;
          font-size: 1.2rem;
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
          filter: blur(10px);
        }

        .back-to-top {
          width: 50px;
          height: 50px;
          background: rgba(100, 255, 218, 0.1);
          border: 2px solid rgba(100, 255, 218, 0.2);
          border-radius: 50%;
          color: #64ffda;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .back-to-top:hover {
          background: rgba(100, 255, 218, 0.2);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
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

        /* Responsive Design */
        @media (max-width: 992px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          .footer-logo-section {
            grid-column: 1 / -1;
            text-align: center;
          }

          .logo-tagline {
            margin: 0 auto 25px;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 60px 0 30px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 25px;
            text-align: center;
          }

          .links-grid,
          .social-icons {
            align-items: center;
          }

          .footer-link {
            justify-content: center;
          }

          .footer-link:hover {
            transform: translateY(-5px);
          }

          .social-link {
            justify-content: center;
          }

          .logo-decoration {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .footer-logo {
            font-size: 2rem;
          }

          .logo-tagline {
            font-size: 1rem;
          }

          .floating-code {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;