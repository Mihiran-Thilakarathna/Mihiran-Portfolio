import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { education, certifications } from '../data/portfolio';
import './Education.css';

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="education" ref={ref}>
      <div className="education-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Education & Certifications</h2>
          <p>My academic background and professional certifications</p>
        </motion.div>

        {/* Education */}
        <div className="education-section">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Education
          </motion.h3>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="education-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <span className={`status-badge ${edu.status.toLowerCase()}`}>
                  {edu.status}
                </span>
                
                <div className="edu-icon">
                  <FaGraduationCap />
                </div>

                <h4>{edu.institution}</h4>
                <p className="degree">{edu.degree}</p>
                <p className="duration">{edu.startDate} - {edu.endDate}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="certifications-section">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Certifications & Courses
          </motion.h3>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="certification-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="cert-icon">
                  <FaCertificate />
                </div>

                <h4>{cert.title}</h4>
                <p className="provider">{cert.provider}</p>
                <p className="date">{cert.date}</p>

                {cert.certificateUrl && (
                  <a 
                    href={cert.certificateUrl} 
                    className="view-certificate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate <FaExternalLinkAlt />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
