import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './GetQuote.css'

const services = [
  'Cleaning Services',
  'Post Construction Cleaning',
  'Carpet & Floor Cleaning',
  'Swimming Pool Cleaning',
  'Landscaping',
  'Fire Services & PPE',
  'School Uniforms',
  'Corporate & Office Wear',
  'Sports Wear',
  'Protective Clothing',
  'Car Rental (Short Term)',
  'Car Rental (Long Term)',
  'Cab Services',
  'Airport Delivery',
  'Tourist Delivery',
  'Parcel Delivery',
  'Office Supplies',
  'Cleaning Materials Supply',
  'Hotel Supplies',
  'Stationery Supply',
  'Custom / Other',
]

export default function GetQuote() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', service: '', description: ''
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('/api/quote', form)
      setStatus({ type: 'success', msg: res.data.message })
      setForm({ name: '', email: '', phone: '', company: '', service: '', description: '' })
    } catch (err) {
      setStatus({ type: 'error', msg: err.response?.data?.error || 'Something went wrong.' })
    }
    setLoading(false)
  }

  return (
    <div className="quote-page">
      <section className="page-header quote-header">
        <div className="page-header-bg">
          <div className="ph-shape ph-shape-1"></div>
          <div className="ph-shape ph-shape-2"></div>
        </div>
        <div className="container">
          <span className="section-tag">Free Quote</span>
          <h1 className="page-title">Request a <span>Quote</span></h1>
          <p className="page-desc">
            Tell us what you need, and we'll get back to you with a competitive quote within 24 hours.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>Get a Quote</span>
          </div>
        </div>
      </section>

      <section className="quote-main">
        <div className="container">
          <div className="quote-layout">

            {/* Sidebar */}
            <div className="quote-sidebar">
              <div className="sidebar-card">
                <div className="sidebar-icon">💡</div>
                <h3>Why Get a Quote?</h3>
                <ul className="sidebar-list">
                  <li>✅ 100% Free, no obligation</li>
                  <li>✅ Competitive pricing</li>
                  <li>✅ Response within 24 hours</li>
                  <li>✅ Customized to your needs</li>
                  <li>✅ Professional consultation</li>
                </ul>
              </div>

              <div className="sidebar-card sidebar-card-dark">
                <h3>What Happens Next?</h3>
                <div className="steps">
                  {[
                    { num: '1', title: 'Submit Form', desc: 'Fill out the quote form with your requirements' },
                    { num: '2', title: 'We Review', desc: 'Our team reviews your request within 24 hours' },
                    { num: '3', title: 'We Contact You', desc: 'We call or email you with a customized quote' },
                    { num: '4', title: 'We Deliver', desc: 'Upon approval, we deliver the service to you' },
                  ].map((s, i) => (
                    <div className="step" key={i}>
                      <div className="step-num">{s.num}</div>
                      <div>
                        <div className="step-title">{s.title}</div>
                        <div className="step-desc">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-contact">
                <p>Need urgent help?</p>
                <a href="tel:+26669297700" className="btn-orange" style={{display:'block', textAlign:'center'}}>
                  📞 Call: +266 6929 7700
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="quote-form-wrapper">
              <div className="quote-form-card">
                <div className="form-header">
                  <h3>Request Your Free Quote</h3>
                  <p>Please provide as much detail as possible so we can give you an accurate quote.</p>
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
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+266 XXXX XXXX" required />
                    </div>
                    <div className="form-group">
                      <label>Company / Organization</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your company name (optional)" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Service Required *</label>
                    <select name="service" value={form.service} onChange={handleChange} required>
                      <option value="">-- Select a Service --</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Project Description *</label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Describe what you need in detail. Include: location, frequency, size/scale, special requirements, timeline, etc."
                      rows="6"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-orange" style={{width:'100%', justifyContent:'center', fontSize:'1.05rem', padding:'16px'}} disabled={loading}>
                    {loading ? '⏳ Submitting...' : '🚀 Submit Quote Request →'}
                  </button>

                  <p className="form-note">
                    By submitting, you agree to be contacted by RODESAM. We respect your privacy and never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick List */}
      <section className="quote-services-list">
        <div className="container">
          <div className="section-header" style={{textAlign:'center', marginBottom:'40px'}}>
            <span className="section-tag">All Services</span>
            <h2 className="section-title">What We Can <span>Quote For</span></h2>
          </div>
          <div className="quick-services">
            {[
              { icon: '🧹', label: 'Cleaning Services', color: '#00B4D8' },
              { icon: '🏗️', label: 'Post-Construction Cleaning', color: '#0077B6' },
              { icon: '🏊', label: 'Pool Cleaning', color: '#2EC4B6' },
              { icon: '🌿', label: 'Landscaping', color: '#52B788' },
              { icon: '🔥', label: 'Fire & PPE Gear', color: '#FF6B35' },
              { icon: '👕', label: 'Uniforms & Clothing', color: '#E63946' },
              { icon: '🚗', label: 'Car Rental', color: '#7B2D8B' },
              { icon: '✈️', label: 'Airport Transport', color: '#4361EE' },
              { icon: '📦', label: 'Office Supplies', color: '#F9C74F' },
              { icon: '🏨', label: 'Hotel Supplies', color: '#c9a227' },
              { icon: '📦', label: 'Parcel Delivery', color: '#F4A261' },
              { icon: '🎒', label: 'School Uniforms', color: '#3A86FF' },
            ].map((s, i) => (
              <div className="quick-service-item" key={i} style={{'--qs-color': s.color}}>
                <span className="qs-icon">{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
