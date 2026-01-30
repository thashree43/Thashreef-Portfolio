import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const titleRef = useRef(null);
  const skillCardsRef = useRef([]);
  const skillIconsRef = useRef([]);
  const progressBarsRef = useRef([]);
  const connectionLinesRef = useRef(null);
  const floatingElementsRef = useRef([]);

  // Custom SVG Icons
  const SkillIcons = {
    React: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <circle cx="50" cy="50" r="30" className="skill-orb" />
        <ellipse cx="50" cy="50" rx="45" ry="15" className="skill-orbit" />
        <ellipse cx="50" cy="50" rx="45" ry="15" className="skill-orbit" style={{ transform: 'rotate(60deg)' }} />
        <ellipse cx="50" cy="50" rx="45" ry="15" className="skill-orbit" style={{ transform: 'rotate(120deg)' }} />
        <circle cx="50" cy="50" r="8" className="skill-core" />
      </svg>
    ),
    Node: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <polygon points="50,10 80,30 80,70 50,90 20,70 20,30" className="skill-hex" />
        <circle cx="50" cy="50" r="15" className="skill-inner" />
        <path d="M35,35 L65,65 M65,35 L35,65" className="skill-cross" />
      </svg>
    ),
    Database: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <ellipse cx="50" cy="30" rx="35" ry="15" className="skill-disk" />
        <rect x="15" y="30" width="70" height="40" className="skill-cylinder" />
        <ellipse cx="50" cy="70" rx="35" ry="15" className="skill-disk" />
        <line x1="50" y1="30" x2="50" y2="70" className="skill-connector" />
      </svg>
    ),
    JavaScript: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <rect x="20" y="20" width="60" height="60" className="skill-square" />
        <path d="M35,35 L65,35 L65,65 L35,65 Z" className="skill-inner-square" />
        <circle cx="50" cy="50" r="10" className="skill-dot" />
      </svg>
    ),
    TypeScript: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <polygon points="50,20 80,50 50,80 20,50" className="skill-diamond" />
        <rect x="40" y="40" width="20" height="20" className="skill-inner" />
        <line x1="40" y1="40" x2="60" y2="60" className="skill-diagonal" />
        <line x1="60" y1="40" x2="40" y2="60" className="skill-diagonal" />
      </svg>
    ),
    CSS: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <path d="M20,30 L50,20 L80,30 L70,70 L50,80 L30,70 Z" className="skill-shield" />
        <rect x="35" y="40" width="30" height="25" className="skill-block" />
        <line x1="35" y1="40" x2="65" y2="40" className="skill-line" />
        <line x1="35" y1="52.5" x2="65" y2="52.5" className="skill-line" />
        <line x1="35" y1="65" x2="65" y2="65" className="skill-line" />
      </svg>
    ),
    Docker: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <rect x="20" y="20" width="60" height="60" rx="10" className="skill-container" />
        <rect x="30" y="30" width="15" height="15" className="skill-box" />
        <rect x="50" y="30" width="15" height="15" className="skill-box" />
        <rect x="30" y="50" width="15" height="15" className="skill-box" />
        <rect x="50" y="50" width="15" height="15" className="skill-box" />
        <circle cx="72" cy="57" r="5" className="skill-dot" />
      </svg>
    ),
    AWS: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <path d="M50,20 L80,40 L80,70 L50,90 L20,70 L20,40 Z" className="skill-cloud" />
        <circle cx="50" cy="50" r="15" className="skill-inner-cloud" />
        <path d="M40,45 L50,55 L60,45" className="skill-arrow" />
      </svg>
    ),
    Git: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <circle cx="35" cy="35" r="12" className="skill-branch" />
        <circle cx="65" cy="35" r="12" className="skill-branch" />
        <circle cx="65" cy="65" r="12" className="skill-branch" />
        <circle cx="35" cy="65" r="12" className="skill-branch" />
        <path d="M35,35 L65,35 M65,35 L65,65 M65,65 L35,65" className="skill-merge" />
        <circle cx="50" cy="50" r="5" className="skill-commit" />
      </svg>
    ),
    Express: () => (
      <svg viewBox="0 0 100 100" className="skill-svg">
        <rect x="25" y="25" width="50" height="50" className="skill-api" />
        <line x1="25" y1="40" x2="75" y2="40" className="skill-route" />
        <line x1="25" y1="50" x2="75" y2="50" className="skill-route" />
        <line x1="25" y1="60" x2="75" y2="60" className="skill-route" />
        <circle cx="40" cy="40" r="3" className="skill-endpoint" />
        <circle cx="60" cy="60" r="3" className="skill-endpoint" />
      </svg>
    )
  };

  const skillCategories = [
    {
      title: 'Core Technologies',
      color: '#3b82f6',
      skills: [
        { name: 'React', level: 95, icon: 'React', color: '#61DAFB' },
        { name: 'Node.js', level: 88, icon: 'Node', color: '#339933' },
        { name: 'TypeScript', level: 80, icon: 'TypeScript', color: '#3178C6' },
        { name: 'JavaScript', level: 90, icon: 'JavaScript', color: '#F7DF1E' }
      ]
    },
    {
      title: 'Backend & Data',
      color: '#10b981',
      skills: [
        { name: 'Express.js', level: 85, icon: 'Express', color: '#000000' },
        { name: 'MongoDB', level: 80, icon: 'Database', color: '#47A248' },
        { name: 'PostgreSQL', level: 85, icon: 'Database', color: '#336791' },
        { name: 'REST APIs', level: 90, icon: 'Database', color: '#FF6B6B' }
      ]
    },
    {
      title: 'Tools & Cloud',
      color: '#8b5cf6',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: 'Git', color: '#F05032' },
        { name: 'Docker', level: 75, icon: 'Docker', color: '#2496ED' },
        { name: 'AWS', level: 70, icon: 'AWS', color: '#FF9900' },
        { name: 'CSS/Styling', level: 92, icon: 'CSS', color: '#1572B6' }
      ]
    }
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Card animations
      skillCardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            delay: i * 0.2,
            ease: "back.out(1.7)"
          });
        }
      });

      // Icon animations
      skillIconsRef.current.forEach((icon, i) => {
        if (icon) {
          gsap.from(icon, {
            scrollTrigger: {
              trigger: icon,
              start: "top 90%",
              toggleActions: "play none none reverse"
            },
            scale: 0,
            rotation: 180,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: "elastic.out(1, 0.5)"
          });
        }
      });

      // Progress bars animation
      progressBarsRef.current.forEach((bar, i) => {
        if (bar) {
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${bar.dataset.level}%`,
              duration: 1.5,
              delay: 0.5 + (i * 0.1),
              ease: "power2.out",
              scrollTrigger: {
                trigger: bar,
                start: "top 95%",
                toggleActions: "play none none reverse"
              }
            }
          );
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

      // Connection lines animation
      if (connectionLinesRef.current) {
        gsap.fromTo(
          connectionLinesRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: connectionLinesRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Continuous animations
      gsap.to('.skill-icon-container', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        stagger: 5
      });

    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const IconComponent = ({ iconName }) => {
    const Icon = SkillIcons[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      {/* Background Elements */}
      <div className="background-elements">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="floating-element"
            style={{
              left: `${(i + 1) * 12}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`
            }}
            ref={el => floatingElementsRef.current[i] = el}
          />
        ))}
        <div className="connection-lines" ref={connectionLinesRef.current}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>

      <div className="container">
        {/* Animated Title */}
        <div className="title-section" ref={titleRef}>
          <h2 className="section-title">
            <span className="title-text">Technical Stack</span>
            <div className="title-line">
              <div className="line-dot"></div>
              <div className="line-dot"></div>
              <div className="line-dot"></div>
            </div>
          </h2>
          <p className="section-subtitle">
            Modern tools & technologies I use to build scalable applications
          </p>
        </div>

        {/* Skills Categories */}
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skill-category-card"
              style={{ '--category-color': category.color }}
              ref={el => skillCardsRef.current[categoryIndex] = el}
            >
              {/* Category Header */}
              <div className="category-header">
                <div className="category-dot" style={{ background: category.color }}></div>
                <h3 className="category-title">{category.title}</h3>
                <div className="category-line" style={{ background: category.color }}></div>
              </div>

              {/* Skills List */}
              <div className="category-skills">
                {category.skills.map((skill, skillIndex) => {
                  const globalIndex = categoryIndex * category.skills.length + skillIndex;
                  return (
                    <div key={skillIndex} className="skill-row">
                      {/* Icon Container */}
                      <div 
                        className="skill-icon-container"
                        style={{ '--skill-color': skill.color }}
                        ref={el => skillIconsRef.current[globalIndex] = el}
                      >
                        <div className="icon-glow" style={{ background: skill.color }}></div>
                        <div className="skill-icon">
                          <IconComponent iconName={skill.icon} />
                        </div>
                        <div className="icon-ring"></div>
                      </div>

                      {/* Skill Info */}
                      <div className="skill-info">
                        <div className="skill-header">
                          <h4 className="skill-name">{skill.name}</h4>
                          <span className="skill-percent" style={{ color: skill.color }}>
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="skill-progress-container">
                          <div className="progress-background">
                            <div 
                              ref={el => progressBarsRef.current[globalIndex] = el}
                              className="progress-fill"
                              data-level={skill.level}
                              style={{ 
                                '--progress-color': skill.color,
                                width: '0%'
                              }}
                            >
                              <div className="progress-sparkle"></div>
                            </div>
                          </div>
                          <div className="progress-dots">
                            {[...Array(10)].map((_, i) => (
                              <div 
                                key={i}
                                className="progress-dot"
                                style={{ 
                                  background: i * 10 < skill.level ? skill.color : '#e5e7eb'
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-card">
            <div className="summary-icon">
              <div className="gear-icon">
                <div className="gear-tooth"></div>
                <div className="gear-tooth"></div>
                <div className="gear-tooth"></div>
                <div className="gear-tooth"></div>
                <div className="gear-center"></div>
              </div>
            </div>
            <div className="summary-content">
              <h4>Technology Mastery</h4>
              <p>Proficient in modern web development stack with focus on performance, scalability, and clean architecture.</p>
              <div className="summary-stats">
                <div className="stat">
                  <div className="stat-value">95%</div>
                  <div className="stat-label">Frontend</div>
                </div>
                <div className="stat">
                  <div className="stat-value">88%</div>
                  <div className="stat-label">Backend</div>
                </div>
                <div className="stat">
                  <div className="stat-value">90%</div>
                  <div className="stat-label">Tools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills {
          background: #0f172a;
          color: white;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        .background-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .floating-element {
          position: absolute;
          width: 60px;
          height: 60px;
          background: rgba(96, 165, 250, 0.05);
          border: 1px solid rgba(96, 165, 250, 0.1);
          border-radius: 50%;
          filter: blur(2px);
        }

        .connection-lines {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 0 100px;
          transform-origin: left center;
        }

        .connection-lines .line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.2), transparent);
          transform: scaleX(0);
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
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
        }

        .title-text {
          background: linear-gradient(45deg, #60a5fa, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
        }

        .title-line {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin: 20px auto;
          height: 4px;
          align-items: center;
        }

        .line-dot {
          width: 8px;
          height: 8px;
          background: #60a5fa;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .line-dot:nth-child(2) {
          animation-delay: 0.5s;
        }

        .line-dot:nth-child(3) {
          animation-delay: 1s;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .section-subtitle {
          color: #94a3b8;
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Skills Categories */
        .skills-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
          margin-bottom: 80px;
        }

        @media (max-width: 768px) {
          .skills-categories {
            grid-template-columns: 1fr;
          }
        }

        /* Skill Category Card */
        .skill-category-card {
          background: rgba(30, 41, 59, 0.6);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .skill-category-card:hover {
          transform: translateY(-10px);
          border-color: var(--category-color);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .skill-category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--category-color), transparent);
          opacity: 0.5;
        }

        /* Category Header */
        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .category-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .category-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: white;
          margin: 0;
          flex: 1;
        }

        .category-line {
          flex: 1;
          height: 2px;
          opacity: 0.3;
        }

        /* Skill Row */
        .skill-row {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 25px;
          padding-bottom: 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .skill-row:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        /* Skill Icon Container */
        .skill-icon-container {
          position: relative;
          width: 60px;
          height: 60px;
          flex-shrink: 0;
        }

        .icon-glow {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          opacity: 0.2;
          filter: blur(10px);
        }

        .skill-icon {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 0 5px var(--skill-color));
        }

        /* SVG Icon Styles */
        .skill-orb {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-orbit {
          fill: none;
          stroke: var(--skill-color);
          stroke-width: 2;
          opacity: 0.5;
        }

        .skill-core {
          fill: white;
        }

        .skill-hex {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-inner {
          fill: white;
        }

        .skill-cross {
          fill: none;
          stroke: white;
          stroke-width: 3;
        }

        .skill-disk, .skill-cylinder {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-connector {
          stroke: var(--skill-color);
          stroke-width: 2;
        }

        .skill-square {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-inner-square {
          fill: white;
        }

        .skill-dot {
          fill: white;
        }

        .skill-diamond {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-diagonal {
          stroke: white;
          stroke-width: 2;
        }

        .skill-shield {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-block {
          fill: white;
        }

        .skill-line {
          stroke: var(--skill-color);
          stroke-width: 2;
        }

        .skill-container {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-box {
          fill: white;
        }

        .skill-cloud {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-inner-cloud {
          fill: white;
        }

        .skill-arrow {
          fill: white;
        }

        .skill-branch {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-merge {
          fill: none;
          stroke: white;
          stroke-width: 2;
        }

        .skill-commit {
          fill: white;
        }

        .skill-api {
          fill: var(--skill-color);
          opacity: 0.8;
        }

        .skill-route {
          stroke: white;
          stroke-width: 2;
        }

        .skill-endpoint {
          fill: white;
        }

        .icon-ring {
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border: 2px solid var(--skill-color);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .skill-row:hover .icon-ring {
          opacity: 0.3;
        }

        /* Skill Info */
        .skill-info {
          flex: 1;
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .skill-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          margin: 0;
        }

        .skill-percent {
          font-size: 1.2rem;
          font-weight: 700;
        }

        /* Progress Bar */
        .skill-progress-container {
          margin-top: 10px;
        }

        .progress-background {
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, 
            var(--progress-color), 
            color-mix(in srgb, var(--progress-color), white 30%)
          );
          border-radius: 3px;
          position: relative;
          box-shadow: 0 0 10px var(--progress-color);
        }

        .progress-sparkle {
          position: absolute;
          top: 0;
          right: 0;
          width: 15px;
          height: 100%;
          background: linear-gradient(90deg, transparent, white, transparent);
          animation: sparkleMove 1.5s infinite;
        }

        @keyframes sparkleMove {
          0% { transform: translateX(-20px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(0); opacity: 0; }
        }

        .progress-dots {
          display: flex;
          gap: 3px;
          justify-content: space-between;
        }

        .progress-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        /* Skills Summary */
        .skills-summary {
          margin-top: 60px;
        }

        .summary-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.4));
          border-radius: 20px;
          padding: 40px;
          display: flex;
          align-items: center;
          gap: 40px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .summary-icon {
          flex-shrink: 0;
        }

        .gear-icon {
          position: relative;
          width: 80px;
          height: 80px;
          animation: rotate 10s linear infinite;
        }

        .gear-tooth {
          position: absolute;
          width: 15px;
          height: 40px;
          background: #60a5fa;
          border-radius: 8px;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .gear-tooth:nth-child(2) { transform: translateX(-50%) rotate(90deg); }
        .gear-tooth:nth-child(3) { transform: translateX(-50%) rotate(180deg); }
        .gear-tooth:nth-child(4) { transform: translateX(-50%) rotate(270deg); }

        .gear-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: #3b82f6;
          border-radius: 50%;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .summary-content {
          flex: 1;
        }

        .summary-content h4 {
          font-size: 1.6rem;
          color: white;
          margin: 0 0 15px 0;
        }

        .summary-content p {
          color: #94a3b8;
          line-height: 1.6;
          margin: 0 0 25px 0;
          font-size: 1.1rem;
        }

        .summary-stats {
          display: flex;
          gap: 40px;
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          font-size: 2.2rem;
          font-weight: 800;
          color: #60a5fa;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #94a3b8;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .skills {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .summary-card {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }

          .summary-stats {
            justify-content: center;
          }

          .skill-row {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .skill-header {
            flex-direction: column;
            gap: 5px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }

          .skills-categories {
            gap: 30px;
          }

          .skill-category-card {
            padding: 20px;
          }

          .summary-stats {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;