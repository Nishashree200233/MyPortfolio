import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Education from './components/Education';
import Contact from './components/Contact';
import './App.css';

// Separator component for horizontal lines
const Separator = () => (
  <div className="section-separator">
    <hr />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Separator />
          <Resume />
          <Separator />
          <Education />
          <Separator />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App; 