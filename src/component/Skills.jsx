import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaAws, FaDocker, FaGitAlt, FaJs, FaCss3Alt, FaHtml5, FaBootstrap } from 'react-icons/fa';
import {
  SiRedux,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiExpress,
  SiTailwindcss,
  SiMui,
  SiTypescript,
  SiJest,
  SiWebpack
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 95, color: '#61DAFB' },
        { name: 'Redux Toolkit', icon: <SiRedux />, level: 90, color: '#764ABC' },
        { name: 'JavaScript (ES6+)', icon: <FaJs />, level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 80, color: '#3178C6' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 92, color: '#06B6D4' },
{ name: 'Material UI', icon: <SiMui />, level: 85, color: '#007FFF' },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 85, color: '#7952B3' }
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 88, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, level: 85, color: '#000000' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, color: '#336791' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: '#47A248' },
        { name: 'Redis', icon: <SiRedis />, level: 75, color: '#DC382D' },
        { name: 'REST APIs', icon: <FaDatabase />, level: 90, color: '#FF6B6B' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git & GitHub', icon: <FaGitAlt />, level: 90, color: '#F05032' },
        { name: 'Docker', icon: <FaDocker />, level: 75, color: '#2496ED' },
        { name: 'AWS (EC2, S3)', icon: <FaAws />, level: 70, color: '#FF9900' },
        { name: 'Jest', icon: <SiJest />, level: 65, color: '#C21325' },
        { name: 'Webpack', icon: <SiWebpack />, level: 70, color: '#8DD6F9' },
        { name: 'CI/CD', icon: <FaGitAlt />, level: 75, color: '#4CAF50' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="skill-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills {
          background: white;
        }
        
        .skills-categories {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .skill-category {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .category-title {
          font-size: 1.5rem;
          color: #1e293b;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .skill-item {
          background: white;
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }
        
        .skill-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .skill-icon {
          font-size: 2rem;
          background: #f1f5f9;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }
        
        .skill-info {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .skill-info h4 {
          font-size: 1.1rem;
          color: #334155;
          margin: 0;
        }
        
        .skill-percent {
          font-weight: 700;
          color: #3b82f6;
          font-size: 1.1rem;
        }
        
        .skill-progress {
          margin-top: 0.5rem;
        }
        
        .progress-bar {
          height: 8px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }
        
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          
          .skill-category {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;