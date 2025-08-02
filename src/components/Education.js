import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building, Calendar, MapPin, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'MSc in Computational Fluid Dynamics',
      institution: 'Cranfield University',
      location: 'Cranfield, UK',
      period: 'Sept 2023 - Nov 2024',
      gpa: '',
      thesis: 'Evaluation of turbulence modelling strategies for predicting wind–wave interaction of atmospheric boundary layer flow based on experimental data\n',
      highlights: [
      ]
    },
    {
      degree: 'M.Tech in Computational Fluid Dynamics',
      institution: 'Manipal Institute of Technology',
      location: 'Manipal, India',
      period: 'Sept 2022 - Nov 2024 ',
      gpa: '',
      thesis: 'N/A',
      highlights: [
      ]
    },
    {
      degree: 'Bachelors in Civil Engineering',
      institution: 'B.M.S College of Engineering',
      location: 'Bengaluru, India',
      period: '2016 - 2020 ',
      gpa: '8.56/10 (CGPA)',
      thesis: 'N/A',
      highlights: [
      ]
    }
  ];

  const workExperience = [
    {
      position: 'Senior Engineer',
      company: 'Tata Consulting Engineers Limited',
      location: 'Vadodara, India',
      period: 'April 2022 - August 2023 ',
      description: 'Gained substantial experience in project management and consultancy, collaborating with multidisciplinary teams to deliver high-profile infrastructure projects. ',
      achievements: [
        'Worked as technical consultant for the Vadodara Smart City Project, where I coordinated with stakeholders, managed project schedules, and ensured compliance with quality and safety standards.',
        'Developed detailed project reports and presentations for clients, aligning technical solutions with project objectives and stakeholder expectations.',
        'Led cross-functional collaboration between engineering teams, contractors, and government agencies to facilitate smooth project execution.',
        "Contributed to India's first high-speed bullet train project by supervising construction, performing structural analysis, and managing on-site challenges.",
        "Ensuring timely delivery of projects within budget, while maintaining a strong focus on quality and client satisfaction."
      ]
    }
  ];

  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            An overview of my academic background and professional journey that
            have shaped my skills and career path.
          </p>
        </motion.div>

        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Education</h3>
          <div className="education-timeline">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="education-card card">
                  <div className="education-header">
                    <div className="degree-info">
                      <h4>{edu.degree}</h4>
                      <div className="institution">
                        <GraduationCap size={16} />
                        <span>{edu.institution}</span>
                      </div>
                    </div>
                    <div className="education-meta">
                      <div className="meta-item">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                      {edu.gpa && (
                        <div className="meta-item">
                          <Award size={14} />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {edu.thesis !== "N/A" && (
                    <div className="thesis">
                      <strong>Thesis:</strong> {edu.thesis}
                    </div>
                  )}

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="highlights">
                      <h5>Key Highlights:</h5>
                      <ul>
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="experience-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Work Experience</h3>
          <div className="experience-timeline">
            {workExperience.map((exp, index) => (
              <motion.div
                key={index}
                className="experience-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="experience-card card">
                  <div className="experience-header">
                    <div className="position-info">
                      <h4>{exp.position}</h4>
                      <div className="company">
                        <Building size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="experience-meta">
                      <div className="meta-item">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="meta-item">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 