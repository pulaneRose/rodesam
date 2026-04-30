import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="#03045E"/>
        </svg>
      </div>

      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">R</div>
                <div>
                  <div className="footer-logo-name">RODESAM</div>
                  <div className="footer-logo-sub">PTY LTD</div>
                </div>
              </div>
              <p className="footer-desc">
                Providing world-class cleaning, transportation, PPE clothing, and office supplies to individuals, companies and government ministries since day one.
              </p>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <span>📞</span>
                  <span>+266 6929 7700</span>
                </div>
                <div className="footer-contact-item">
                  <span>✉️</span>
                  <span>rodesamcom@gmail.com</span>
                </div>
                <div className="footer-contact-item">
                  <span>📍</span>
                  <span>Ha Matala Phase 1, near Tribute Guest House</span>
                </div>
              </div>
            </div>

            <div className="footer-col">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services">Cleaning Services</Link></li>
                <li><Link to="/services">Fire Services & PPE</Link></li>
                <li><Link to="/services">Transportation & Logistics</Link></li>
                <li><Link to="/services">Office Supplies</Link></li>
                <li><Link to="/services">Hotel Supplies</Link></li>
                <li><Link to="/services">Clothing & Uniforms</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/get-quote">Get a Quote</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Coverage Areas</h4>
              <ul>
                <li><span>🌍</span> Lesotho (Local)</li>
                <li><span>🇿🇦</span> South Africa</li>
                <li><span>🇧🇼</span> Botswana</li>
                <li><span>🇸🇿</span> Swaziland / Eswatini</li>
                <li><span>🌐</span> International (Coming Soon)</li>
              </ul>
              <div className="footer-badges">
                <div className="badge">✅ Registered Company</div>
                <div className="badge">⭐ Quality Assured</div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} RODESAM (PTY) LTD. All rights reserved.</p>
            <p className="footer-tagline">Making life stress-free — one service at a time.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
