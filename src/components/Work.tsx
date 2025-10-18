import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaTimes } from 'react-icons/fa';
import { workExperience } from '../data/portfolio';
import './Work.css';

const Work: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <section id="work" className="work" ref={ref}>
      <div className="work-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Work Experience</h2>
          <p>My professional journey and key contributions</p>
        </motion.div>

        <div className="work-timeline">
          {workExperience.map((work, index) => (
            <motion.div
              key={work.id}
              className="work-card"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {work.current && <span className="badge current">CURRENT</span>}
              {!work.current && <span className="badge past">PAST</span>}
              
              <div className="work-icon">
                <FaBriefcase />
              </div>

              <h3>{work.role}</h3>
              <h4>{work.company}</h4>

              <div className="work-details">
                <div className="detail">
                  <FaCalendarAlt />
                  <span>{work.startDate} - {work.endDate}</span>
                </div>
                <div className="detail">
                  <FaMapMarkerAlt />
                  <span>{work.location}</span>
                </div>
              </div>

              <p className={`work-description ${expandedCard === work.id ? 'expanded' : 'truncated'}`}>
                {expandedCard === work.id ? work.description : truncateText(work.description)}
              </p>

              <button 
                className="view-details"
                onClick={() => toggleCard(work.id)}
              >
                {expandedCard === work.id ? (
                  <>Show Less <FaTimes /></>
                ) : (
                  <>View Details <FaArrowRight /></>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
