import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaServer, FaDesktop, FaDatabase, FaCloud, FaBolt } from 'react-icons/fa';

const Projects = () => {
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
      type: 'fullstack'
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
      type: 'fullstack'
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
      type: 'backend'
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
      type: 'fullstack'
    }
  ];

  const miniProjects = [
    {
      title: 'Netflix Clone',
      description: 'Streaming platform UI with Firebase Authentication and watchlist management.',
      tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Firestore', 'Vite'],
      live: '#',
      github: '#'
    },
    {
      title: 'OLX Clone',
      description: 'Classified ads platform with Cloudinary image optimization and real-time database.',
      tech: ['React.js', 'Node.js', 'Firebase', 'Cloudinary', 'RTK Query'],
      github: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-title-section">
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                <div className={`project-type ${project.type}`}>
                  {project.type === 'fullstack' ? 'Full Stack' : 'Backend Focused'}
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaBolt className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.frontend && (
                  <a href={project.frontend} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaDesktop /> Frontend
                  </a>
                )}
                {project.backend && (
                  <a href={project.backend} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaServer /> Backend
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mini-projects-section">
          <h3 className="section-subtitle">Mini Projects</h3>
          <div className="mini-projects-grid">
            {miniProjects.map((project, index) => (
              <div key={index} className="mini-project-card">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="mini-project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="mini-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="mini-project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .projects {
          background: white;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .project-card {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          border-color: #3b82f6;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .project-title-section h3 {
          color: #1e293b;
          font-size: 1.5rem;
          margin: 0 0 0.25rem 0;
        }
        
        .project-subtitle {
          color: #3b82f6;
          font-weight: 500;
          margin: 0;
          font-size: 0.95rem;
        }
        
        .project-type {
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .project-type.fullstack {
          background: linear-gradient(45deg, #10b981, #059669);
          color: white;
        }
        
        .project-type.backend {
          background: linear-gradient(45deg, #3b82f6, #1d4ed8);
          color: white;
        }
        
        .project-description {
          color: #475569;
          margin: 1rem 0;
          line-height: 1.6;
          flex: 1;
        }
        
        .project-features {
          margin: 1.5rem 0;
        }
        
        .project-features h4 {
          color: #334155;
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
        }
        
        .project-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .project-features li {
          padding: 0.4rem 0;
          color: #64748b;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        
        .feature-icon {
          color: #3b82f6;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1rem 0;
        }
        
        .tech-tag {
          padding: 0.3rem 0.8rem;
          background: #e0f2fe;
          color: #0369a1;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid #bae6fd;
        }
        
        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: auto;
          flex-wrap: wrap;
        }
        
        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: white;
          color: #3b82f6;
          text-decoration: none;
          border-radius: 5px;
          font-weight: 500;
          font-size: 0.9rem;
          border: 1px solid #dbeafe;
          transition: all 0.3s ease;
        }
        
        .project-link:hover {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }
        
        .mini-projects-section {
          margin-top: 3rem;
          padding-top: 3rem;
          border-top: 2px solid #e2e8f0;
        }
        
        .section-subtitle {
          color: #1e293b;
          font-size: 1.8rem;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .mini-projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .mini-project-card {
          background: #f8fafc;
          padding: 1.5rem;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .mini-project-card:hover {
          border-color: #3b82f6;
          transform: translateY(-3px);
        }
        
        .mini-project-card h4 {
          color: #1e293b;
          margin: 0 0 0.75rem 0;
          font-size: 1.2rem;
        }
        
        .mini-project-card p {
          color: #64748b;
          font-size: 0.9rem;
          margin: 0 0 1rem 0;
          line-height: 1.5;
        }
        
        .mini-project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin: 1rem 0;
        }
        
        .mini-tech-tag {
          padding: 0.2rem 0.6rem;
          background: #f1f5f9;
          color: #475569;
          border-radius: 15px;
          font-size: 0.8rem;
          border: 1px solid #e2e8f0;
        }
        
        .mini-project-links {
          display: flex;
          gap: 1rem;
        }
        
        .mini-project-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: white;
          border-radius: 50%;
          color: #3b82f6;
          text-decoration: none;
          border: 1px solid #dbeafe;
          transition: all 0.3s ease;
        }
        
        .mini-project-links a:hover {
          background: #3b82f6;
          color: white;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-links {
            flex-direction: column;
          }
          
          .project-link {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;