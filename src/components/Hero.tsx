import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import mihiranPhoto from '../assets/mihiran1.png';
import './Hero.css';

const Hero: React.FC = () => {
  const handleHireMeClick = React.useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            HELLO, I'M
          </motion.p>
          
          <motion.h1
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {personalInfo.name}
          </motion.h1>
          
          <div className="title">
            <TypeAnimation
              sequence={[
                ...personalInfo.tagline.flatMap(title => [title, 2000])
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <motion.p
            className="bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {personalInfo.bio}
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <button className="btn btn-primary">
              <FaDownload /> DOWNLOAD CV
            </button>
            <button className="btn btn-secondary" onClick={handleHireMeClick}>
              HIRE ME
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="image-container">
            <div className="rotating-border"></div>
            <div className="image-wrapper">
              <img
                src={mihiranPhoto}
                alt="Mihiran Thilakarathna"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <p>SCROLL DOWN</p>
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
