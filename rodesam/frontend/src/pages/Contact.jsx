import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('/api/contact', form)
      setStatus({ type: 'success', msg: res.data.message })
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: err.response?.data?.error || 'Something went wrong.' })
    }
    setLoading(false)
  }

  return (
    <div className="contact-page">
      <section className="page-header contact-header">
        <div className="page-header-bg">
          <div className="ph-shape ph-shape-1"></div>
          <div className="ph-shape ph-shape-2"></div>
        </div>
        <div className="container">
          <span className="section-tag">Reach Out</span>
          <h1 className="page-title">Get In <span>Touch</span></h1>
          <p className="page-desc">
            We're always ready to assist you with a smile. Contact us anytime — we respond within 24 hours.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Info Cards */}
            <div className="contact-info">
              <h2>Let's <span style={{color:'var(--primary)'}}>Connect</span></h2>
              <p className="contact-intro">
                We are available all the time to serve you with a smile, quality and on time. Don't hesitate to reach out — we're here for you.
              </p>

              <div className="contact-cards">
                <div className="contact-card">
                  <div className="cc-icon" style={{background:'rgba(0,180,216,0.12)', color:'var(--primary)'}}>📞</div>
                  <div>
                    <div className="cc-label">Phone / WhatsApp</div>
                    <div className="cc-value">
                      <a href="tel:+26669297700">+266 6929 7700</a>
                    </div>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="cc-icon" style={{background:'rgba(255,107,53,0.12)', color:'var(--secondary)'}}>✉️</div>
                  <div>
                    <div className="cc-label">Email Address</div>
                    <div className="cc-value">
                      <a href="mailto:rodesamcom@gmail.com">rodesamcom@gmail.com</a>
                    </div>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="cc-icon" style={{background:'rgba(46,196,182,0.12)', color:'var(--accent)'}}>📍</div>
                  <div>
                    <div className="cc-label">Physical Address</div>
                    <div className="cc-value">Ha Matala Phase 1, near Tribute Guest House, Lesotho</div>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="cc-icon" style={{background:'rgba(249,199,79,0.15)', color:'#c9a227'}}>🕐</div>
                  <div>
                    <div className="cc-label">Working Hours</div>
                    <div className="cc-value">Available 24/7 for urgent requests</div>
                  </div>
                </div>
              </div>

              <div className="service-areas">
                <h4>Service Coverage</h4>
                <div className="areas-list">
                  {['🇱🇸 Lesotho (Local)', '🇿🇦 South Africa', '🇧🇼 Botswana', '🇸🇿 Swaziland'].map((a, i) => (
                    <span key={i} className="area-chip">{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="contact-form-card">
                <div className="form-header">
                  <h3>Send Us a Message</h3>
                  <p>Fill out the form below and we'll get back to you shortly.</p>
                </div>

                {status && (
                  <div className={status.type === 'success' ? 'success-msg' : 'error-msg'}>
                    {status.type === 'success' ? '✅ ' : '❌ '}
                    {status.msg}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+266 XXXX XXXX"
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject *</label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      rows="5"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{width:'100%', justifyContent:'center'}} disabled={loading}>
                    {loading ? '⏳ Sending...' : '📨 Send Message →'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="map-section">
        <div className="map-placeholder">
          <div className="map-overlay">
            <div className="map-pin">📍</div>
            <h3>Ha Matala Phase 1</h3>
            <p>Near Tribute Guest House, Lesotho</p>
          </div>
          <div className="map-pattern"></div>
        </div>
      </section>
    </div>
  )
}
