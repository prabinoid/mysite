import React from 'react';
import { github, facebook, gmail } from '../assets';

const Contact = () => {
  return (
    <div
      className="contact-page"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f0f0f',
        flexDirection: 'row',
        gap: '40px',
      }}
    >
      <a
        href="https://facebook.com/prabinoid"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <img src={facebook} alt="Facebook" style={imgStyle} />
      </a>
      <a
        href="https://github.com/prabinoid"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <img src={github} alt="GitHub" style={imgStyle} />
      </a>
      <a href="mailto:prabinoid@gmail.com" style={iconStyle}>
        <img src={gmail} alt="Gmail" style={imgStyle} />
      </a>
    </div>
  );
};

const iconStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#1e1e1e',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
  transition: 'transform 0.2s ease, background-color 0.3s',
};

const imgStyle = {
  width: '40px',
  height: '40px',
};

export default Contact;