import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light text-center" style={{ position: 'sticky', bottom: 0, width: '100%' }}>
      <div className="container">
    <span className="text-muted">&copy; {new Date().getFullYear()} Your Company Name</span>
      </div>
    </footer>

  );
};

export default Footer;
