import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import './Resume.css';

const Resume = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CVHegdeShashank.pdf';
    link.download = 'CVHegdeShashank.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume section" id="resume">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            A comprehensive outline of my work experience, expertise, and key
            achievements.
          </p>
        </motion.div>

        <motion.div
          className="resume-overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="resume-card card">
            <div className="resume-header">
              <div className="resume-icon">
                <FileText size={48} />
              </div>
              <div className="resume-info">
                <h3>Shashank Hegde - Resume</h3>
              </div>
            </div>

            <div className="resume-actions">
              <button className="btn btn-primary" onClick={handleDownload}>
                <Download size={18} />
                Download Resume
              </button>
              <p className="resume-note">
                Click to download a comprehensive PDF version of my resume
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 