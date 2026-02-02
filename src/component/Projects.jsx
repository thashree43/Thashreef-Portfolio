import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaServer, 
  FaDesktop, 
  FaDatabase, 
  FaCloud, 
  FaBolt,
  FaRocket,
  FaCode,
  FaLayerGroup,
  FaNetworkWired,
  FaShieldAlt,
  FaCube,
  FaWaveSquare,
  FaLeaf,
  FaClock,
  FaShoppingCart,
  FaWarehouse
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  
  const projectsRef = useRef(null);
  const titleRef = useRef(null);
  const projectCardsRef = useRef([]);
  const techTagsRef = useRef([]);
  const floatingElementsRef = useRef([]);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const tablet = width >= 768 && width < 1024;
      
      setIsMobile(mobile);
      setIsTablet(tablet);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const projects = [
    {
      title: 'WAVES GLOBAL',
      subtitle: 'Business Management Platform',
      description: 'Comprehensive business management platform serving 3 user roles (Admin, Manager, Employee) with granular permissions.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'React.js', 'Redis', 'JWT', 'Tailwind CSS', 'Stripe API'],
      features: [
        'Secure JWT authentication with access/refresh token rotation',
        'Role-based route protection',
        'Redis caching and asynchronous backend workflows',
        'Stripe payment gateway with webhook handling',
        'Real-time notification system',
        'Mobile-responsive UI achieving 95+ Lighthouse score'
      ],
      live: 'https://www.wavescation.com/', // Updated with actual link
      frontend: 'https://github.com/thashree43/waves-global-frontend',
      backend: 'https://github.com/thashree43/waves-global-backend',
      type: 'fullstack',
      icon: FaWaveSquare,
      accentColor: '#3b82f6',
      particles: isMobile ? 4 : isTablet ? 6 : 8
    },
    {
      title: 'ECOGAS',
      subtitle: 'LPG Gas Booking Platform',
      description: 'Complete LPG gas booking and delivery platform with real-time tracking and automated workflows.',
      tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Redis', 'AWS', 'Socket.io', 'Stripe', 'TypeScript', 'RTK Query'],
      features: [
        'Clean Architecture with SOLID principles',
        'Redis pub/sub for real-time workflows',
        'Socket.io-based complaint tracking system',
        'Dual-database system (MongoDB + Redis)',
        'AWS S3 for image storage',
        'CI/CD pipeline with GitHub Actions'
      ],
      live: 'https://ecogas-frontent.vercel.app/', // Updated with actual link
      frontend: 'https://github.com/thashree43/ecogas-frontend',
      backend: 'https://github.com/thashree43/ecogas-backend',
      type: 'fullstack',
      icon: FaLeaf,
      accentColor: '#10b981',
      particles: isMobile ? 3 : isTablet ? 5 : 6
    },
    {
      title: 'ZENVOGUE',
      subtitle: 'E-commerce Platform',
      description: 'Server-side rendered e-commerce platform with complete shopping experience.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'jQuery', 'Bootstrap', 'Docker', 'Kubernetes', 'AWS', 'Razorpay'],
      features: [
        'SEO optimized EJS templating',
        'Complete shopping flow (cart, wishlist, coupons)',
        'Razorpay payment gateway integration',
        'Containerized with Docker',
        'Deployed on AWS with Kubernetes',
        'Referral system implementation'
      ],
      live: 'https://www.zenvogue.online/', // Updated with actual link
      github: 'https://github.com/thashree43/zenvogue-ecommerce',
      type: 'backend',
      icon: FaShoppingCart,
      accentColor: '#8b5cf6',
      particles: isMobile ? 3 : isTablet ? 5 : 7
    },
    {
      title: 'CHRONO',
      subtitle: 'Inventory Management System',
      description: 'Full-stack MERN inventory management system delivering real-time stock insights.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'Tailwind CSS', 'RTK Query', 'jsPDF'],
      features: [
        'Real-time stock tracking and insights',
        'React dashboards with backend API integration',
        'Automated low-stock alerts using Node-Cron',
        'PDF report generation',
        'Multi-role business data management',
        'RESTful CRUD APIs'
      ],
      live: 'https://chrono-frontend.vercel.app/', // Updated with actual link
      frontend: 'https://github.com/thashree43/chrono-frontend',
      backend: 'https://github.com/thashree43/chrono-backend',
      type: 'fullstack',
      icon: FaWarehouse,
      accentColor: '#f59e0b',
      particles: isMobile ? 2 : isTablet ? 4 : 5
    }
  ];

  const miniProjects = [
    {
      title: 'Netflix Clone',
      description: 'Streaming platform UI with Firebase Authentication and watchlist management.',
      tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Firestore', 'Vite'],
      live: 'https://netflix-clone-thashree.vercel.app', // Updated with actual link
      github: 'https://github.com/thashree43/netflix-clone',
      icon: FaCode
    },
    {
      title: 'OLX Clone',
      description: 'Classified ads platform with Cloudinary image optimization and real-time database.',
      tech: ['React.js', 'Node.js', 'Firebase', 'Cloudinary', 'RTK Query'],
      github: 'https://github.com/thashree43/olx-clone',
      icon: FaNetworkWired
    }
  ];

  // GSAP Animations - Disable some on mobile for performance
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      // Title animation with glow effect
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

      // Project cards staggered animation
      projectCardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            scale: 0.8,
            duration: 1,
            delay: i * 0.2,
            ease: "back.out(1.7)"
          });
        }
      });

      // Tech tags animation
      techTagsRef.current.forEach((tag, i) => {
        if (tag) {
          gsap.from(tag, {
            scrollTrigger: {
              trigger: tag,
              start: "top 90%",
              toggleActions: "play none none reverse"
            },
            scale: 0,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.05,
            ease: "elastic.out(1, 0.5)"
          });
        }
      });

      // Floating elements animation
      floatingElementsRef.current.forEach((element, i) => {
        if (element) {
          gsap.to(element, {
            y: -10,
            duration: 2 + Math.random(),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.3
          });
        }
      });

      // Continuous animations
      if (!isMobile) {
        gsap.to('.project-icon', {
          rotation: 360,
          duration: 20,
          repeat: -1,
          ease: "none"
        });

        // Particle animations for each project
        projects.forEach((project, projectIndex) => {
          for (let i = 0; i < project.particles; i++) {
            gsap.to(`.particle-${projectIndex}-${i}`, {
              x: 'random(-20, 20)',
              y: 'random(-20, 20)',
              duration: 'random(2, 4)',
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut"
            });
          }
        });
      }

    }, projectsRef);

    return () => ctx.revert();
  }, [isMobile]);

  const ProjectIcon = ({ icon: Icon, projectIndex }) => {
    return (
      <div className="project-icon-wrapper" ref={el => floatingElementsRef.current[projectIndex] = el}>
        {!isMobile && <div className="icon-glow"></div>}
        <Icon className="project-icon" />
        {!isMobile && (
          <div className="icon-orbits">
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>
          </div>
        )}
      </div>
    );
  };

  const ProjectParticles = ({ count, projectIndex, accentColor }) => {
    if (isMobile) return null;
    
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`project-particle particle-${projectIndex}-${i}`}
            style={{
              '--particle-color': accentColor,
              left: `${(i / count) * 100}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </>
    );
  };

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      {/* Background Elements */}
      <div className="background-grid"></div>
      {!isMobile && (
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      )}

      <div className="container">
        {/* Animated Title */}
        <div className="title-section" ref={titleRef}>
          <h2 className="section-title">
            <span className="title-text">Featured Projects</span>
            <div className="title-line">
              {!isMobile && <div className="line-glow"></div>}
            </div>
            <span className="title-sub">Innovative Solutions, Exceptional Results</span>
          </h2>
          {!isMobile && (
            <div className="title-decoration">
              <FaCode className="decoration-icon" />
              <FaLayerGroup className="decoration-icon" />
              <FaRocket className="decoration-icon" />
            </div>
          )}
        </div>

        {/* Main Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ '--accent-color': project.accentColor }}
              ref={el => projectCardsRef.current[index] = el}
            >
              {/* Project Particles */}
              <div className="particles-container">
                <ProjectParticles 
                  count={project.particles} 
                  projectIndex={index}
                  accentColor={project.accentColor}
                />
              </div>

              {/* Card Glow Effect */}
              {!isMobile && <div className="card-glow"></div>}

              {/* Project Header */}
              <div className="project-header">
                <div className="project-icon-section">
                  <ProjectIcon icon={project.icon} projectIndex={index} />
                </div>
                <div className="project-title-section">
                  <h3>
                    <span className="project-title-text">{project.title}</span>
                    {!isMobile && <span className="project-title-highlight">{project.title}</span>}
                  </h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <div className={`project-type ${project.type}`}>
                    <span className="type-dot"></span>
                    {project.type === 'fullstack' ? 'Full Stack' : 'Backend Focused'}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="project-description-wrapper">
                <div className="description-icon">
                  <FaBolt />
                </div>
                <p className="project-description">{project.description}</p>
              </div>

              {/* Key Features */}
              <div className="project-features">
                <div className="features-header">
                  <FaShieldAlt className="features-icon" />
                  <h4>Key Features</h4>
                </div>
                <ul className="features-list">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <div className="feature-marker"></div>
                      <div className="feature-content">
                        <span className="feature-text">{feature}</span>
                        {!isMobile && <div className="feature-line"></div>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="project-tech">
                <div className="tech-header">
                  <FaCube className="tech-icon" />
                  <h5>Tech Stack</h5>
                </div>
                <div className="tech-tags-container">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="tech-tag"
                      ref={el => {
                        if (!techTagsRef.current[index]) techTagsRef.current[index] = [];
                        techTagsRef.current[index][idx] = el;
                      }}
                    >
                      {tech}
                      {!isMobile && <div className="tag-glow"></div>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="project-links">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link live-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(project.live, '_blank', 'noopener,noreferrer');
                    }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                    {!isMobile && <div className="link-glow"></div>}
                  </a>
                )}
                {project.frontend && (
                  <a 
                    href={project.frontend} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link frontend-link"
                  >
                    <FaDesktop />
                    <span>Frontend</span>
                    {!isMobile && <div className="link-glow"></div>}
                  </a>
                )}
                {project.backend && (
                  <a 
                    href={project.backend} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link backend-link"
                  >
                    <FaServer />
                    <span>Backend</span>
                    {!isMobile && <div className="link-glow"></div>}
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link github-link"
                  >
                    <FaGithub />
                    <span>GitHub</span>
                    {!isMobile && <div className="link-glow"></div>}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mini Projects Section */}
        <div className="mini-projects-section">
          <div className="section-divider">
            <div className="divider-line"></div>
            <FaCode className="divider-icon" />
            <div className="divider-line"></div>
          </div>

          <div className="mini-projects-header">
            <h3 className="section-subtitle">
              <span>Side Projects</span>
              <div className="subtitle-underline"></div>
            </h3>
            <p className="section-description">Quick prototypes and learning experiments</p>
          </div>

          <div className="mini-projects-grid">
            {miniProjects.map((project, index) => (
              <div key={index} className="mini-project-card">
                <div className="mini-project-icon">
                  <project.icon />
                  {!isMobile && <div className="mini-icon-glow"></div>}
                </div>
                <div className="mini-project-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="mini-project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="mini-tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="mini-project-links">
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mini-link"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(project.live, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mini-link"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          color: #1f2937;
          position: relative;
          overflow: hidden;
          padding: 4rem 1rem;
          width: 100%;
          box-sizing: border-box;
        }

        .background-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.3;
          pointer-events: none;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
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

        /* Title Section */
        .title-section {
          text-align: center;
          margin-bottom: 3rem;
          width: 100%;
        }

        .section-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          position: relative;
          display: inline-block;
        }

        .title-text {
          background: linear-gradient(45deg, #3b82f6, #0ea5e9, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
          display: block;
        }

        .title-line {
          width: 120px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          margin: 1rem auto;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .title-sub {
          display: block;
          color: #6b7280;
          font-size: 1rem;
          font-weight: 400;
          margin-top: 0.5rem;
          text-transform: uppercase;
        }

        /* Projects Grid */
        .projects-grid {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
          width: 100%;
        }

        /* Project Card */
        .project-card {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(209, 213, 219, 0.6);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          width: 100%;
          box-sizing: border-box;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent-color);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .project-particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: var(--particle-color);
          border-radius: 50%;
          opacity: 0.4;
          filter: blur(1px);
          animation: particleFloat 4s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0.4; }
          50% { transform: translate(10px, -10px); opacity: 0.2; }
        }

        /* Project Header */
        .project-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .project-icon-wrapper {
          width: 4rem;
          height: 4rem;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: var(--accent-color);
          border-radius: 50%;
          opacity: 0.1;
          filter: blur(10px);
        }

        .project-icon {
          font-size: 1.8rem;
          color: var(--accent-color);
          position: relative;
          z-index: 2;
        }

        .project-title-section {
          flex: 1;
          width: 100%;
        }

        .project-title-section h3 {
          position: relative;
          display: inline-block;
          margin: 0 0 0.5rem 0;
          font-size: 1.4rem;
        }

        .project-title-text {
          color: #1f2937;
          position: relative;
          z-index: 2;
        }

        .project-subtitle {
          color: var(--accent-color);
          font-weight: 500;
          margin: 0 0 0.8rem 0;
          font-size: 1rem;
        }

        .project-type {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1rem;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(59, 130, 246, 0.1);
          color: #3b82f6;
        }

        .type-dot {
          width: 6px;
          height: 6px;
          background: var(--accent-color);
          border-radius: 50%;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Project Description */
        .project-description-wrapper {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          background: rgba(59, 130, 246, 0.03);
          padding: 1.2rem;
          border-radius: 12px;
          border-left: 3px solid var(--accent-color);
        }

        .description-icon {
          color: var(--accent-color);
          font-size: 1rem;
          margin-top: 2px;
          flex-shrink: 0;
        }

        .project-description {
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
          flex: 1;
          font-size: 0.9rem;
        }

        /* Features */
        .project-features {
          margin-bottom: 1.5rem;
        }

        .features-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .features-icon {
          color: var(--accent-color);
          font-size: 1rem;
        }

        .features-header h4 {
          color: #1f2937;
          margin: 0;
          font-size: 1.1rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          display: flex;
          gap: 0.8rem;
          padding: 0.8rem 0;
          border-bottom: 1px solid rgba(209, 213, 219, 0.5);
        }

        .feature-item:last-child {
          border-bottom: none;
        }

        .feature-marker {
          width: 5px;
          height: 5px;
          background: var(--accent-color);
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }

        .feature-content {
          flex: 1;
          position: relative;
        }

        .feature-text {
          color: #4b5563;
          font-size: 0.85rem;
          line-height: 1.5;
          display: block;
        }

        /* Tech Stack */
        .project-tech {
          margin-bottom: 1.5rem;
        }

        .tech-header {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }

        .tech-icon {
          color: var(--accent-color);
          font-size: 1rem;
        }

        .tech-header h5 {
          color: #1f2937;
          margin: 0;
          font-size: 1rem;
        }

        .tech-tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          padding: 0.5rem 1rem;
          background: rgba(59, 130, 246, 0.05);
          color: #4b5563;
          border-radius: 16px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(59, 130, 246, 0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: default;
        }

        .tech-tag:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #1f2937;
          transform: translateY(-2px);
        }

        /* Project Links */
        .project-links {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.2rem;
          background: rgba(59, 130, 246, 0.05);
          color: #4b5563;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 500;
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          justify-content: center;
          width: 100%;
          box-sizing: border-box;
        }

        .project-link:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        /* Mini Projects Section */
        .mini-projects-section {
          margin-top: 3rem;
        }

        .section-divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
        }

        .divider-icon {
          color: #3b82f6;
          font-size: 1.2rem;
        }

        .mini-projects-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .section-subtitle {
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0 0.8rem 0;
          display: inline-block;
        }

        .section-subtitle span {
          background: linear-gradient(45deg, #3b82f6, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle-underline {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          margin: 0.5rem auto 0;
          border-radius: 2px;
        }

        .section-description {
          color: #6b7280;
          font-size: 0.9rem;
          max-width: 100%;
          margin: 0 auto;
        }

        .mini-projects-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .mini-project-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(209, 213, 219, 0.6);
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          width: 100%;
          box-sizing: border-box;
        }

        .mini-project-card:hover {
          transform: translateY(-5px);
          border-color: #3b82f6;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .mini-project-icon {
          width: 3rem;
          height: 3rem;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 1.2rem;
          position: relative;
        }

        .mini-project-content {
          flex: 1;
          width: 100%;
        }

        .mini-project-content h4 {
          color: #1f2937;
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
        }

        .mini-project-content p {
          color: #6b7280;
          font-size: 0.85rem;
          line-height: 1.5;
          margin: 0 0 1rem 0;
        }

        .mini-project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
          margin: 0.8rem 0;
        }

        .mini-tech-tag {
          padding: 0.4rem 0.8rem;
          background: rgba(59, 130, 246, 0.05);
          color: #4b5563;
          border-radius: 12px;
          font-size: 0.75rem;
          border: 1px solid rgba(59, 130, 246, 0.1);
        }

        .mini-project-links {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1rem;
        }

        .mini-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 50%;
          color: #4b5563;
          text-decoration: none;
          border: 1px solid rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }

        .mini-link:hover {
          background: #3b82f6;
          color: white;
          transform: scale(1.1);
        }

        /* Tablet Styles (768px and up) */
        @media (min-width: 768px) {
          .projects {
            padding: 5rem 2rem;
          }

          .floating-shapes {
            display: block;
          }

          .shape {
            position: absolute;
            border-radius: 50%;
            background: radial-gradient(circle, var(--accent-color, rgba(59, 130, 246, 0.1)) 0%, transparent 70%);
            filter: blur(40px);
            opacity: 0.2;
            animation: floatShape 20s ease-in-out infinite;
          }

          .shape-1 {
            width: 200px;
            height: 200px;
            top: 10%;
            left: 5%;
            animation-delay: 0s;
          }

          .shape-2 {
            width: 150px;
            height: 150px;
            top: 60%;
            right: 10%;
            animation-delay: 5s;
          }

          .shape-3 {
            width: 120px;
            height: 120px;
            bottom: 20%;
            left: 15%;
            animation-delay: 10s;
          }

          .shape-4 {
            width: 180px;
            height: 180px;
            top: 30%;
            right: 20%;
            animation-delay: 15s;
          }

          @keyframes floatShape {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(60px, 30px) scale(1.1); }
            50% { transform: translate(30px, -30px) scale(0.9); }
            75% { transform: translate(-30px, 30px) scale(1.05); }
          }

          .section-title {
            font-size: 3rem;
          }

          .title-line {
            width: 150px;
            height: 4px;
          }

          .title-sub {
            font-size: 1.1rem;
          }

          .title-decoration {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 2rem;
          }

          .decoration-icon {
            color: #3b82f6;
            font-size: 1.5rem;
            opacity: 0.5;
            animation: bounce 2s ease-in-out infinite;
          }

          .projects-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .project-card {
            padding: 2rem;
          }

          .project-header {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
          }

          .project-title-section {
            width: auto;
          }

          .project-links {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .project-link {
            width: auto;
            flex: 1;
            min-width: 120px;
          }

          .mini-projects-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .mini-project-card {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
          }

          .mini-project-icon {
            margin: 0;
          }

          .mini-project-tech {
            justify-content: flex-start;
          }

          .mini-project-links {
            justify-content: flex-start;
          }
        }

        /* Desktop Styles (1024px and up) */
        @media (min-width: 1024px) {
          .projects {
            padding: 6rem 2rem;
          }

          .section-title {
            font-size: 3.5rem;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
          }

          .project-card {
            padding: 2.5rem;
          }

          .project-title-section h3 {
            font-size: 1.6rem;
          }

          .project-description {
            font-size: 1rem;
          }

          .feature-text {
            font-size: 0.9rem;
          }

          .tech-tag {
            font-size: 0.85rem;
            padding: 0.6rem 1.2rem;
          }

          .project-link {
            padding: 1rem 1.5rem;
            font-size: 0.95rem;
          }

          .section-subtitle {
            font-size: 2rem;
          }

          .section-description {
            font-size: 1rem;
          }

          .shape-1 {
            width: 300px;
            height: 300px;
          }

          .shape-2 {
            width: 200px;
            height: 200px;
          }

          .shape-3 {
            width: 150px;
            height: 150px;
          }

          .shape-4 {
            width: 250px;
            height: 250px;
          }
        }

        /* Large Desktop Styles (1200px and up) */
        @media (min-width: 1200px) {
          .projects {
            padding: 8rem 2rem;
          }

          .section-title {
            font-size: 4rem;
          }

          .title-line {
            width: 200px;
          }

          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }

          .project-card {
            padding: 3rem;
          }

          .project-title-section h3 {
            font-size: 1.8rem;
          }

          .project-description {
            font-size: 1.05rem;
          }

          .feature-text {
            font-size: 0.95rem;
          }
        }

        /* Small Mobile Devices (480px and below) */
        @media (max-width: 480px) {
          .projects {
            padding: 3rem 1rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .title-sub {
            font-size: 0.9rem;
          }

          .project-card {
            padding: 1.2rem;
          }

          .project-title-section h3 {
            font-size: 1.2rem;
          }

          .project-subtitle {
            font-size: 0.9rem;
          }

          .project-description {
            font-size: 0.85rem;
          }

          .features-header h4 {
            font-size: 1rem;
          }

          .feature-text {
            font-size: 0.8rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.4rem 0.8rem;
          }

          .project-link {
            padding: 0.7rem 1rem;
            font-size: 0.85rem;
          }

          .section-subtitle {
            font-size: 1.4rem;
          }

          .section-description {
            font-size: 0.85rem;
          }
        }

        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .projects {
            padding: 3rem 1rem;
          }

          .projects-grid {
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .project-card {
            padding: 1.5rem;
          }

          .mini-projects-section {
            margin-top: 2rem;
          }
        }

        /* High DPI Screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .project-particle {
            width: 2px;
            height: 2px;
          }
        }

        /* Print Styles */
        @media print {
          .projects {
            background: white !important;
            padding: 2rem 1rem !important;
          }

          .background-grid,
          .floating-shapes,
          .icon-glow,
          .card-glow,
          .tag-glow,
          .link-glow,
          .mini-icon-glow,
          .feature-line {
            display: none !important;
          }

          .project-card {
            break-inside: avoid;
            border: 2px solid #ddd !important;
            box-shadow: none !important;
          }

          .project-card:hover {
            transform: none !important;
            border-color: #ddd !important;
          }

          .title-text,
          .section-subtitle span {
            -webkit-text-fill-color: #333 !important;
            color: #333 !important;
          }

          .project-link,
          .mini-link {
            border: 1px solid #333 !important;
            color: #333 !important;
            text-decoration: underline;
          }

          .project-link:hover,
          .mini-link:hover {
            background: transparent !important;
            color: #333 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;