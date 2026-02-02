import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaPaperPlane, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub,
  FaCheck,
  FaSpinner,
  FaExternalLinkAlt
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [particleCount, setParticleCount] = useState(15);

  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const detailItemsRef = useRef([]);
  const skillTagsRef = useRef([]);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setParticleCount(mobile ? 8 : 15);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const formDataObj = new URLSearchParams();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('subject', formData.subject);
      formDataObj.append('message', formData.message);
      
      formDataObj.append('_subject', `Portfolio Contact: ${formData.subject}`);
      formDataObj.append('_replyto', formData.email);
      formDataObj.append('_template', 'table');
      formDataObj.append('_captcha', 'false');
      formDataObj.append('_cc', 'thashreefkhan4@gmail.com');
      formDataObj.append('_next', window.location.origin + '/thank-you');

      const response = await fetch('https://formsubmit.co/ajax/thashreefkhan4@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        },
        body: formDataObj
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully! I\'ll respond within 24 hours.');
        
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus(null);
          setSubmitMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage(
        'Unable to send via form. Please email me directly at thashreefkhan4@gmail.com or try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.open(`mailto:thashreefkhan4@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const softSkills = [
    'Problem-Solving',
    'Team Collaboration',
    'Communication',
    'Adaptability',
    'Attention to Detail',
    'Time Management',
    'Critical Thinking'
  ];

  // GSAP Animations - Disable some animations on mobile for better performance
  useEffect(() => {
    if (isMobile) return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
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
      }

      if (infoRef.current) {
        gsap.from(infoRef.current.children, {
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          },
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          },
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3
        });
      }

      detailItemsRef.current.forEach((item, i) => {
        if (item) {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            x: -40,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "back.out(1.7)"
          });
        }
      });

      skillTagsRef.current.forEach((tag, i) => {
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
            delay: i * 0.08,
            ease: "elastic.out(1, 0.5)"
          });
        }
      });

      // Floating animation for contact info cards
      gsap.to('.detail-item', {
        y: -8,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3
      });

      // Continuous pulse animation for icons
      gsap.to('.detail-icon', {
        scale: 1.15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.4
      });

    }, contactRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      {/* Background particles */}
      <div className="floating-particles">
        {[...Array(particleCount)].map((_, i) => (
          <div key={i} className="floating-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}></div>
        ))}
      </div>
      
      <div className="container">
        <h2 className="section-title" ref={titleRef}>
          <span className="title-text">Get In Touch</span>
          <div className="title-line"></div>
          <span className="title-sub">Let's Build Something Amazing</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info" ref={infoRef}>
            <div className="info-header">
              <div className="header-decoration">
                <div className="decoration-dot"></div>
                <div className="decoration-line"></div>
                <div className="decoration-dot"></div>
              </div>
              <h3>Let's Create Together!</h3>
              <div className="header-glow"></div>
            </div>
            
            <p className="info-description">
              I'm currently open to new opportunities and exciting projects. 
              Whether you have a question, want to collaborate, or just say hello, 
              I'll get back to you within 24 hours.
            </p>
            
            <div className="contact-details">
              <div className="detail-item" ref={el => detailItemsRef.current[0] = el}>
                <div className="detail-icon">
                  <FaEnvelope />
                  <div className="icon-pulse"></div>
                  <div className="icon-sparkle"></div>
                </div>
                <div className="detail-content">
                  <h4>Email Address</h4>
                  <a href="mailto:thashreefkhan4@gmail.com" className="detail-link">
                    <span>thashreefkhan4@gmail.com</span>
                    <FaExternalLinkAlt className="link-indicator" />
                  </a>
                </div>
              </div>
              
              <div className="detail-item" ref={el => detailItemsRef.current[1] = el}>
                <div className="detail-icon">
                  <FaPhone />
                  <div className="icon-pulse"></div>
                  <div className="icon-sparkle"></div>
                </div>
                <div className="detail-content">
                  <h4>Phone Number</h4>
                  <a href="tel:+919345826343" className="detail-link">
                    <span>+91 93458 26343</span>
                    <FaExternalLinkAlt className="link-indicator" />
                  </a>
                </div>
              </div>
              
              <div className="detail-item" ref={el => detailItemsRef.current[2] = el}>
                <div className="detail-icon">
                  <FaMapMarkerAlt />
                  <div className="icon-pulse"></div>
                  <div className="icon-sparkle"></div>
                </div>
                <div className="detail-content">
                  <h4>Location</h4>
                  <p className="detail-text">
                    <span>Bangaluru, Karnataka</span>
                    <span className="location-flag">🇮🇳</span>
                  </p>
                </div>
              </div>
              
              <div className="social-contact">
                <a 
                  href="https://www.linkedin.com/in/thashreef-khan-248b86301/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <div className="social-icon-wrapper">
                    <FaLinkedin />
                  </div>
                  <span className="social-text">Connect on LinkedIn</span>
                  <div className="link-glow"></div>
                </a>
                <a 
                  href="https://github.com/thashree43" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link github"
                >
                  <div className="social-icon-wrapper">
                    <FaGithub />
                  </div>
                  <span className="social-text">View GitHub Profile</span>
                  <div className="link-glow"></div>
                </a>
              </div>
            </div>
            
            <div className="soft-skills">
              <div className="skills-header">
                <h4>Core Competencies</h4>
                <div className="skills-badge">7+ Skills</div>
              </div>
              <div className="skills-tags">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="skill-tag"
                    ref={el => skillTagsRef.current[index] = el}
                  >
                    {skill}
                    <div className="tag-glow"></div>
                    <div className="tag-sparkle"></div>
                  </span>
                ))}
              </div>
            </div>

            <div className="direct-email-option">
              <p className="direct-email-text">
                Prefer to email directly? 
                <button 
                  onClick={handleDirectEmail}
                  className="direct-email-btn"
                  disabled={!formData.message}
                >
                  Open Email Client
                  <FaExternalLinkAlt />
                </button>
              </p>
            </div>
          </div>
          
          <div className="contact-form-wrapper" ref={formRef}>
            <div className="form-header">
              <div className="form-badge">Quick Response</div>
              <h3>Send a Message</h3>
              <p className="form-subtitle">Fill out the form and I'll get back to you promptly</p>
              <div className="form-glow"></div>
            </div>
            
            <form 
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <span className="label-text">Full Name</span>
                    <span className="required-indicator">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="form-input"
                    />
                    <div className="input-focus-line"></div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">
                    <span className="label-text">Email Address</span>
                    <span className="required-indicator">*</span>
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="form-input"
                    />
                    <div className="input-focus-line"></div>
                  </div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">
                  <span className="label-text">Subject</span>
                    <span className="required-indicator">*</span>
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="form-input"
                  />
                  <div className="input-focus-line"></div>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <span className="label-text">Your Message</span>
                  <span className="required-indicator">*</span>
                </label>
                <div className="textarea-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Type your message here..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="form-textarea"
                    maxLength="1000"
                  ></textarea>
                  <div className="textarea-focus-border"></div>
                  <div className="character-count">
                    {formData.message.length}/1000
                  </div>
                </div>
              </div>
              
              {/* Status Message */}
              {submitMessage && (
                <div className={`status-message ${submitStatus}`}>
                  <div className="status-icon">
                    {submitStatus === 'success' ? <FaCheck /> : '!'}
                  </div>
                  <div className="status-content">
                    <strong>{submitStatus === 'success' ? 'Success!' : 'Oops!'}</strong>
                    <span>{submitMessage}</span>
                  </div>
                </div>
              )}
              
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="btn submit-btn primary-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="spinner" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                      {!isMobile && (
                        <>
                          <div className="btn-glow"></div>
                          <div className="btn-sparkles">
                            <div className="sparkle"></div>
                            <div className="sparkle"></div>
                            <div className="sparkle"></div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </button>
                
                <button 
                  type="button"
                  onClick={() => setFormData({ name: '', email: '', subject: '', message: '' })}
                  className="btn secondary-btn"
                  disabled={isSubmitting}
                >
                  Clear Form
                </button>
              </div>
              
              <div className="form-footer">
                <p className="privacy-notice">
                  <span className="lock-icon">🔒</span>
                  Your information is secure. I'll never share your details.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .contact {
          padding: 5rem 1rem;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          color: #1f2937;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          width: 100%;
          box-sizing: border-box;
        }
        
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 1;
        }
        
        .floating-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          animation: floatParticle 6s ease-in-out infinite;
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          box-sizing: border-box;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
          width: 100%;
        }
        
        .title-text {
          display: block;
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(45deg, #3b82f6, #0ea5e9, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
          word-wrap: break-word;
        }
        
        .title-sub {
          display: block;
          font-size: 0.9rem;
          color: #6b7280;
          font-weight: 400;
          margin-top: 0.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          word-wrap: break-word;
        }
        
        .title-line {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #3b82f6, #0ea5e9, transparent);
          margin: 1rem auto;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          max-width: 150px;
        }
        
        .title-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .contact-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          width: 100%;
          box-sizing: border-box;
        }
        
        /* Contact Info Styles */
        .contact-info {
          position: relative;
          width: 100%;
        }
        
        .info-header {
          position: relative;
          margin-bottom: 2rem;
        }
        
        .header-decoration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .decoration-dot {
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
        }
        
        .decoration-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, transparent);
        }
        
        .info-header h3 {
          font-size: 1.8rem;
          margin: 0;
          color: #1f2937;
          position: relative;
          z-index: 2;
          font-weight: 700;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }
        
        .header-glow {
          position: absolute;
          top: -1.5rem;
          left: -1.5rem;
          width: 10rem;
          height: 10rem;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
        }
        
        .info-description {
          font-size: 1rem;
          line-height: 1.6;
          color: #6b7280;
          margin-bottom: 2.5rem;
          background: rgba(59, 130, 246, 0.05);
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 3px solid #3b82f6;
          word-wrap: break-word;
        }
        
        .contact-details {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(209, 213, 219, 0.6);
          margin-bottom: 2rem;
          box-shadow: 
            0 2px 4px -1px rgba(0, 0, 0, 0.05),
            0 1px 2px -1px rgba(0, 0, 0, 0.03);
          width: 100%;
          box-sizing: border-box;
        }
        
        .detail-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          margin-bottom: 2rem;
          padding: 1.5rem;
          border-radius: 12px;
          background: rgba(59, 130, 246, 0.03);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          width: 100%;
          box-sizing: border-box;
        }
        
        .detail-item:hover {
          background: rgba(59, 130, 246, 0.08);
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.1);
        }
        
        .detail-item:last-child {
          margin-bottom: 0;
        }
        
        .detail-icon {
          width: 60px;
          height: 60px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 1.5rem;
          flex-shrink: 0;
          position: relative;
          border: 2px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.1);
        }
        
        .icon-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          background: rgba(59, 130, 246, 0.2);
          animation: pulse 3s infinite;
          z-index: 1;
        }
        
        .detail-content h4 {
          color: #3b82f6;
          font-size: 0.8rem;
          margin: 0 0 0.5rem 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }
        
        .detail-link,
        .detail-text {
          color: #1f2937;
          text-decoration: none;
          margin: 0;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          word-break: break-word;
          text-align: center;
        }
        
        .detail-link:hover {
          color: #3b82f6;
        }
        
        .link-indicator {
          font-size: 0.8rem;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .detail-link:hover .link-indicator {
          opacity: 1;
          transform: translateY(3px);
        }
        
        .location-flag {
          font-size: 1.2rem;
          margin-left: 0.5rem;
        }
        
        .social-contact {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(209, 213, 219, 0.5);
        }
        
        .social-link {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          background: white;
          color: #1f2937;
          text-decoration: none;
          border-radius: 12px;
          border: 1px solid rgba(209, 213, 219, 0.6);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          font-weight: 500;
          box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.05);
          width: 100%;
          box-sizing: border-box;
        }
        
        .social-icon-wrapper {
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-text {
          font-size: 0.9rem;
          text-align: center;
          word-break: break-word;
        }
        
        .social-link.linkedin:hover {
          background: rgba(10, 102, 194, 0.05);
          border-color: #0a66c2;
          transform: translateY(-5px);
        }
        
        .social-link.linkedin:hover .social-icon-wrapper {
          background: #0a66c2;
          color: white;
        }
        
        .social-link.github:hover {
          background: rgba(24, 23, 23, 0.05);
          border-color: #333;
          transform: translateY(-5px);
        }
        
        .social-link.github:hover .social-icon-wrapper {
          background: #333;
          color: white;
        }
        
        .soft-skills {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(209, 213, 219, 0.6);
          box-shadow: 
            0 2px 4px -1px rgba(0, 0, 0, 0.05),
            0 1px 2px -1px rgba(0, 0, 0, 0.03);
          margin-bottom: 1.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        
        .skills-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }
        
        .soft-skills h4 {
          color: #1f2937;
          margin: 0;
          font-size: 1.2rem;
          font-weight: 600;
        }
        
        .skills-badge {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          justify-content: center;
        }
        
        .skill-tag {
          padding: 0.6rem 1.2rem;
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1px solid rgba(59, 130, 246, 0.2);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: default;
          text-align: center;
          word-break: break-word;
          max-width: 100%;
        }
        
        .skill-tag:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-3px);
        }
        
        .direct-email-option {
          background: rgba(59, 130, 246, 0.05);
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px dashed rgba(59, 130, 246, 0.3);
          margin-top: 1.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        
        .direct-email-text {
          color: #6b7280;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          font-size: 0.9rem;
        }
        
        .direct-email-btn {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
          padding: 0.6rem 1.5rem;
          border-radius: 25px;
          font-size: 0.85rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .direct-email-btn:hover:not(:disabled) {
          background: rgba(59, 130, 246, 0.1);
        }
        
        .direct-email-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Contact Form Styles */
        .contact-form-wrapper {
          position: relative;
          width: 100%;
        }
        
        .form-header {
          position: relative;
          margin-bottom: 2rem;
          text-align: center;
        }
        
        .form-badge {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border: 1px solid rgba(59, 130, 246, 0.1);
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
        }
        
        .form-header h3 {
          font-size: 1.8rem;
          margin: 0 0 1rem 0;
          color: #1f2937;
          position: relative;
          z-index: 2;
          font-weight: 700;
          line-height: 1.2;
        }
        
        .form-subtitle {
          color: #6b7280;
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .contact-form {
          background: white;
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid rgba(209, 213, 219, 0.6);
          box-shadow: 
            0 2px 4px -1px rgba(0, 0, 0, 0.05),
            0 1px 2px -1px rgba(0, 0, 0, 0.03);
          position: relative;
          width: 100%;
          box-sizing: border-box;
        }
        
        .form-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
          width: 100%;
        }
        
        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          color: #3b82f6;
          font-weight: 600;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        .required-indicator {
          color: #ef4444;
          font-size: 1rem;
          line-height: 1;
        }
        
        .input-wrapper {
          position: relative;
          width: 100%;
        }
        
        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid rgba(209, 213, 219, 0.6);
          border-radius: 10px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: rgba(59, 130, 246, 0.03);
          color: #1f2937;
          font-family: inherit;
          box-sizing: border-box;
        }
        
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #9ca3af;
        }
        
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        .form-input:disabled,
        .form-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          background: #f3f4f6;
        }
        
        .textarea-wrapper {
          position: relative;
          width: 100%;
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.5;
          padding-right: 3.5rem;
        }
        
        .character-count {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          color: #6b7280;
          font-size: 0.8rem;
          font-weight: 500;
        }
        
        .status-message {
          padding: 1rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          text-align: center;
        }
        
        .status-message.success {
          background: rgba(34, 197, 94, 0.15);
          border-color: rgba(34, 197, 94, 0.3);
          color: #22c55e;
        }
        
        .status-message.error {
          background: rgba(239, 68, 68, 0.15);
          border-color: rgba(239, 68, 68, 0.3);
          color: #ef4444;
        }
        
        .status-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          font-weight: bold;
          flex-shrink: 0;
        }
        
        .status-content {
          flex: 1;
        }
        
        .status-content strong {
          display: block;
          font-size: 1rem;
          margin-bottom: 0.3rem;
        }
        
        .status-content span {
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .form-actions {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          padding: 1rem;
          font-size: 1rem;
          font-weight: 600;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border: none;
          color: white;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          min-height: 50px;
          width: 100%;
          box-sizing: border-box;
        }
        
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 
            0 10px 20px rgba(59, 130, 246, 0.3),
            0 0 30px rgba(59, 130, 246, 0.1);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        .secondary-btn {
          padding: 1rem;
          background: transparent;
          border: 1px solid rgba(209, 213, 219, 0.6);
          color: #6b7280;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }
        
        .secondary-btn:hover:not(:disabled) {
          background: rgba(59, 130, 246, 0.05);
          border-color: rgba(59, 130, 246, 0.3);
          color: #3b82f6;
        }
        
        .spinner {
          animation: spin 1s linear infinite;
        }
        
        .form-footer {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(209, 213, 219, 0.5);
          text-align: center;
        }
        
        .privacy-notice {
          color: #6b7280;
          font-size: 0.85rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          line-height: 1.4;
        }
        
        .lock-icon {
          font-size: 1rem;
        }
        
        /* Animations */
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes slideIn {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        /* Tablet Styles (768px and up) */
        @media (min-width: 768px) {
          .contact {
            padding: 6rem 2rem;
          }
          
          .title-text {
            font-size: 3rem;
          }
          
          .title-sub {
            font-size: 1rem;
          }
          
          .contact-content {
            gap: 4rem;
          }
          
          .info-header h3 {
            font-size: 2.2rem;
          }
          
          .info-description {
            font-size: 1.1rem;
            padding: 2rem;
          }
          
          .contact-details {
            padding: 2rem;
          }
          
          .detail-item {
            flex-direction: row;
            text-align: left;
            align-items: flex-start;
            padding: 1.5rem;
          }
          
          .detail-content h4 {
            margin-bottom: 0.3rem;
          }
          
          .detail-link,
          .detail-text {
            flex-direction: row;
            align-items: center;
            text-align: left;
          }
          
          .social-contact {
            flex-direction: row;
            gap: 1rem;
          }
          
          .social-link {
            flex-direction: row;
            padding: 1rem 1.5rem;
          }
          
          .social-text {
            font-size: 0.85rem;
          }
          
          .soft-skills {
            padding: 2rem;
          }
          
          .skills-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
          
          .skills-tags {
            justify-content: flex-start;
          }
          
          .skill-tag {
            padding: 0.5rem 1rem;
          }
          
          .direct-email-text {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: left;
          }
          
          .form-header h3 {
            font-size: 2.2rem;
          }
          
          .contact-form {
            padding: 2rem;
          }
          
          .form-row {
            flex-direction: row;
            gap: 1.5rem;
          }
          
          .form-group {
            flex: 1;
          }
          
          .form-actions {
            flex-direction: row;
            gap: 1rem;
          }
          
          .submit-btn,
          .secondary-btn {
            width: auto;
            flex: 1;
          }
          
          .privacy-notice {
            flex-direction: row;
            justify-content: center;
            gap: 0.8rem;
          }
        }
        
        /* Desktop Styles (1024px and up) */
        @media (min-width: 1024px) {
          .contact {
            padding: 8rem 2rem;
          }
          
          .title-text {
            font-size: 3.5rem;
          }
          
          .title-line {
            width: 150px;
          }
          
          .contact-content {
            flex-direction: row;
            gap: 6rem;
            align-items: flex-start;
          }
          
          .contact-info {
            flex: 1;
            max-width: 500px;
          }
          
          .contact-form-wrapper {
            flex: 1;
            max-width: 600px;
          }
          
          .detail-item:hover {
            transform: translateX(10px) scale(1.02);
          }
          
          .social-link:hover {
            transform: translateY(-5px) scale(1.02);
          }
          
          .skill-tag:hover {
            transform: translateY(-5px) scale(1.05);
          }
          
          .submit-btn:hover:not(:disabled) {
            transform: translateY(-5px);
          }
        }
        
        /* Large Desktop Styles (1200px and up) */
        @media (min-width: 1200px) {
          .contact {
            padding: 10rem 2rem;
          }
          
          .title-text {
            font-size: 4rem;
          }
          
          .title-sub {
            font-size: 1.2rem;
          }
          
          .info-header h3 {
            font-size: 2.8rem;
          }
          
          .info-description {
            font-size: 1.15rem;
            line-height: 1.8;
          }
          
          .form-header h3 {
            font-size: 2.5rem;
          }
          
          .form-input,
          .form-textarea {
            padding: 1.125rem 1.5rem;
          }
          
          .form-textarea {
            min-height: 150px;
          }
        }
        
        /* Small Mobile Devices (480px and below) */
        @media (max-width: 480px) {
          .contact {
            padding: 3rem 1rem;
          }
          
          .title-text {
            font-size: 2rem;
          }
          
          .title-sub {
            font-size: 0.8rem;
            letter-spacing: 1px;
          }
          
          .info-header h3 {
            font-size: 1.6rem;
          }
          
          .detail-icon {
            width: 50px;
            height: 50px;
            font-size: 1.2rem;
          }
          
          .skill-tag {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }
          
          .form-header h3 {
            font-size: 1.6rem;
          }
          
          .form-input,
          .form-textarea {
            padding: 0.875rem;
            font-size: 0.95rem;
          }
        }
        
        /* Landscape Mode */
        @media (max-height: 600px) and (orientation: landscape) {
          .contact {
            min-height: auto;
            padding: 4rem 1rem;
          }
          
          .title-text {
            font-size: 2rem;
          }
          
          .contact-content {
            gap: 2rem;
          }
          
          .form-textarea {
            min-height: 80px;
            rows: 2;
          }
        }
        
        /* High DPI Screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .floating-particle {
            width: 2px;
            height: 2px;
          }
          
          .detail-icon {
            border-width: 1.5px;
          }
        }
        
        /* Print Styles */
        @media print {
          .floating-particles,
          .header-glow,
          .form-glow,
          .btn-glow,
          .tag-glow,
          .link-glow,
          .icon-pulse,
          .icon-sparkle,
          .tag-sparkle,
          .btn-sparkles {
            display: none !important;
          }
          
          .contact {
            background: white !important;
            padding: 2rem 1rem !important;
          }
          
          .contact-details,
          .soft-skills,
          .contact-form {
            border: 1px solid #ddd !important;
            box-shadow: none !important;
            break-inside: avoid;
          }
          
          .detail-item:hover,
          .skill-tag:hover,
          .social-link:hover,
          .submit-btn:hover:not(:disabled) {
            transform: none !important;
            box-shadow: none !important;
          }
          
          .title-text {
            -webkit-text-fill-color: #3b82f6 !important;
            color: #3b82f6 !important;
          }
          
          .form-input,
          .form-textarea {
            background: white !important;
            border: 1px solid #ccc !important;
          }
          
          .submit-btn {
            background: #3b82f6 !important;
            color: white !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;