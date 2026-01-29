import React, { useState } from 'react';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const softSkills = [
    'Problem-Solving',
    'Team Collaboration',
    'Communication',
    'Adaptability',
    'Attention to Detail'
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, I'll get back to you as soon as possible.
            </p>
            
            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <FaEnvelope />
                </div>
                <div className="detail-content">
                  <h4>Email</h4>
                  <a href="mailto:thashreefkhan4@gmail.com">thashreefkhan4@gmail.com</a>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <FaPhone />
                </div>
                <div className="detail-content">
                  <h4>Phone</h4>
                  <a href="tel:+919345826343">+91 93458 26343</a>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="detail-content">
                  <h4>Location</h4>
                  <p>Cherambadi, The Nilgiris, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="social-contact">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
            
            <div className="soft-skills">
              <h4>Soft Skills</h4>
              <div className="skills-tags">
                {softSkills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          color: white;
        }
        
        .contact .section-title {
          color: white;
        }
        
        .contact .section-title::after {
          background: #60a5fa;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }
        
        .contact-info p {
          color: #cbd5e1;
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .contact-details {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 2rem;
        }
        
        .detail-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .detail-item:last-child {
          margin-bottom: 0;
        }
        
        .detail-icon {
          width: 40px;
          height: 40px;
          background: rgba(96, 165, 250, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #60a5fa;
          font-size: 1.2rem;
          flex-shrink: 0;
        }
        
        .detail-content h4 {
          color: #94a3b8;
          font-size: 0.9rem;
          margin: 0 0 0.25rem 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .detail-content a,
        .detail-content p {
          color: white;
          text-decoration: none;
          margin: 0;
          font-size: 1.1rem;
        }
        
        .detail-content a:hover {
          color: #60a5fa;
        }
        
        .social-contact {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-contact a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(96, 165, 250, 0.1);
          color: #60a5fa;
          text-decoration: none;
          border-radius: 5px;
          border: 1px solid rgba(96, 165, 250, 0.3);
          transition: all 0.3s ease;
        }
        
        .social-contact a:hover {
          background: #60a5fa;
          color: #0f172a;
          border-color: #60a5fa;
        }
        
        .soft-skills {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .soft-skills h4 {
          color: white;
          margin: 0 0 1rem 0;
          font-size: 1.2rem;
        }
        
        .skills-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        
        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(96, 165, 250, 0.2);
          color: #60a5fa;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          border: 1px solid rgba(96, 165, 250, 0.3);
        }
        
        .contact-form {
          background: white;
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: block;
          color: #475569;
          font-weight: 500;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        
        input, textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #f8fafc;
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: white;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        
        textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem;
          font-size: 1.1rem;
          background: linear-gradient(45deg, #3b82f6, #1d4ed8);
          border: none;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }
        
        @media (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
        
        @media (max-width: 576px) {
          .contact-form {
            padding: 1.5rem;
          }
          
          .contact-details,
          .soft-skills {
            padding: 1.5rem;
          }
          
          .social-contact {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;