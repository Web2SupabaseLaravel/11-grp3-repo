import React from "react";

export const Footer = () => (
  <footer className="footer">
    <div className="footer-hero">
      <p className="footer-hero-title">We care whenever you need it</p>
      <div className="footer-hero-buttons">
        <button className="btn btn-light">Make an Appointment</button>
        <button className="btn btn-outline-light">Contact Us</button>
      </div>
      <img
        className="decor-left"
        alt="Decoration"
        src="https://c.animaapp.com/mbnr5pdsVsuJRZ/img/pattern-1.png"
      />
      <img
        className="decor-right"
        alt="Decoration"
        src="https://c.animaapp.com/mbnr5pdsVsuJRZ/img/pattern-1-1.png"
      />
    </div>

    <div className="footer-main">
      <div className="footer-contact-logo">
        <img
          className="footer-logo-icon"
          alt="Logo"
          src="https://c.animaapp.com/mbnr5pdsVsuJRZ/img/ellipse-64.svg"
        />
        <span className="footer-logo-text">Clinically</span>
        <div className="footer-contact">
          <div>Clinically@gmail.com</div>
          <div>(704) 555-0127</div>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <div className="footer-column-title">Clinically</div>
          <div className="footer-link">About Us</div>
          <div className="footer-link">Location</div>
          <div className="footer-link">Careers</div>
        </div>
        <div className="footer-column">
          <div className="footer-column-title">Resources</div>
          <div className="footer-link">FAQ</div>
          <div className="footer-link">Blog</div>
          <div className="footer-link">COVID-19</div>
        </div>
        <div className="footer-column">
          <div className="footer-column-title">Support</div>
          <div className="footer-link">FAQ</div>
          <div className="footer-link">Privacy Policy</div>
          <div className="footer-link">Term of Use</div>
        </div>
        <div className="footer-column">
          <div className="footer-column-title">Follow</div>
          <div className="footer-link">Facebook</div>
          <div className="footer-link">Instagram</div>
        </div>
      </div>
    </div>
    <div className="footer-copy">
      © 2021 Clinically, Inc. All rights reserved.
    </div>
  </footer>
);

export default Footer;
