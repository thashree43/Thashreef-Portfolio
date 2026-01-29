import React from 'react';
import { FaBriefcase, FaCalendar, FaBuilding, FaTasks } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      company: 'Quality Opera International LLP, Bangalore',
      position: 'Software Developer',
      period: 'Jan 2025 - Jun 2025',
      responsibilities: [
        'Developed and maintained Node.js backend services and RESTful APIs using Express.js in production environments',
        'Managed seamless data flow between frontend and backend systems',
        'Implemented JWT authentication and authorization',
        'Optimized MongoDB schemas and database queries',
        'Used Async/Await for non-blocking operations and improved performance using Redis caching',
        'Containerized applications using Docker and deployed services on AWS EC2',
        'Built real-time communication using Socket.io',
        'Implemented event-driven asynchronous job processing with node-cron',
        'Implemented backend file upload handling and debugged production issues',
        'Contributed to full-stack MERN feature development'
      ]
    },
    {
      company: 'Freelancer, Kerala',
      position: 'Web Developer & Instructor',
      period: 'Oct 2023 - Present',
      responsibilities: [
        'Designed and developed MERN stack web applications for client-based business requirements',
        'Identified and implemented web-based user interactions using React concepts',
        'Built highly responsive UI components following best practices',
        'Translated business requirements into technical UI solutions',
        'Mentored developers in React.js, Redux, component architecture, and UI optimization',
        'Reviewed frontend code and resolved UI performance issues'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Voice of Security',
      issuer: 'IBM SkillsBuild',
      description: 'Security certification from IBM'
    },
    {
      title: 'Best Coordinator & Best Performance',
      issuer: 'Brototype, Calicut',
      description: 'Awarded for outstanding performance and leadership'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience & Achievements</h2>
        
        <div className="experience-content">
          <div className="experience-timeline">
            <h3 className="section-subtitle">
              <FaBriefcase /> Professional Experience
            </h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-header">
                    <div className="timeline-company">
                      <FaBuilding className="timeline-icon" />
                      <h4>{exp.company}</h4>
                    </div>
                    <div className="timeline-position">
                      <h5>{exp.position}</h5>
                      <div className="timeline-period">
                        <FaCalendar />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="timeline-content">
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>
                          <FaTasks className="task-icon" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="achievements-section">
            <h3 className="section-subtitle">
              <FaBriefcase /> Certificates & Achievements
            </h3>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p className="achievement-issuer">{achievement.issuer}</p>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                  <div className="achievement-badge">
                    <span>Award</span>
                  </div>
                </div>
              ))}
              
              <div className="education-card">
                <h4>Education</h4>
                <div className="education-item">
                  <h5>MERN Stack Development</h5>
                  <p className="education-period">2023 – 2025</p>
                  <p className="education-institution">Brototype, Calicut</p>
                </div>
                <div className="education-item">
                  <h5>Bachelor of Science (BSc)</h5>
                  <p className="education-period">2021 – 2023</p>
                  <p className="education-institution">Bharathiyar University, Coimbatore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .experience {
          background: #f8fafc;
        }
        
        .experience-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .section-subtitle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.8rem;
          color: #1e293b;
          margin-bottom: 2rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .timeline {
          position: relative;
          padding-left: 2rem;
          margin-left: 1rem;
        }
        
        .timeline:before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 3px;
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 2.5rem;
          padding-left: 1.5rem;
        }
        
        .timeline-item:before {
          content: '';
          position: absolute;
          left: -2.5rem;
          top: 0;
          width: 15px;
          height: 15px;
          background: #3b82f6;
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px #3b82f6;
        }
        
        .timeline-header {
          background: white;
          padding: 1.5rem;
          border-radius: 10px 10px 0 0;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        }
        
        .timeline-company {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }
        
        .timeline-company h4 {
          color: #3b82f6;
          font-size: 1.2rem;
          margin: 0;
        }
        
        .timeline-position {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .timeline-position h5 {
          color: #1e293b;
          font-size: 1.1rem;
          margin: 0;
        }
        
        .timeline-period {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #eff6ff;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          color: #3b82f6;
          font-weight: 500;
        }
        
        .timeline-content {
          background: white;
          padding: 1.5rem;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          margin-top: 1px;
        }
        
        .responsibilities {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .responsibilities li {
          padding: 0.5rem 0;
          color: #475569;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          line-height: 1.6;
        }
        
        .task-icon {
          color: #10b981;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .achievements-section {
          margin-top: 3rem;
        }
        
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .achievement-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border: 2px solid #e2e8f0;
          transition: all 0.3s ease;
        }
        
        .achievement-card:hover {
          border-color: #3b82f6;
          transform: translateY(-3px);
        }
        
        .achievement-content {
          flex: 1;
        }
        
        .achievement-content h4 {
          color: #1e293b;
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
        }
        
        .achievement-issuer {
          color: #3b82f6;
          font-weight: 600;
          margin: 0 0 0.5rem 0;
          font-size: 0.95rem;
        }
        
        .achievement-description {
          color: #64748b;
          margin: 0;
          font-size: 0.9rem;
        }
        
        .achievement-badge {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        .education-card {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          border: 2px solid #e2e8f0;
        }
        
        .education-card h4 {
          color: #1e293b;
          margin: 0 0 1rem 0;
          font-size: 1.1rem;
        }
        
        .education-item {
          padding: 1rem 0;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .education-item:last-child {
          border-bottom: none;
        }
        
        .education-item h5 {
          color: #334155;
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
        }
        
        .education-period {
          color: #3b82f6;
          font-size: 0.9rem;
          margin: 0 0 0.25rem 0;
          font-weight: 500;
        }
        
        .education-institution {
          color: #64748b;
          font-size: 0.9rem;
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .timeline {
            padding-left: 1.5rem;
            margin-left: 0.5rem;
          }
          
          .timeline-item:before {
            left: -2rem;
          }
          
          .timeline-position {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;