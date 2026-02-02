import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const titleRef = useRef(null);
  const categoryCardsRef = useRef([]);
  const skillItemsRef = useRef([]);
  const progressBarsRef = useRef([]);
  const particlesRef = useRef([]);
  const statsRef = useRef([]);

  // Enhanced skill categories based on your resume
  const skillCategories = [
    {
      title: 'Frontend Development',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      glowColor: '#3b82f6',
      icon: '⚛️',
      skills: [
        { 
          name: 'React.js & Next.js', 
          level: 95, 
          color: '#61DAFB',
          description: 'Component architecture, Hooks, Performance optimization'
        },
        { 
          name: 'Redux Toolkit & RTK Query', 
          level: 90, 
          color: '#764ABC',
          description: 'State management, Data fetching & caching'
        },
        { 
          name: 'JavaScript (ES6+)', 
          level: 92, 
          color: '#F7DF1E',
          description: 'Modern JS, Async/Await, Promises'
        },
        { 
          name: 'Tailwind CSS & Material UI', 
          level: 88, 
          color: '#06B6D4',
          description: 'Responsive design, Component libraries'
        }
      ]
    },
    {
      title: 'Backend & APIs',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
      glowColor: '#ec4899',
      icon: '🚀',
      skills: [
        { 
          name: 'Node.js & Express.js', 
          level: 90, 
          color: '#339933',
          description: 'RESTful APIs, Middleware, Clean Architecture'
        },
        { 
          name: 'PostgreSQL & MongoDB', 
          level: 85, 
          color: '#336791',
          description: 'Database design, Query optimization'
        },
        { 
          name: 'Redis & Caching', 
          level: 82, 
          color: '#DC382D',
          description: 'Pub/Sub, Session management, Performance'
        },
        { 
          name: 'Socket.io & Real-time', 
          level: 80, 
          color: '#010101',
          description: 'Event-driven architecture, Live updates'
        }
      ]
    },
    {
      title: 'DevOps & Tools',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
      glowColor: '#0ea5e9',
      icon: '⚙️',
      skills: [
        { 
          name: 'AWS (EC2, S3)', 
          level: 78, 
          color: '#FF9900',
          description: 'Cloud deployment, Storage solutions'
        },
        { 
          name: 'Docker & CI/CD', 
          level: 75, 
          color: '#2496ED',
          description: 'Containerization, GitHub Actions'
        },
        { 
          name: 'Git & GitHub', 
          level: 92, 
          color: '#F05032',
          description: 'Version control, Collaboration'
        },
        { 
          name: 'JWT & Authentication', 
          level: 88, 
          color: '#000000',
          description: 'Security, Role-based access control'
        }
      ]
    }
  ];

  // Overall stats from your experience
  const stats = [
    { value: '2+', label: 'Years Experience', icon: '📅' },
    { value: '5+', label: 'Major Projects', icon: '💼' },
    { value: '95%', label: 'Frontend Mastery', icon: '🎨' },
    { value: '90%', label: 'Backend Skills', icon: '⚡' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate particles
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.to(particle, {
            y: `random(-30, 30)`,
            x: `random(-30, 30)`,
            duration: `random(3, 6)`,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.1
          });
        }
      });

      // Title entrance animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'elastic.out(1, 0.8)'
      });

      // Category cards stagger animation
      categoryCardsRef.current.forEach((card, i) => {
        if (card) {
          // Card entrance
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            rotationY: 15,
            duration: 1,
            delay: i * 0.15,
            ease: 'power3.out'
          });

          // Continuous hover pulse
          gsap.to(card, {
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            paused: true
          });
        }
      });

      // Individual skill items animation
      skillItemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none reverse'
            },
            x: -30,
            opacity: 0,
            duration: 0.6,
            delay: (i % 4) * 0.1,
            ease: 'back.out(1.4)'
          });
        }
      });

      // Progress bars animation with counter
      progressBarsRef.current.forEach((bar, i) => {
        if (bar) {
          const level = parseFloat(bar.dataset.level);
          const barFill = bar.querySelector('.progress-fill');
          const percentText = bar.querySelector('.skill-percent-value');

          gsap.fromTo(
            barFill,
            { width: '0%' },
            {
              width: `${level}%`,
              duration: 1.5,
              delay: 0.3 + (i % 4) * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: bar,
                start: 'top 92%',
                toggleActions: 'play none none reverse'
              }
            }
          );

          // Animate percentage number
          if (percentText) {
            gsap.from(percentText, {
              scrollTrigger: {
                trigger: bar,
                start: 'top 92%',
                toggleActions: 'play none none reverse'
              },
              textContent: 0,
              duration: 1.5,
              delay: 0.3 + (i % 4) * 0.1,
              snap: { textContent: 1 },
              ease: 'power1.out'
            });
          }
        }
      });

      // Stats animation
      statsRef.current.forEach((stat, i) => {
        if (stat) {
          gsap.from(stat, {
            scrollTrigger: {
              trigger: stat,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            },
            scale: 0,
            opacity: 0,
            rotation: 180,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'back.out(1.7)'
          });
        }
      });

    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      {/* Animated Background */}
      <div className="skills-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            ref={el => particlesRef.current[i] = el}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`
            }}
          />
        ))}
      </div>

      <div className="container">
        {/* Header Section */}
        <div className="skills-header" ref={titleRef}>
          <div className="header-badge">
            <span className="badge-icon">💡</span>
            <span className="badge-text">Technical Excellence</span>
          </div>
          <h2 className="skills-title">
            <span className="title-main">Tech Stack</span>
            <span className="title-sub">& Expertise</span>
          </h2>
          <p className="skills-description">
            Full-stack development prowess with cutting-edge technologies
            <br />
            Building scalable, production-ready applications
          </p>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="category-card"
              ref={el => categoryCardsRef.current[categoryIndex] = el}
              style={{ '--glow-color': category.glowColor }}
            >
              {/* Card Header */}
              <div className="card-header">
                <div className="category-icon-wrapper">
                  <div className="icon-glow" style={{ background: category.glowColor }}></div>
                  <span className="category-icon">{category.icon}</span>
                </div>
                <div className="category-info">
                  <h3 className="category-title">{category.title}</h3>
                  <div className="category-line" style={{ background: category.gradient }}></div>
                </div>
              </div>

              {/* Skills List */}
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * 4 + skillIndex;
                  return (
                    <div
                      key={skillIndex}
                      className="skill-item"
                      ref={el => skillItemsRef.current[globalIndex] = el}
                    >
                      {/* Skill Header */}
                      <div className="skill-header">
                        <div className="skill-name-wrapper">
                          <div className="skill-dot" style={{ background: skill.color }}></div>
                          <h4 className="skill-name">{skill.name}</h4>
                        </div>
                        <div className="skill-percent">
                          <span className="skill-percent-value" style={{ color: skill.color }}>
                            {skill.level}
                          </span>
                          <span className="percent-sign">%</span>
                        </div>
                      </div>

                      {/* Skill Description */}
                      <p className="skill-description">{skill.description}</p>

                      {/* Progress Bar */}
                      <div
                        className="progress-container"
                        ref={el => progressBarsRef.current[globalIndex] = el}
                        data-level={skill.level}
                      >
                        <div className="progress-track">
                          <div
                            className="progress-fill"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                              boxShadow: `0 0 15px ${skill.color}80`
                            }}
                          >
                            <div className="progress-shine"></div>
                          </div>
                        </div>
                        <div className="progress-markers">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className="marker"
                              style={{
                                background: i * 10 < skill.level ? skill.color : '#d1d5db'
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-container">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="stat-card"
                ref={el => statsRef.current[i] = el}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="skills-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Build Something Amazing?</h3>
            <p className="cta-text">
              Let's collaborate on your next project with cutting-edge technology
            </p>
            <div className="cta-badges">
              <span className="cta-badge">MERN Stack</span>
              <span className="cta-badge">Cloud Native</span>
              <span className="cta-badge">Production Ready</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          position: relative;
          background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
          color: #1f2937;
          padding: 120px 0;
          overflow: hidden;
        }

        /* Animated Background */
        .skills-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.1;
          animation: float 20s infinite ease-in-out;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #3b82f6, transparent);
          top: -100px;
          left: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #ec4899, transparent);
          bottom: -150px;
          right: -150px;
          animation-delay: 7s;
        }

        .orb-3 {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, #0ea5e9, transparent);
          top: 50%;
          left: 50%;
          animation-delay: 14s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }

        .particle {
          position: absolute;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* Header Section */
        .skills-header {
          text-align: center;
          margin-bottom: 80px;
        }

        .header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.1);
          backdrop-filter: blur(10px);
          padding: 10px 24px;
          border-radius: 50px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          margin-bottom: 24px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #3b82f6;
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .skills-title {
          font-size: 4.5rem;
          font-weight: 900;
          margin: 0 0 16px 0;
          line-height: 1.1;
        }

        .title-main {
          display: block;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .title-sub {
          display: block;
          background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 3rem;
        }

        .skills-description {
          color: #6b7280;
          font-size: 1.2rem;
          line-height: 1.8;
          margin: 0 0 32px 0;
        }

        .title-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        .decoration-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
        }

        .decoration-dot {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          animation: pulse-dot 2s infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 32px;
          margin-bottom: 80px;
        }

        /* Category Card */
        .category-card {
          background: white;
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 32px;
          border: 1px solid rgba(209, 213, 219, 0.6);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }

        .category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--glow-color), transparent);
          opacity: 0.8;
        }

        .category-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .category-card:hover {
          transform: translateY(-8px);
          border-color: var(--glow-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .category-card:hover::after {
          opacity: 0.05;
        }

        /* Card Header */
        .card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          position: relative;
          z-index: 1;
        }

        .category-icon-wrapper {
          position: relative;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.05);
          border-radius: 16px;
          flex-shrink: 0;
        }

        .icon-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          opacity: 0.2;
          filter: blur(20px);
        }

        .category-icon {
          font-size: 2rem;
          position: relative;
          z-index: 1;
        }

        .category-info {
          flex: 1;
        }

        .category-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 8px 0;
          color: #1f2937;
        }

        .category-line {
          height: 3px;
          border-radius: 2px;
          max-width: 120px;
        }

        /* Skills List */
        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* Skill Item */
        .skill-item {
          position: relative;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .skill-name-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .skill-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          box-shadow: 0 0 10px currentColor;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          color: #1f2937;
        }

        .skill-percent {
          display: flex;
          align-items: baseline;
          gap: 2px;
          font-weight: 700;
        }

        .skill-percent-value {
          font-size: 1.4rem;
        }

        .percent-sign {
          font-size: 1rem;
          color: #6b7280;
        }

        .skill-description {
          font-size: 0.9rem;
          color: #6b7280;
          margin: 0 0 12px 22px;
          line-height: 1.5;
        }

        /* Progress Bar */
        .progress-container {
          margin-left: 22px;
        }

        .progress-track {
          height: 8px;
          background: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          margin-bottom: 8px;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          position: relative;
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .progress-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          animation: shine 2s infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .progress-markers {
          display: flex;
          gap: 4px;
          justify-content: space-between;
        }

        .marker {
          width: 100%;
          height: 4px;
          border-radius: 2px;
          transition: background 0.3s;
        }

        /* Stats Section */
        .stats-section {
          margin: 80px 0;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
        }

        .stat-card {
          position: relative;
          background: white;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(209, 213, 219, 0.6);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          transition: all 0.3s;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .stat-icon {
          font-size: 3rem;
          margin-bottom: 12px;
          opacity: 0.8;
        }

        .stat-value {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1rem;
          color: #6b7280;
          font-weight: 600;
        }

        .stat-glow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 4px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          border-radius: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .stat-card:hover .stat-glow {
          opacity: 1;
        }

        /* CTA Section */
        .skills-cta {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 24px;
          padding: 48px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .cta-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0 0 16px 0;
          color: #1f2937;
        }

        .cta-text {
          font-size: 1.1rem;
          color: #6b7280;
          margin: 0 0 32px 0;
        }

        .cta-badges {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cta-badge {
          padding: 10px 20px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #3b82f6;
          transition: all 0.3s;
        }

        .cta-badge:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: scale(1.05);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .skills-title {
            font-size: 3.5rem;
          }

          .title-sub {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 80px 0;
          }

          .skills-header {
            margin-bottom: 60px;
          }

          .skills-title {
            font-size: 2.8rem;
          }

          .title-sub {
            font-size: 2rem;
          }

          .skills-description {
            font-size: 1rem;
          }

          .category-card {
            padding: 24px;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }

          .skills-cta {
            padding: 32px 24px;
          }

          .cta-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .skills-title {
            font-size: 2.2rem;
          }

          .title-sub {
            font-size: 1.6rem;
          }

          .category-title {
            font-size: 1.2rem;
          }

          .skill-name {
            font-size: 1rem;
          }

          .stats-container {
            grid-template-columns: 1fr;
          }

          .cta-badges {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;