import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const steps = 60;
    const increment = 100 / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Animated Brain/AI Icon */}
        <div className="ai-brain">
          <div className="brain-core">
            <div className="core-dot"></div>
            <div className="pulse-ring"></div>
            <div className="pulse-ring pulse-ring-2"></div>
          </div>
          
          {/* Neural Network Lines */}
          <svg className="neural-network" viewBox="0 0 200 200">
            {/* Nodes */}
            <circle cx="100" cy="100" r="8" className="node center-node" />
            <circle cx="50" cy="60" r="5" className="node" />
            <circle cx="150" cy="60" r="5" className="node" />
            <circle cx="50" cy="140" r="5" className="node" />
            <circle cx="150" cy="140" r="5" className="node" />
            <circle cx="30" cy="100" r="4" className="node" />
            <circle cx="170" cy="100" r="4" className="node" />
            
            {/* Connections */}
            <line x1="100" y1="100" x2="50" y2="60" className="connection" />
            <line x1="100" y1="100" x2="150" y2="60" className="connection" />
            <line x1="100" y1="100" x2="50" y2="140" className="connection" />
            <line x1="100" y1="100" x2="150" y2="140" className="connection" />
            <line x1="100" y1="100" x2="30" y2="100" className="connection" />
            <line x1="100" y1="100" x2="170" y2="100" className="connection" />
            
            {/* Animated particles */}
            <circle cx="75" cy="80" r="2" className="particle particle-1" />
            <circle cx="125" cy="80" r="2" className="particle particle-2" />
            <circle cx="75" cy="120" r="2" className="particle particle-3" />
            <circle cx="125" cy="120" r="2" className="particle particle-4" />
          </svg>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <h2>Loading</h2>
          <p>Mihiran Thilakarathna's Portfolio</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
