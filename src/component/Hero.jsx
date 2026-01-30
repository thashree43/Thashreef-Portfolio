import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const descriptionRef = useRef(null);
    const contactGridRef = useRef(null);
    const buttonsRef = useRef([]);
    const socialLinksRef = useRef([]);
    const profileCircleRef = useRef(null);
    const orbitRingsRef = useRef([]);
    const centralCircleRef = useRef(null);
    const initialsRef = useRef(null);
    const techBadgesRef = useRef([]);
    const floatingElementsRef = useRef([]);

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background animation
            gsap.fromTo(
                heroRef.current,
                { backgroundPosition: '0% 0%' },
                {
                    backgroundPosition: '100% 100%',
                    duration: 20,
                    repeat: -1,
                    yoyo: true,
                    ease: 'none'
                }
            );

            // Title animation with typing effect
            const titleText = "Hi, I'm Thashreef Khan";
            const titleChars = titleText.split('');
            const titleElements = titleRef.current.querySelectorAll('.title-char');
            
            gsap.from(titleElements, {
                duration: 0.8,
                y: 50,
                opacity: 0,
                stagger: 0.05,
                ease: 'back.out(1.7)',
                delay: 0.3
            });

            // Subtitle animation
            gsap.from(subtitleRef.current, {
                duration: 0.8,
                y: 30,
                opacity: 0,
                delay: 1,
                ease: 'power3.out'
            });

            // Description animation
            gsap.from(descriptionRef.current, {
                duration: 1,
                y: 40,
                opacity: 0,
                delay: 1.2,
                ease: 'power3.out'
            });

            // Contact grid animation
            gsap.from(contactGridRef.current.children, {
                duration: 0.6,
                x: -50,
                opacity: 0,
                stagger: 0.2,
                delay: 1.5,
                ease: 'power2.out'
            });

            // Buttons animation
            gsap.from(buttonsRef.current, {
                duration: 0.8,
                y: 30,
                opacity: 0,
                stagger: 0.15,
                delay: 1.8,
                ease: 'back.out(1.7)'
            });

            // Social links animation
            gsap.from(socialLinksRef.current, {
                duration: 0.6,
                scale: 0,
                opacity: 0,
                stagger: 0.2,
                delay: 2.2,
                ease: 'elastic.out(1, 0.5)'
            });

            // Profile circle entrance
            gsap.from(profileCircleRef.current, {
                duration: 1.2,
                scale: 0,
                rotation: 180,
                opacity: 0,
                delay: 0.5,
                ease: 'back.out(1.7)'
            });

            // Orbit rings animation
            orbitRingsRef.current.forEach((ring, i) => {
                if (ring) {
                    gsap.from(ring, {
                        duration: 1.5,
                        scale: 0,
                        opacity: 0,
                        delay: 0.8 + (i * 0.2),
                        ease: 'power3.out'
                    });
                }
            });

            // Central circle animation
            gsap.from(centralCircleRef.current, {
                duration: 1,
                scale: 0,
                opacity: 0,
                delay: 1.2,
                ease: 'elastic.out(1, 0.5)'
            });

            // Initials animation
            gsap.from(initialsRef.current, {
                duration: 0.8,
                scale: 0,
                opacity: 0,
                delay: 1.5,
                ease: 'back.out(1.7)'
            });

            // Tech badges staggered animation
            techBadgesRef.current.forEach((badge, i) => {
                if (badge) {
                    gsap.from(badge, {
                        duration: 0.6,
                        scale: 0,
                        opacity: 0,
                        rotation: 360,
                        delay: 1.8 + (i * 0.15),
                        ease: 'elastic.out(1, 0.5)'
                    });
                }
            });

            // Floating elements animation
            floatingElementsRef.current.forEach((element, i) => {
                if (element) {
                    gsap.to(element, {
                        y: -20,
                        duration: 2 + Math.random(),
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        delay: i * 0.5
                    });
                }
            });

            // Continuous animations
            gsap.to('.orbit-ring', {
                rotation: 360,
                duration: 40,
                repeat: -1,
                ease: 'none'
            });

            gsap.to('.tech-badge-wrapper', {
                y: -10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 0.5
            });

            // Button hover animations
            buttonsRef.current.forEach(button => {
                if (button) {
                    button.addEventListener('mouseenter', () => {
                        gsap.to(button, {
                            scale: 1.05,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });
                    button.addEventListener('mouseleave', () => {
                        gsap.to(button, {
                            scale: 1,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });
                }
            });

            // Social links hover animations
            socialLinksRef.current.forEach(link => {
                if (link) {
                    link.addEventListener('mouseenter', () => {
                        gsap.to(link, {
                            scale: 1.2,
                            rotation: 360,
                            duration: 0.5,
                            ease: 'power2.out'
                        });
                    });
                    link.addEventListener('mouseleave', () => {
                        gsap.to(link, {
                            scale: 1,
                            rotation: 0,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                    });
                }
            });

            // Tech badges hover animations
            techBadgesRef.current.forEach(badge => {
                if (badge) {
                    const wrapper = badge.closest('.tech-badge-wrapper');
                    badge.addEventListener('mouseenter', () => {
                        gsap.to(wrapper, {
                            scale: 1.2,
                            zIndex: 10,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                        gsap.to(badge.querySelector('.badge-glow'), {
                            opacity: 0.8,
                            duration: 0.3
                        });
                    });
                    badge.addEventListener('mouseleave', () => {
                        gsap.to(wrapper, {
                            scale: 1,
                            zIndex: 2,
                            duration: 0.3,
                            ease: 'power2.out'
                        });
                        gsap.to(badge.querySelector('.badge-glow'), {
                            opacity: 0.6,
                            duration: 0.3
                        });
                    });
                }
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Create floating elements
    useEffect(() => {
        const elements = [];
        for (let i = 0; i < 8; i++) {
            elements.push({
                id: i,
                size: Math.random() * 20 + 5,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 2
            });
        }
        floatingElementsRef.current = elements;
    }, []);

    const FloatingElement = ({ element, index }) => {
        return (
            <div 
                className={`floating-element floating-element-${index}`}
                style={{
                    left: `${element.x}%`,
                    top: `${element.y}%`,
                    width: `${element.size}px`,
                    height: `${element.size}px`,
                    animationDelay: `${element.delay}s`
                }}
                ref={el => floatingElementsRef.current[index] = el}
            />
        );
    };

    const titleText = "Hi, I'm Thashreef Khan";
    const titleChars = titleText.split('');

    const techBadges = [
        { name: 'React', class: 'react-badge', color: '#61dafb' },
        { name: 'JavaScript', class: 'js-badge', color: '#f7df1e' },
        { name: 'Node.js', class: 'node-badge', color: '#339933' },
        { name: 'MongoDB', class: 'mongo-badge', color: '#89cff0' },
        { name: 'TypeScript', class: 'ts-badge', color: '#3178c6' },
        { name: 'Redux', class: 'redux-badge', color: '#764abc' }
    ];

    return (
        <section id="home" className="hero" ref={heroRef}>
            {/* Floating Background Elements */}
            <div className="floating-background">
                {floatingElementsRef.current.map((element, index) => (
                    <FloatingElement key={element.id} element={element} index={index} />
                ))}
            </div>

            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title" ref={titleRef}>
                            {titleChars.map((char, index) => (
                                <span key={index} className="title-char">
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                            <span className="title-cursor"></span>
                        </h1>
                        
                        <h2 className="hero-subtitle fade-in" ref={subtitleRef}>
                            Full Stack Developer (Frontend & Backend)
                        </h2>
                        
                        <p className="hero-description fade-in" ref={descriptionRef}>
                            Building responsive, scalable, and high-performance web applications using Mongo DB,
                            Express.js, React.js and Node.js. Passionate about delivering high-quality,
                            user-friendly software solutions.
                        </p>

                        <div className="contact-info-grid fade-in" ref={contactGridRef}>
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>thashreefkhan4@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <FaPhone className="contact-icon" />
                                <span>9345826343</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>Bangaluru, Karnataka.</span>
                            </div>
                        </div>

                        <div className="hero-buttons fade-in">
                            <a 
                                href="#projects" 
                                className="btn"
                                ref={el => buttonsRef.current[0] = el}
                            >
                                View Projects
                            </a>
                            <a 
                                href="#contact" 
                                className="btn btn-outline"
                                ref={el => buttonsRef.current[1] = el}
                            >
                                Contact Me
                            </a>
                            <a 
                                href="./Thashreef_Khan.pdf" 
                                download 
                                className="btn btn-outline"
                                ref={el => buttonsRef.current[2] = el}
                            >
                                Download Resume
                            </a>
                        </div>

                        <div className="social-links fade-in">
                            <a 
                                href="https://github.com/thashree43" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="GitHub"
                                ref={el => socialLinksRef.current[0] = el}
                            >
                                <FaGithub />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/thashreef-khan-248b86301/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title="LinkedIn"
                                ref={el => socialLinksRef.current[1] = el}
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="profile-circle" ref={profileCircleRef}>
                            {/* Orbit rings */}
                            <div 
                                className="orbit-ring orbit-1"
                                ref={el => orbitRingsRef.current[0] = el}
                            ></div>
                            <div 
                                className="orbit-ring orbit-2"
                                ref={el => orbitRingsRef.current[1] = el}
                            ></div>
                            <div 
                                className="orbit-ring orbit-3"
                                ref={el => orbitRingsRef.current[2] = el}
                            ></div>
                            
                            {/* Central circle with initials */}
                            <div className="central-circle" ref={centralCircleRef}>
                                <div className="inner-glow"></div>
                                <span className="initials" ref={initialsRef}>TK</span>
                                <div className="center-pulse"></div>
                            </div>
                            
                            {/* Tech badges with new design */}
                            <div className="tech-badge-container">
                                {techBadges.map((badge, index) => (
                                    <div 
                                        key={index} 
                                        className={`tech-badge-wrapper ${badge.class}`}
                                    >
                                        <div 
                                            className={`tech-badge ${badge.name.toLowerCase()}`}
                                            ref={el => techBadgesRef.current[index] = el}
                                        >
                                            <span className="badge-text">{badge.name}</span>
                                            <div className="badge-glow"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .hero {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    padding-top: 80px;
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
                    background-size: 400% 400%;
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .floating-background {
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
                    background: rgba(96, 165, 250, 0.1);
                    border: 1px solid rgba(96, 165, 250, 0.2);
                    border-radius: 50%;
                    filter: blur(1px);
                    opacity: 0.3;
                    animation: float 6s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }

                .container {
                    position: relative;
                    z-index: 2;
                }
                
                .hero-content {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: center;
                }
                
                .hero-title {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                    position: relative;
                    display: inline-block;
                }

                .title-char {
                    display: inline-block;
                    opacity: 1;
                    color: white;
                }

                .title-char:nth-child(7),
                .title-char:nth-child(8),
                .title-char:nth-child(9) {
                    color: #60a5fa;
                    background: linear-gradient(90deg, #60a5fa, #3b82f6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .title-cursor {
                    display: inline-block;
                    width: 3px;
                    height: 3.5rem;
                    background: #60a5fa;
                    margin-left: 5px;
                    animation: blink 1s infinite;
                    vertical-align: bottom;
                }

                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                .hero-subtitle {
                    font-size: 1.5rem;
                    color: #cbd5e1;
                    margin-bottom: 1.5rem;
                    font-weight: 400;
                }
                
                .hero-description {
                    font-size: 1.1rem;
                    margin-bottom: 2rem;
                    max-width: 500px;
                    color: #94a3b8;
                }
                
                .contact-info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                    margin-bottom: 2rem;
                    background: rgba(30, 41, 59, 0.5);
                    padding: 1.5rem;
                    border-radius: 10px;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }
                
                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: #cbd5e1;
                }
                
                .contact-icon {
                    color: #60a5fa;
                    font-size: 1.2rem;
                    transition: transform 0.3s ease;
                }

                .contact-item:hover .contact-icon {
                    transform: scale(1.2);
                }
                
                .hero-buttons {
                    display: flex;
                    gap: 1rem;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                }
                
                .btn {
                    padding: 12px 30px;
                    background: linear-gradient(45deg, #3b82f6, #1d4ed8);
                    color: white;
                    text-decoration: none;
                    border-radius: 8px;
                    font-weight: 600;
                    font-size: 1rem;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }

                .btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
                }

                .btn::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.6s ease;
                }

                .btn:hover::before {
                    left: 100%;
                }

                .btn-outline {
                    background: transparent;
                    border: 2px solid #3b82f6;
                    color: #3b82f6;
                }

                .btn-outline:hover {
                    background: #3b82f6;
                    color: white;
                }
                
                .social-links {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .social-links a {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    color: white;
                    font-size: 1.5rem;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                    overflow: hidden;
                }

                .social-links a::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.6s ease;
                }

                .social-links a:hover::before {
                    left: 100%;
                }
                
                .social-links a:hover {
                    background: #3b82f6;
                    box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
                }
                
                /* Profile Circle - New Design */
                .profile-circle {
                    width: 500px;
                    height: 500px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto;
                }
                
                /* Orbit Rings */
                .orbit-ring {
                    position: absolute;
                    border-radius: 50%;
                    border: 1px dashed rgba(96, 165, 250, 0.15);
                }
                
                .orbit-1 {
                    width: 380px;
                    height: 380px;
                }
                
                .orbit-2 {
                    width: 440px;
                    height: 440px;
                }
                
                .orbit-3 {
                    width: 500px;
                    height: 500px;
                    border-color: rgba(59, 130, 246, 0.1);
                }
                
                /* Central Circle */
                .central-circle {
                    width: 250px;
                    height: 250px;
                    background: linear-gradient(145deg, #1e293b, #0f172a);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    z-index: 2;
                    box-shadow: 
                        inset 0 5px 15px rgba(0, 0, 0, 0.3),
                        0 20px 40px rgba(0, 0, 0, 0.4);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                
                .inner-glow {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background: radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.2), transparent 70%);
                    animation: glowPulse 4s ease-in-out infinite;
                }
                
                .center-pulse {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    border: 2px solid rgba(96, 165, 250, 0.1);
                    animation: pulse 3s ease-in-out infinite;
                }
                
                .initials {
                    font-size: 4rem;
                    font-weight: 700;
                    background: linear-gradient(45deg, #60a5fa, #3b82f6);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    text-shadow: 0 0 30px rgba(96, 165, 250, 0.3);
                    position: relative;
                    z-index: 3;
                }
                
                @keyframes glowPulse {
                    0%, 100% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }
                
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.3);
                        opacity: 0;
                    }
                }
                
                /* Tech Badges - New Design */
                .tech-badge-container {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
                
                .tech-badge-wrapper {
                    position: absolute;
                    transform-origin: center;
                }
                
                /* Badge positions in circular orbit */
                .react-badge { 
                    top: 15%; 
                    left: 50%; 
                    transform: translateX(-50%);
                }
                .js-badge { 
                    top: 25%; 
                    right: 20%; 
                }
                .node-badge { 
                    top: 50%; 
                    right: 10%; 
                }
                .mongo-badge { 
                    bottom: 25%; 
                    right: 20%; 
                }
                .ts-badge { 
                    bottom: 15%; 
                    left: 50%; 
                    transform: translateX(-50%);
                }
                .redux-badge { 
                    bottom: 25%; 
                    left: 20%; 
                }
                
                .tech-badge {
                    padding: 12px 24px;
                    border-radius: 20px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    position: relative;
                    z-index: 2;
                    transform-style: preserve-3d;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    cursor: pointer;
                    overflow: hidden;
                }
                
                .badge-text {
                    position: relative;
                    z-index: 2;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    letter-spacing: 0.5px;
                }
                
                .badge-glow {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 20px;
                    z-index: 1;
                    opacity: 0.6;
                    filter: blur(15px);
                    transition: all 0.3s ease;
                }
                
                /* Individual badge styles with glow effects */
                .tech-badge.react {
                    background: rgba(97, 218, 251, 0.15);
                    color: #61dafb;
                    box-shadow: 
                        0 5px 15px rgba(97, 218, 251, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
                .tech-badge.react .badge-glow {
                    background: linear-gradient(45deg, #61dafb, transparent);
                }
                
                .tech-badge.javascript {
                    background: rgba(247, 223, 30, 0.15);
                    color: #f7df1e;
                    box-shadow: 
                        0 5px 15px rgba(247, 223, 30, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
                .tech-badge.javascript .badge-glow {
                    background: linear-gradient(45deg, #f7df1e, transparent);
                }
                
                .tech-badge.node {
                    background: rgba(51, 153, 51, 0.15);
                    color: #339933;
                    box-shadow: 
                        0 5px 15px rgba(51, 153, 51, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
                .tech-badge.node .badge-glow {
                    background: linear-gradient(45deg, #339933, transparent);
                }
                
                .tech-badge.mongodb {
                    background: rgba(51, 103, 145, 0.15);
                    color: #89cff0;
                    box-shadow: 
                        0 5px 15px rgba(51, 103, 145, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
                .tech-badge.mongodb .badge-glow {
                    background: linear-gradient(45deg, #336791, transparent);
                }
                
                .tech-badge.typescript {
                    background: rgba(49, 120, 198, 0.15);
                    color: #3178c6;
                    box-shadow: 
                        0 5px 15px rgba(49, 120, 198, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
                .tech-badge.typescript .badge-glow {
                    background: linear-gradient(45deg, #3178c6, transparent);
                }
                
                .tech-badge.redux {
                    background: rgba(118, 74, 188, 0.15);
                    color: #764abc;
                    box-shadow: 
                        0 5px 15px rgba(118, 74, 188, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }
                .tech-badge.redux .badge-glow {
                    background: linear-gradient(45deg, #764abc, transparent);
                }
                
                /* Responsive Design */
                @media (max-width: 1200px) {
                    .profile-circle {
                        width: 450px;
                        height: 450px;
                    }
                    
                    .central-circle {
                        width: 220px;
                        height: 220px;
                    }
                    
                    .initials {
                        font-size: 3.5rem;
                    }
                }
                
                @media (max-width: 992px) {
                    .hero-content {
                        grid-template-columns: 1fr;
                        text-align: center;
                        gap: 3rem;
                    }
                    
                    .hero-title {
                        font-size: 2.5rem;
                    }
                    
                    .hero-buttons {
                        justify-content: center;
                    }
                    
                    .social-links {
                        justify-content: center;
                    }
                    
                    .hero-description {
                        margin: 0 auto 2rem;
                    }
                    
                    .profile-circle {
                        width: 400px;
                        height: 400px;
                        margin: 2rem auto;
                    }
                    
                    .central-circle {
                        width: 200px;
                        height: 200px;
                    }
                    
                    .initials {
                        font-size: 3rem;
                    }
                    
                    .tech-badge {
                        padding: 10px 20px;
                        font-size: 0.9rem;
                    }
                    
                    .orbit-1 {
                        width: 320px;
                        height: 320px;
                    }
                    
                    .orbit-2 {
                        width: 370px;
                        height: 370px;
                    }
                    
                    .orbit-3 {
                        width: 420px;
                        height: 420px;
                    }
                }
                
                @media (max-width: 768px) {
                    .profile-circle {
                        width: 350px;
                        height: 350px;
                    }
                    
                    .central-circle {
                        width: 180px;
                        height: 180px;
                    }
                    
                    .initials {
                        font-size: 2.5rem;
                    }
                    
                    .tech-badge {
                        padding: 8px 16px;
                        font-size: 0.85rem;
                    }
                    
                    .orbit-1 {
                        width: 280px;
                        height: 280px;
                    }
                    
                    .orbit-2 {
                        width: 320px;
                        height: 320px;
                    }
                    
                    .orbit-3 {
                        width: 360px;
                        height: 360px;
                    }
                }
                
                @media (max-width: 576px) {
                    .hero {
                        padding-top: 60px;
                    }

                    .hero-title {
                        font-size: 2rem;
                    }
                    
                    .hero-subtitle {
                        font-size: 1.2rem;
                    }
                    
                    .hero-buttons {
                        flex-direction: column;
                        align-items: center;
                        gap: 0.75rem;
                    }
                    
                    .profile-circle {
                        width: 320px;
                        height: 320px;
                    }
                    
                    .central-circle {
                        width: 160px;
                        height: 160px;
                    }
                    
                    .initials {
                        font-size: 2.5rem;
                    }
                    
                    .tech-badge {
                        padding: 6px 14px;
                        font-size: 0.8rem;
                    }
                    
                    .orbit-1 {
                        width: 240px;
                        height: 240px;
                    }
                    
                    .orbit-2 {
                        width: 280px;
                        height: 280px;
                    }
                    
                    .orbit-3 {
                        width: 320px;
                        height: 320px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;