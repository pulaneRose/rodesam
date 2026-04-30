import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Home.css'

const stats = [
  { number: '500+', label: 'Happy Clients', icon: '😊' },
  { number: '10+', label: 'Years Experience', icon: '🏆' },
  { number: '4', label: 'Core Services', icon: '⚡' },
  { number: '4', label: 'Countries Served', icon: '🌍' },
]

const clients = [
  'Mark Lesotho', 'Goodwill Auto Services', 'Sunrise Trading',
  'Paulin Home Care', 'Sino Trucks', 'SJ Eclat & Sun JV',
  'Tau Tse Ntle', 'Global Guest House'
]

export default function Home() {
  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get('/api/services').then(res => setServices(res.data)).catch(() => {})
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
          <div className="hero-dots"></div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge animate-fadeInUp">
                <span className="badge-dot"></span>
                Serving Lesotho, SA, Botswana & Swaziland
              </div>
              <h1 className="hero-title animate-fadeInUp">
                Making Life<br/>
                <span className="hero-gradient">Stress-Free</span><br/>
                For You
              </h1>
              <p className="hero-desc animate-fadeInUp">
                RODESAM provides world-class cleaning, transportation, PPE clothing and office supplies to individuals, companies and government ministries. Quality. Reliability. Trust.
              </p>
              <div className="hero-cta animate-fadeInUp">
                <Link to="/get-quote" className="btn-orange">
                  Get Free Quote →
                </Link>
                <Link to="/services" className="btn-secondary" style={{color:'white', borderColor:'rgba(255,255,255,0.4)'}}>
                  Explore Services
                </Link>
              </div>
              <div className="hero-trust">
                <div className="trust-item">✅ Professional Team</div>
                <div className="trust-item">✅ On-time Delivery</div>
                <div className="trust-item">✅ Quality Guaranteed</div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card-main animate-float">
                <div className="hero-icon-grid">
                  <div className="hero-service-card" style={{background:'linear-gradient(135deg,#00B4D8,#0077B6)'}}>
                    <span>🧹</span>
                    <span>Cleaning</span>
                  </div>
                  <div className="hero-service-card" style={{background:'linear-gradient(135deg,#FF6B35,#e85d04)'}}>
                    <span>🔥</span>
                    <span>Fire & PPE</span>
                  </div>
                  <div className="hero-service-card" style={{background:'linear-gradient(135deg,#2EC4B6,#0cb4ad)'}}>
                    <span>🚗</span>
                    <span>Transport</span>
                  </div>
                  <div className="hero-service-card" style={{background:'linear-gradient(135deg,#F9C74F,#f4a261)'}}>
                    <span>📦</span>
                    <span>Supplies</span>
                  </div>
                </div>
                <div className="hero-card-badge">
                  <span>⭐</span> Trusted by 500+ clients
                </div>
              </div>
              <div className="hero-float-badge badge-1">
                <span>🏆</span>
                <div>
                  <div style={{fontWeight:700,fontSize:'0.9rem'}}>Top Rated</div>
                  <div style={{fontSize:'0.75rem',opacity:0.7}}>Service Provider</div>
                </div>
              </div>
              <div className="hero-float-badge badge-2">
                <span>⚡</span>
                <div>
                  <div style={{fontWeight:700,fontSize:'0.9rem'}}>24/7 Available</div>
                  <div style={{fontSize:'0.75rem',opacity:0.7}}>Always Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="hero-stats">
          <div className="container">
            <div className="stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-icon">{s.icon}</span>
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="about-strip">
        <div className="container">
          <div className="about-strip-inner">
            <div className="about-strip-text">
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">
                Your Trusted <span>Multi-Service</span> Partner
              </h2>
              <p className="section-desc">
                RODESAM provides services and products related to cleaning, transport, office supplies, hotel supplies, clothing and other equipment. Our knowledge, creativity, and customer-centric ideas help us to be reliable and trusted.
              </p>
              <div className="about-values">
                {[
                  { icon: '🎯', title: 'Market Driven', desc: 'We adapt to market needs and client demands' },
                  { icon: '🤝', title: 'Customer First', desc: 'Your satisfaction is our ultimate priority' },
                  { icon: '💎', title: 'Quality Assured', desc: 'High standards maintained in every project' },
                  { icon: '⏱️', title: 'On-time Delivery', desc: 'We never miss deadlines or commitments' },
                ].map((v, i) => (
                  <div className="value-item" key={i}>
                    <div className="value-icon">{v.icon}</div>
                    <div>
                      <div className="value-title">{v.title}</div>
                      <div className="value-desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">Learn More About Us →</Link>
            </div>
            <div className="about-strip-visual">
              <div className="about-img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80"
                  alt="Professional Team"
                  className="about-img"
                />
                <div className="about-img-badge">
                  <div className="badge-circle">96%</div>
                  <div>
                    <div style={{fontWeight:700}}>Client Satisfaction</div>
                    <div style={{fontSize:'0.8rem',opacity:0.7}}>Efficiency Rating</div>
                  </div>
                </div>
                <div className="about-img-badge2">
                  <span>🌍</span>
                  <span>4 Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Our Core <span>Services</span></h2>
            <p className="section-desc">
              From cleaning to transport, PPE clothing to office supplies — we cover all your business needs under one roof.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <div className="service-card" key={service.id} style={{'--card-color': service.color, '--delay': `${i * 0.1}s`}}>
                <div className="service-card-header" style={{background: service.color}}>
                  <span className="service-card-icon">{service.icon}</span>
                  <div className="service-card-num">0{service.id}</div>
                </div>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.slice(0, 4).map((f, j) => (
                      <li key={j}><span className="check" style={{color: service.color}}>✓</span> {f}</li>
                    ))}
                  </ul>
                  <Link to="/services" className="service-link" style={{color: service.color}}>
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="services-cta">
            <Link to="/services" className="btn-primary">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Clients</span>
            <h2 className="section-title">Trusted By <span>Industry Leaders</span></h2>
          </div>
          <div className="clients-scroll">
            <div className="clients-track">
              {[...clients, ...clients].map((c, i) => (
                <div className="client-chip" key={i}>
                  <span className="client-dot"></span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-bg">
          <div className="cta-shape"></div>
        </div>
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text">
              <h2>Ready to Work With Us?</h2>
              <p>Get a free, no-obligation quote for any of our services. We respond within 24 hours!</p>
            </div>
            <div className="cta-actions">
              <Link to="/get-quote" className="btn-orange">Get Free Quote</Link>
              <a href="tel:+26669297700" className="cta-phone">
                <span className="phone-icon">📞</span>
                <div>
                  <div style={{fontSize:'0.75rem',opacity:0.7}}>Call us now</div>
                  <div style={{fontWeight:700}}>+266 6929 7700</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
