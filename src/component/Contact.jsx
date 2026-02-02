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

  const contactRef = useRef(null);
  const titleRef = useRef(null);
  const infoRef = useRef(null);
  const formRef = useRef(null);
  const detailItemsRef = useRef([]);
  const skillTagsRef = useRef([]);

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
      // Create URLSearchParams instead of FormData for FormSubmit
      const formDataObj = new URLSearchParams();
      formDataObj.append('name', formData.name);
      formDataObj.append('email', formData.email);
      formDataObj.append('subject', formData.subject);
      formDataObj.append('message', formData.message);
      
      // FormSubmit configuration
      formDataObj.append('_subject', `Portfolio Contact: ${formData.subject}`);
      formDataObj.append('_replyto', formData.email);
      formDataObj.append('_template', 'table');
      formDataObj.append('_captcha', 'false');
      formDataObj.append('_cc', 'thashreefkhan4@gmail.com');
      formDataObj.append('_next', window.location.origin + '/thank-you');

      // Send to FormSubmit with proper headers
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
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Auto-clear success message after 5 seconds
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

  // Alternative direct email function
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

  // GSAP Animations
  useEffect(() => {
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

      // Background particles animation
      gsap.to('.floating-particle', {
        y: -20,
        x: 'random(-10, 10)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
      });

    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      {/* Background particles */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="floating-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`
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
                  <span>Connect on LinkedIn</span>
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
                  <span>View GitHub Profile</span>
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
                    rows="6"
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
                      <div className="btn-glow"></div>
                      <div className="btn-sparkles">
                        <div className="sparkle"></div>
                        <div className="sparkle"></div>
                        <div className="sparkle"></div>
                      </div>
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
          padding: 120px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          color: #1f2937;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
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
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          animation: floatParticle 6s ease-in-out infinite;
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
          z-index: 2;
        }
        
        .title-text {
          display: block;
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(45deg, #3b82f6, #0ea5e9, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }
        
        .title-sub {
          display: block;
          font-size: 1.2rem;
          color: #6b7280;
          font-weight: 400;
          margin-top: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        
        .title-line {
          width: 150px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #3b82f6, #0ea5e9, transparent);
          margin: 20px auto;
          border-radius: 2px;
          position: relative;
          overflow: hidden;
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
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Contact Info Styles */
        .contact-info {
          position: relative;
        }
        
        .info-header {
          position: relative;
          margin-bottom: 30px;
        }
        
        .header-decoration {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .decoration-dot {
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border-radius: 50%;
        }
        
        .decoration-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, transparent);
        }
        
        .info-header h3 {
          font-size: 2.8rem;
          margin: 0;
          color: #1f2937;
          position: relative;
          z-index: 2;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        
        .header-glow {
          position: absolute;
          top: -30px;
          left: -30px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          filter: blur(50px);
          z-index: 1;
        }
        
        .info-description {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #6b7280;
          margin-bottom: 50px;
          background: rgba(59, 130, 246, 0.05);
          padding: 25px;
          border-radius: 15px;
          border-left: 3px solid #3b82f6;
        }
        
        .contact-details {
          background: white;
          padding: 35px;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(209, 213, 219, 0.6);
          margin-bottom: 40px;
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
        
        .detail-item {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-bottom: 30px;
          padding: 20px;
          border-radius: 15px;
          background: rgba(59, 130, 246, 0.03);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .detail-item:hover {
          background: rgba(59, 130, 246, 0.08);
          transform: translateX(15px) scale(1.02);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.1);
        }
        
        .detail-item:last-child {
          margin-bottom: 0;
        }
        
        .detail-icon {
          width: 70px;
          height: 70px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 1.8rem;
          flex-shrink: 0;
          position: relative;
          border: 2px solid rgba(59, 130, 246, 0.2);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);
        }
        
        .icon-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          background: rgba(59, 130, 246, 0.2);
          animation: pulse 3s infinite;
          z-index: 1;
        }
        
        .icon-sparkle {
          position: absolute;
          width: 15px;
          height: 15px;
          background: #3b82f6;
          border-radius: 50%;
          top: -5px;
          right: -5px;
          animation: sparkle 2s infinite;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        
        .detail-content h4 {
          color: #3b82f6;
          font-size: 0.85rem;
          margin: 0 0 8px 0;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }
        
        .detail-link,
        .detail-text {
          color: #1f2937;
          text-decoration: none;
          margin: 0;
          font-size: 1.25rem;
          font-weight: 500;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .detail-link:hover {
          color: #3b82f6;
        }
        
        .link-indicator {
          font-size: 0.9rem;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .detail-link:hover .link-indicator {
          opacity: 1;
          transform: translateX(5px);
        }
        
        .location-flag {
          font-size: 1.5rem;
          margin-left: 10px;
          vertical-align: middle;
        }
        
        .social-contact {
          display: flex;
          gap: 20px;
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(209, 213, 219, 0.5);
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 18px 30px;
          background: white;
          color: #1f2937;
          text-decoration: none;
          border-radius: 15px;
          border: 1px solid rgba(209, 213, 219, 0.6);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          flex: 1;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-weight: 500;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        
        .social-icon-wrapper {
          width: 40px;
          height: 40px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          transition: all 0.3s ease;
        }
        
        .social-link .link-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.15), transparent);
          transition: left 0.7s ease;
        }
        
        .social-link:hover .link-glow {
          left: 100%;
        }
        
        .social-link.linkedin:hover {
          background: rgba(10, 102, 194, 0.05);
          border-color: #0a66c2;
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(10, 102, 194, 0.1);
        }
        
        .social-link.linkedin:hover .social-icon-wrapper {
          background: #0a66c2;
          color: white;
          transform: rotate(10deg);
        }
        
        .social-link.github:hover {
          background: rgba(24, 23, 23, 0.05);
          border-color: #333;
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .social-link.github:hover .social-icon-wrapper {
          background: #333;
          color: white;
          transform: rotate(10deg);
        }
        
        .soft-skills {
          background: white;
          padding: 35px;
          border-radius: 20px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(209, 213, 219, 0.6);
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 2px 4px -1px rgba(0, 0, 0, 0.03);
          margin-bottom: 30px;
        }
        
        .skills-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }
        
        .soft-skills h4 {
          color: #1f2937;
          margin: 0;
          font-size: 1.4rem;
          font-weight: 600;
        }
        
        .skills-badge {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
        
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }
        
        .skill-tag {
          padding: 12px 25px;
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: 500;
          border: 2px solid rgba(59, 130, 246, 0.2);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: default;
          backdrop-filter: blur(5px);
        }
        
        .skill-tag:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.4);
        }
        
        .tag-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tag-sparkle {
          position: absolute;
          width: 10px;
          height: 10px;
          background: #3b82f6;
          border-radius: 50%;
          top: 5px;
          right: 5px;
          opacity: 0;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
          transition: all 0.3s ease;
        }
        
        .skill-tag:hover .tag-glow {
          opacity: 0.1;
        }
        
        .skill-tag:hover .tag-sparkle {
          opacity: 1;
          animation: sparkle 1.5s infinite;
        }
        
        .direct-email-option {
          background: rgba(59, 130, 246, 0.05);
          padding: 20px;
          border-radius: 15px;
          border: 1px dashed rgba(59, 130, 246, 0.3);
          margin-top: 30px;
        }
        
        .direct-email-text {
          color: #6b7280;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 15px;
          justify-content: center;
        }
        
        .direct-email-btn {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        
        .direct-email-btn:hover:not(:disabled) {
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-2px);
        }
        
        .direct-email-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Contact Form Styles */
        .contact-form-wrapper {
          position: relative;
        }
        
        .form-header {
          position: relative;
          margin-bottom: 40px;
          text-align: center;
        }
        
        .form-badge {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
          border: 2px solid rgba(59, 130, 246, 0.1);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
        }
        
        .form-header h3 {
          font-size: 2.5rem;
          margin: 0 0 15px 0;
          color: #1f2937;
          position: relative;
          z-index: 2;
          font-weight: 700;
        }
        
        .form-subtitle {
          color: #6b7280;
          margin: 0;
          font-size: 1.1rem;
        }
        
        .form-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          filter: blur(60px);
          z-index: 1;
        }
        
        .contact-form {
          background: white;
          padding: 45px;
          border-radius: 25px;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(209, 213, 219, 0.6);
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 2px 4px -1px rgba(0, 0, 0, 0.03);
          position: relative;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-bottom: 25px;
        }
        
        .form-group {
          margin-bottom: 30px;
          position: relative;
        }
        
        .form-group label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #3b82f6;
          font-weight: 600;
          margin-bottom: 12px;
          font-size: 0.95rem;
        }
        
        .required-indicator {
          color: #ef4444;
          font-size: 1.3rem;
          line-height: 1;
        }
        
        .input-wrapper {
          position: relative;
        }
        
        .form-input,
        .form-textarea {
          width: 100%;
          padding: 18px 25px;
          border: 2px solid rgba(209, 213, 219, 0.6);
          border-radius: 12px;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          background: rgba(59, 130, 246, 0.03);
          color: #1f2937;
          font-family: inherit;
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
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
        
        .input-focus-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #0ea5e9);
          transition: width 0.3s ease;
        }
        
        .form-input:focus ~ .input-focus-line {
          width: 100%;
        }
        
        .form-input:disabled,
        .form-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          background: #f3f4f6;
        }
        
        .textarea-wrapper {
          position: relative;
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 180px;
          line-height: 1.6;
          padding-right: 60px;
        }
        
        .textarea-focus-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 12px;
          pointer-events: none;
          border: 2px solid transparent;
          transition: all 0.3s ease;
        }
        
        .form-textarea:focus ~ .textarea-focus-border {
          border-color: #3b82f6;
        }
        
        .character-count {
          position: absolute;
          bottom: 15px;
          right: 15px;
          color: #6b7280;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .status-message {
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          backdrop-filter: blur(10px);
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
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          flex-shrink: 0;
        }
        
        .status-content {
          flex: 1;
        }
        
        .status-content strong {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 5px;
        }
        
        .form-actions {
          display: flex;
          gap: 20px;
          margin-top: 40px;
        }
        
        .submit-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 22px;
          font-size: 1.15rem;
          font-weight: 600;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border: none;
          color: white;
          border-radius: 15px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          min-height: 60px;
        }
        
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 40px rgba(59, 130, 246, 0.4),
            0 0 50px rgba(59, 130, 246, 0.2);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }
        
        .btn-glow {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.8s ease;
        }
        
        .submit-btn:hover:not(:disabled) .btn-glow {
          left: 100%;
        }
        
        .btn-sparkles {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        
        .sparkle {
          position: absolute;
          width: 5px;
          height: 5px;
          background: white;
          border-radius: 50%;
          opacity: 0;
          box-shadow: 0 0 10px white;
        }
        
        .btn-sparkles .sparkle:nth-child(1) {
          top: 20%;
          left: 20%;
          animation: sparkleFly 1.5s infinite 0.5s;
        }
        
        .btn-sparkles .sparkle:nth-child(2) {
          top: 60%;
          left: 50%;
          animation: sparkleFly 1.5s infinite 1s;
        }
        
        .btn-sparkles .sparkle:nth-child(3) {
          top: 30%;
          left: 80%;
          animation: sparkleFly 1.5s infinite 1.5s;
        }
        
        @keyframes sparkleFly {
          0% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scale(0);
          }
        }
        
        .secondary-btn {
          padding: 22px 40px;
          background: transparent;
          border: 2px solid rgba(209, 213, 219, 0.6);
          color: #6b7280;
          border-radius: 15px;
          font-size: 1.15rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
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
          margin-top: 30px;
          padding-top: 25px;
          border-top: 1px solid rgba(209, 213, 219, 0.5);
          text-align: center;
        }
        
        .privacy-notice {
          color: #6b7280;
          font-size: 0.9rem;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        
        .lock-icon {
          font-size: 1.2rem;
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
            transform: translateY(-20px);
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
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .contact-content {
            gap: 60px;
          }
          
          .title-text {
            font-size: 3.5rem;
          }
        }
        
        @media (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 70px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
          
          .title-text {
            font-size: 3rem;
          }
          
          .info-header h3 {
            font-size: 2.4rem;
          }
          
          .form-header h3 {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact {
            padding: 80px 0;
          }
          
          .title-text {
            font-size: 2.5rem;
          }
          
          .contact-details,
          .soft-skills,
          .contact-form {
            padding: 30px;
          }
          
          .info-header h3 {
            font-size: 2rem;
          }
          
          .form-header h3 {
            font-size: 2rem;
          }
          
          .social-contact {
            flex-direction: column;
          }
          
          .form-actions {
            flex-direction: column;
          }
          
          .secondary-btn {
            width: 100%;
          }
        }
        
        @media (max-width: 576px) {
          .contact {
            padding: 60px 0;
          }
          
          .title-text {
            font-size: 2rem;
          }
          
          .title-sub {
            font-size: 1rem;
          }
          
          .contact-content {
            gap: 50px;
          }
          
          .contact-details,
          .soft-skills,
          .contact-form {
            padding: 25px;
          }
          
          .detail-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
          
          .detail-link,
          .detail-text {
            font-size: 1.1rem;
          }
          
          .form-input,
          .form-textarea {
            padding: 15px 20px;
          }
          
          .direct-email-text {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }
        }
        
        @media (max-width: 400px) {
          .skills-tags {
            justify-content: center;
          }
          
          .skill-tag {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;