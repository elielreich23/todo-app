import React, { useState } from 'react';
import './style.scss';

const DarkMode = () => {
 const [isDarkMode, setIsDarkMode] = useState(false);

 const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
 };

 return (
    <div className={`dark-mode-container ${isDarkMode ? 'dark' : ''}`}>
      <div className="mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </div>
 );
};

export default DarkMode;