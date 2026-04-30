import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Services.css'

export default function Services() {
  const [services, setServices] = useState([])
  const [active, setActive] = useState(null)

  useEffect(() => {
    axios.get('/api/services')
      .then(res => { setServices(res.data); setActive(res.data[0]?.id || null) })
      .catch(() => {})
  }, [])

  const currentService = services.find(s => s.id === active) || services[0]

  const serviceImages = {
    1: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80',
    2: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80',
    3: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=700&q=80',
    4: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
  }

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-bg">
          <div className="ph-shape ph-shape-1"></div>
          <div className="ph-shape ph-shape-2"></div>
        </div>
        <div className="container">
          <span className="section-tag">What We Do</span>
          <h1 className="page-title">Our <span>Services</span></h1>
          <p className="page-desc">
            Comprehensive solutions for cleaning, transportation, clothing, and office supplies.
            Serving individuals, companies, and government across 4 countries.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Services</span>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="services-tabs-section">
        <div className="container">
          <div className="services-tabs">
            {services.map(s => (
              <button
                key={s.id}
                className={`tab-btn ${active === s.id ? 'active' : ''}`}
                onClick={() => setActive(s.id)}
                style={active === s.id ? {'--tab-color': s.color} : {}}
              >
                <span className="tab-icon">{s.icon}</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          {currentService && (
            <div className="service-detail">
              <div className="service-detail-img">
                <img src={serviceImages[currentService.id]} alt={currentService.title} />
                <div className="service-detail-overlay" style={{background: currentService.color}}>
                  <span>{currentService.icon}</span>
                </div>
              </div>
              <div className="service-detail-content">
                <div className="service-detail-badge" style={{background: currentService.color}}>
                  Service 0{currentService.id}
                </div>
                <h2 style={{color: currentService.color}}>{currentService.title}</h2>
                <p className="service-detail-desc">{currentService.description}</p>
                <div className="service-detail-features">
                  <h4>What's Included:</h4>
                  <div className="features-grid">
                    {currentService.features.map((f, i) => (
                      <div className="feature-chip" key={i} style={{'--chip-color': currentService.color}}>
                        <span className="feature-check" style={{color: currentService.color}}>✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="service-detail-cta">
                  <Link to="/get-quote" className="btn-primary">Request This Service →</Link>
                  <a href="tel:+26669297700" className="btn-secondary">Call Us Now</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service Cards Overview */}
      <section className="all-services">
        <div className="container">
          <div className="section-header" style={{textAlign:'center', marginBottom:'48px'}}>
            <span className="section-tag">Overview</span>
            <h2 className="section-title">All <span>Service Areas</span></h2>
          </div>
          <div className="all-services-grid">
            {services.map((s, i) => (
              <div
                key={s.id}
                className="service-overview-card"
                onClick={() => { setActive(s.id); window.scrollTo({top:400, behavior:'smooth'}) }}
                style={{'--card-color': s.color}}
              >
                <div className="soc-left">
                  <div className="soc-icon" style={{background: `${s.color}20`, color: s.color}}>
                    {s.icon}
                  </div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.features.length} services included</p>
                  </div>
                </div>
                <span className="soc-arrow" style={{color: s.color}}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <div className="section-header" style={{textAlign:'center', marginBottom:'56px'}}>
            <span className="section-tag">Why RODESAM</span>
            <h2 className="section-title">The <span>RODESAM</span> Difference</h2>
          </div>
          <div className="why-grid">
            {[
              { icon: '🏆', title: 'Proven Excellence', desc: 'Trusted by government, companies and individuals for years.' },
              { icon: '⚡', title: 'Fast Response', desc: 'We respond to requests promptly and deliver on time, always.' },
              { icon: '💎', title: 'Premium Quality', desc: 'We use only the best products and employ skilled professionals.' },
              { icon: '🌍', title: 'Regional Coverage', desc: 'Operating in Lesotho, South Africa, Botswana, and Swaziland.' },
              { icon: '🔧', title: 'Custom Solutions', desc: 'Every service is tailored to the specific needs of each client.' },
              { icon: '🤝', title: 'Long-term Relationships', desc: 'We build lasting partnerships through trust, honesty and results.' },
            ].map((w, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta-banner">
        <div className="container" style={{textAlign:'center'}}>
          <h2>Need a Custom Service Package?</h2>
          <p>We create tailored service solutions for your specific requirements.</p>
          <div style={{display:'flex', gap:'16px', justifyContent:'center', flexWrap:'wrap', marginTop:'32px'}}>
            <Link to="/get-quote" className="btn-orange">Request Custom Quote</Link>
            <Link to="/contact" className="btn-secondary">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
