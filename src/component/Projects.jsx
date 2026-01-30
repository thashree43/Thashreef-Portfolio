import React, { useEffect, useRef } from 'react';
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
  const projectsRef = useRef(null);
  const titleRef = useRef(null);
  const projectCardsRef = useRef([]);
  const techTagsRef = useRef([]);
  const floatingElementsRef = useRef([]);

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
      live: '#',
      frontend: '#',
      backend: '#',
      type: 'fullstack',
      icon: FaWaveSquare,
      accentColor: '#3b82f6',
      particles: 8
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
      live: '#',
      frontend: '#',
      backend: '#',
      type: 'fullstack',
      icon: FaLeaf,
      accentColor: '#10b981',
      particles: 6
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
      live: '#',
      github: '#',
      type: 'backend',
      icon: FaShoppingCart,
      accentColor: '#8b5cf6',
      particles: 7
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
      live: '#',
      frontend: '#',
      backend: '#',
      type: 'fullstack',
      icon: FaWarehouse,
      accentColor: '#f59e0b',
      particles: 5
    }
  ];

  const miniProjects = [
    {
      title: 'Netflix Clone',
      description: 'Streaming platform UI with Firebase Authentication and watchlist management.',
      tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Firestore', 'Vite'],
      live: '#',
      github: '#',
      icon: FaCode
    },
    {
      title: 'OLX Clone',
      description: 'Classified ads platform with Cloudinary image optimization and real-time database.',
      tech: ['React.js', 'Node.js', 'Firebase', 'Cloudinary', 'RTK Query'],
      github: '#',
      icon: FaNetworkWired
    }
  ];

  // GSAP Animations
  useEffect(() => {
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

    }, projectsRef);

    return () => ctx.revert();
  }, []);

  const ProjectIcon = ({ icon: Icon, projectIndex }) => {
    return (
      <div className="project-icon-wrapper" ref={el => floatingElementsRef.current[projectIndex] = el}>
        <div className="icon-glow"></div>
        <Icon className="project-icon" />
        <div className="icon-orbits">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>
        </div>
      </div>
    );
  };

  const ProjectParticles = ({ count, projectIndex, accentColor }) => {
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
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container">
        {/* Animated Title */}
        <div className="title-section" ref={titleRef}>
          <h2 className="section-title">
            <span className="title-text">Featured Projects</span>
            <div className="title-line">
              <div className="line-glow"></div>
            </div>
            <span className="title-sub">Innovative Solutions, Exceptional Results</span>
          </h2>
          <div className="title-decoration">
            <FaCode className="decoration-icon" />
            <FaLayerGroup className="decoration-icon" />
            <FaRocket className="decoration-icon" />
          </div>
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
              <div className="card-glow"></div>

              {/* Project Header */}
              <div className="project-header">
                <div className="project-icon-section">
                  <ProjectIcon icon={project.icon} projectIndex={index} />
                </div>
                <div className="project-title-section">
                  <h3>
                    <span className="project-title-text">{project.title}</span>
                    <span className="project-title-highlight">{project.title}</span>
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
                        <div className="feature-line"></div>
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
                      <div className="tag-glow"></div>
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="project-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                    <div className="link-glow"></div>
                  </a>
                )}
                {project.frontend && (
                  <a href={project.frontend} target="_blank" rel="noopener noreferrer" className="project-link frontend-link">
                    <FaDesktop />
                    <span>Frontend</span>
                    <div className="link-glow"></div>
                  </a>
                )}
                {project.backend && (
                  <a href={project.backend} target="_blank" rel="noopener noreferrer" className="project-link backend-link">
                    <FaServer />
                    <span>Backend</span>
                    <div className="link-glow"></div>
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                    <FaGithub />
                    <span>GitHub</span>
                    <div className="link-glow"></div>
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
                  <div className="mini-icon-glow"></div>
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
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="mini-link">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="mini-link">
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
          background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
          color: white;
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }

        .background-grid {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
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
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-color, rgba(96, 165, 250, 0.1)) 0%, transparent 70%);
          filter: blur(40px);
          opacity: 0.3;
          animation: floatShape 20s ease-in-out infinite;
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          top: 60%;
          right: 10%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 15%;
          animation-delay: 10s;
        }

        .shape-4 {
          width: 250px;
          height: 250px;
          top: 30%;
          right: 20%;
          animation-delay: 15s;
        }

        @keyframes floatShape {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, 50px) scale(1.1); }
          50% { transform: translate(50px, -50px) scale(0.9); }
          75% { transform: translate(-50px, 50px) scale(1.05); }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* Title Section */
        .title-section {
          text-align: center;
          margin-bottom: 80px;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }

        .title-text {
          background: linear-gradient(45deg, #64ffda, #60a5fa, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 2;
          display: block;
        }

        .title-line {
          width: 200px;
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--accent-color, #64ffda), transparent);
          margin: 20px auto;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .line-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, white, transparent);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .title-sub {
          display: block;
          color: #8892b0;
          font-size: 1.2rem;
          font-weight: 400;
          margin-top: 15px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .title-decoration {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin-top: 30px;
        }

        .decoration-icon {
          color: #64ffda;
          font-size: 2rem;
          opacity: 0.5;
          animation: bounce 2s ease-in-out infinite;
        }

        .decoration-icon:nth-child(2) {
          animation-delay: 0.5s;
        }

        .decoration-icon:nth-child(3) {
          animation-delay: 1s;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        @media (max-width: 1100px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Project Card */
        .project-card {
          background: rgba(17, 34, 64, 0.7);
          padding: 40px;
          border-radius: 25px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .project-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 
            0 40px 80px rgba(0, 0, 0, 0.4),
            0 0 100px var(--accent-color, rgba(96, 165, 250, 0.2)),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          border-color: var(--accent-color, rgba(96, 165, 250, 0.3));
        }

        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .project-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--particle-color);
          border-radius: 50%;
          opacity: 0.6;
          filter: blur(1px);
          animation: particleFloat 4s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0); opacity: 0.6; }
          50% { transform: translate(10px, -10px); opacity: 0.3; }
        }

        .card-glow {
          position: absolute;
          top: -100px;
          left: -100px;
          right: -100px;
          bottom: -100px;
          background: radial-gradient(circle at center, var(--accent-color, rgba(96, 165, 250, 0.1)) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
          filter: blur(60px);
        }

        .project-card:hover .card-glow {
          opacity: 0.3;
        }

        /* Project Header */
        .project-header {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-bottom: 30px;
        }

        .project-icon-wrapper {
          width: 80px;
          height: 80px;
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
          opacity: 0.2;
          filter: blur(20px);
        }

        .project-icon {
          font-size: 2.5rem;
          color: var(--accent-color);
          position: relative;
          z-index: 2;
        }

        .icon-orbits {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }

        .orbit {
          position: absolute;
          border: 1px solid var(--accent-color);
          border-radius: 50%;
          opacity: 0.2;
        }

        .orbit-1 {
          width: 100%;
          height: 100%;
          animation: rotate 10s linear infinite;
        }

        .orbit-2 {
          width: 120%;
          height: 120%;
          top: -10%;
          left: -10%;
          animation: rotate 15s linear infinite reverse;
        }

        .orbit-3 {
          width: 140%;
          height: 140%;
          top: -20%;
          left: -20%;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .project-title-section {
          flex: 1;
        }

        .project-title-section h3 {
          position: relative;
          display: inline-block;
          margin: 0 0 10px 0;
          font-size: 1.8rem;
        }

        .project-title-text {
          color: white;
          position: relative;
          z-index: 2;
        }

        .project-title-highlight {
          position: absolute;
          top: 0;
          left: 0;
          color: transparent;
          background: linear-gradient(45deg, var(--accent-color), transparent);
          -webkit-background-clip: text;
          background-clip: text;
          z-index: 1;
          filter: blur(5px);
          opacity: 0.5;
        }

        .project-subtitle {
          color: var(--accent-color);
          font-weight: 500;
          margin: 0 0 15px 0;
          font-size: 1.1rem;
        }

        .project-type {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .type-dot {
          width: 8px;
          height: 8px;
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
          gap: 15px;
          margin-bottom: 30px;
          background: rgba(255, 255, 255, 0.02);
          padding: 20px;
          border-radius: 15px;
          border-left: 3px solid var(--accent-color);
        }

        .description-icon {
          color: var(--accent-color);
          font-size: 1.2rem;
          margin-top: 2px;
        }

        .project-description {
          color: #8892b0;
          line-height: 1.7;
          margin: 0;
          flex: 1;
        }

        /* Features */
        .project-features {
          margin-bottom: 30px;
        }

        .features-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }

        .features-icon {
          color: var(--accent-color);
          font-size: 1.2rem;
        }

        .features-header h4 {
          color: white;
          margin: 0;
          font-size: 1.2rem;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          display: flex;
          gap: 15px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .feature-item:last-child {
          border-bottom: none;
        }

        .feature-marker {
          width: 6px;
          height: 6px;
          background: var(--accent-color);
          border-radius: 50%;
          margin-top: 8px;
          flex-shrink: 0;
        }

        .feature-content {
          flex: 1;
          position: relative;
        }

        .feature-text {
          color: #cbd5e1;
          font-size: 0.95rem;
          line-height: 1.5;
          display: block;
        }

        .feature-line {
          position: absolute;
          bottom: -12px;
          left: 0;
          width: 0;
          height: 1px;
          background: linear-gradient(90deg, var(--accent-color), transparent);
          transition: width 0.3s ease;
        }

        .feature-item:hover .feature-line {
          width: 100%;
        }

        /* Tech Stack */
        .project-tech {
          margin-bottom: 30px;
        }

        .tech-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .tech-icon {
          color: var(--accent-color);
          font-size: 1.2rem;
        }

        .tech-header h5 {
          color: white;
          margin: 0;
          font-size: 1.1rem;
        }

        .tech-tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-tag {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: default;
        }

        .tech-tag:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateY(-3px);
          border-color: var(--accent-color);
        }

        .tag-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, var(--accent-color), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-tag:hover .tag-glow {
          opacity: 0.1;
        }

        /* Project Links */
        .project-links {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          text-decoration: none;
          border-radius: 12px;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          flex: 1;
          justify-content: center;
          min-width: 140px;
        }

        .project-link:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .link-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }

        .project-link:hover .link-glow {
          left: 100%;
        }

        /* Mini Projects Section */
        .mini-projects-section {
          margin-top: 80px;
        }

        .section-divider {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 50px;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.3), transparent);
        }

        .divider-icon {
          color: #64ffda;
          font-size: 1.5rem;
          animation: spin 4s linear infinite;
        }

        .mini-projects-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .section-subtitle {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 15px 0;
          display: inline-block;
        }

        .section-subtitle span {
          background: linear-gradient(45deg, #64ffda, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle-underline {
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, #64ffda, transparent);
          margin: 10px auto 0;
          border-radius: 2px;
        }

        .section-description {
          color: #8892b0;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .mini-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }

        .mini-project-card {
          background: rgba(17, 34, 64, 0.5);
          padding: 30px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          gap: 25px;
          align-items: flex-start;
          transition: all 0.3s ease;
        }

        .mini-project-card:hover {
          transform: translateY(-10px);
          border-color: #64ffda;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .mini-project-icon {
          width: 60px;
          height: 60px;
          background: rgba(100, 255, 218, 0.1);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64ffda;
          font-size: 1.5rem;
          position: relative;
          flex-shrink: 0;
        }

        .mini-icon-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #64ffda;
          border-radius: 15px;
          opacity: 0.1;
          filter: blur(10px);
        }

        .mini-project-content {
          flex: 1;
        }

        .mini-project-content h4 {
          color: white;
          margin: 0 0 10px 0;
          font-size: 1.3rem;
        }

        .mini-project-content p {
          color: #8892b0;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 15px 0;
        }

        .mini-project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin: 15px 0;
        }

        .mini-tech-tag {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mini-project-links {
          display: flex;
          gap: 15px;
          margin-top: 20px;
        }

        .mini-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
          color: #cbd5e1;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .mini-link:hover {
          background: #64ffda;
          color: #0a192f;
          transform: scale(1.1);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .projects {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card {
            padding: 30px;
          }

          .project-header {
            flex-direction: column;
            text-align: center;
            gap: 20px;
          }

          .project-links {
            flex-direction: column;
          }

          .mini-projects-grid {
            grid-template-columns: 1fr;
          }

          .mini-project-card {
            flex-direction: column;
            text-align: center;
          }

          .mini-project-icon {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1.8rem;
          }

          .project-card {
            padding: 20px;
          }

          .tech-tags-container {
            justify-content: center;
          }

          .project-links {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;