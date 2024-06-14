import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';

export const DarkModeContext = createContext();



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <DarkModeContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <div className={isDarkMode ? 'dark' : ''}>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
