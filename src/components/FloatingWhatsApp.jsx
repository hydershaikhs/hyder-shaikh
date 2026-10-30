import React from 'react';
import { WhatsAppIcon } from './SocialIcons';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/923292061421"
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat on WhatsApp"
      title="Chat directly on WhatsApp"
    >
      <div className="floating-whatsapp-icon-wrap">
        <WhatsAppIcon size={28} />
      </div>
      <span className="floating-whatsapp-label">WhatsApp Me</span>
      <span className="floating-whatsapp-pulse"></span>
    </a>
  );
};

export default FloatingWhatsApp;
