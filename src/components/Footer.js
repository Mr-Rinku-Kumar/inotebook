import React from 'react';
import '../styles/Footer.css'; // Update the import path to reflect the new folder structure


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Rinku Kumar. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rinku-kumar-6a611a311" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* Add other social media links here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
