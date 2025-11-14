import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className="app" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Work />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ChatAssistant />
      </div>
    </ThemeProvider>
  );
}

export default App;
