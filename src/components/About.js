import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, MapPin, Mail, Phone, Linkedin } from 'lucide-react';
import './About.css';

const About = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'Shashank Hegde' },
    { icon: <Award size={20} />, label: 'Title', value: 'Masters in Computational Fluid Dynamics' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Coventry, United Kingdom' },
    { icon: <Mail size={20} />, label: 'Email', value: 'shashankhegde1998@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+44 7514 436232' }
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, label: 'LinkedIn', url: 'https://www.linkedin.com/in/shashank-hegde27/' }
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better - my background, expertise, and professional
            journey
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Professional Overview</h3>
            <p>
              I am a Computational Fluid Dynamics (CFD) engineer with a dual
              master’s degree from Cranfield University, UK, and Manipal
              Institute of Technology, India. My research focuses on turbulence
              modelling, high-performance computing, and simulation-driven
              solutions for aerospace and energy systems.
            </p>
            <p>
              Currently, I work on advanced CFD applications, including
              turbulence modelling strategies for wind–wave interaction in
              atmospheric boundary layers—an area I explored during my master’s
              thesis at Cranfield with direct implications for offshore wind
              energy design. I have also developed preheating techniques for
              liquid hydrogen using heat exchanger simulations in support of
              zero-carbon aviation missions.
            </p>
            <p>
              Previously, I served as a Senior Engineer at Tata Consulting
              Engineers Ltd., where I contributed to key infrastructure projects
              such as the Vadodara Smart City and India’s first high-speed
              bullet train. These experiences laid the foundation for my
              transition into CFD. I am passionate about leveraging
              computational methods to solve complex engineering problems and
              contribute to sustainable innovations in aerospace and energy.
            </p>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="personal-info">
              <h3>Personal Information</h3>
              <div className="info-list">
                {personalInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <span className="info-icon">{info.icon}</span>
                    <div className="info-content">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-list">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 