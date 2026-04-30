import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './About.css'

export default function About() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    axios.get('/api/team').then(res => setTeam(res.data)).catch(() => {})
  }, [])

  const clients = [
    { name: 'Mark Lesotho', services: 'Cleaning services, waste removal, cab provision' },
    { name: 'Goodwill Auto Services', services: 'Cleaning materials, toilet paper supply' },
    { name: 'Sunrise Trading', services: 'Cleaning products, protective clothes, fumigation' },
    { name: 'Paulin Home Care', services: 'Landscaping, staff uniform supply' },
    { name: 'Sino Trucks', services: 'Cleaning services, cab services, airport shuttle' },
    { name: 'SJ Eclat & Sun JV', services: 'Cleaning services, products, airport shuttle' },
    { name: 'Tau Tse Ntle', services: 'School uniforms, T-Shirts and Caps' },
    { name: 'Global Guest House', services: 'Cleaning, staff uniform, toilet paper, cabs' },
  ]

  return (
    <div className="about-page">
      {/* Header */}
      <section className="page-header about-header">
        <div className="page-header-bg">
          <div className="ph-shape ph-shape-1"></div>
          <div className="ph-shape ph-shape-2"></div>
        </div>
        <div className="container">
          <span className="section-tag">Our Story</span>
          <h1 className="page-title">About <span>RODESAM</span></h1>
          <p className="page-desc">
            A company built on trust, quality, and a commitment to making life stress-free for every client we serve.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <span>About</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-grid">
            <div className="story-images">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80"
                alt="Our office"
                className="story-img-main"
              />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80"
                alt="Team working"
                className="story-img-secondary"
              />
              <div className="story-badge">
                <div className="story-badge-num">10+</div>
                <div className="story-badge-text">Years of<br/>Excellence</div>
              </div>
            </div>
            <div className="story-content">
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">A Brief <span>Story</span> About Us</h2>
              <p>
                RODESAM (PTY) LTD was founded with a simple yet powerful mission: to make life easier for businesses and individuals by providing reliable, high-quality multi-service solutions under one roof.
              </p>
              <p>
                From our roots in Ha Matala, Lesotho, we have grown to serve clients across South Africa, Botswana, and Swaziland. Our diverse portfolio spans cleaning services, transportation, PPE & clothing, and comprehensive office supplies.
              </p>
              <p>
                Our knowledge, creativity, and customer-centric approach help us be reliable partners for everyone we serve — from individual clients to large government ministries.
              </p>
              <div className="story-highlights">
                <div className="highlight">
                  <span className="hl-icon">🎯</span>
                  <div>
                    <strong>Our Mission</strong>
                    <p>To be one of the best companies locally and in Africa, with good customer service, timely deliveries, and attention to detail in all requests.</p>
                  </div>
                </div>
                <div className="highlight">
                  <span className="hl-icon">👁️</span>
                  <div>
                    <strong>Our Vision</strong>
                    <p>To serve locally and internationally while maintaining high standards of trust, honesty, and professional relationships with all clients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header" style={{textAlign:'center', marginBottom:'56px'}}>
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">What <span>Drives</span> Us</h2>
          </div>
          <div className="values-grid">
            {[
              { icon: '🤝', title: 'Trust & Honesty', desc: 'We maintain the highest standard of trust and honesty with all our clients and partners at all times.', color: '#00B4D8' },
              { icon: '💎', title: 'Quality First', desc: 'RODESAM ensures high quality products and services to all customers. We never compromise on standards.', color: '#FF6B35' },
              { icon: '⏱️', title: 'Timeliness', desc: 'Deliveries are done on time without failure on deadlines. Time management is core to our operations.', color: '#2EC4B6' },
              { icon: '🔍', title: 'Attention to Detail', desc: 'We pay attention to all details in every request so that accuracy and completeness are ensured.', color: '#F9C74F' },
              { icon: '🌱', title: 'Continuous Improvement', desc: 'Post-project debriefs ensure quality improvements and better outcomes in every future project.', color: '#7B2D8B' },
              { icon: '❤️', title: 'Customer Centric', desc: 'Our clients are always our priority. A welcoming environment and professional relationship is maintained.', color: '#E63946' },
            ].map((v, i) => (
              <div className="value-card" key={i} style={{'--vc-color': v.color}}>
                <div className="vc-icon" style={{background:`${v.color}18`, color: v.color}}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header" style={{textAlign:'center', marginBottom:'56px'}}>
            <span className="section-tag">Our People</span>
            <h2 className="section-title">Meet Our <span>Team</span></h2>
            <p className="section-desc" style={{margin:'0 auto'}}>
              Our employees possess high levels of expertise in cleaning, logistics, administration and customer care.
            </p>
          </div>
          <div className="team-stats">
            <div className="team-stat">
              <div className="ts-bar"><div className="ts-fill" style={{width:'92%', background:'linear-gradient(90deg, var(--primary), var(--accent))'}}></div></div>
              <div className="ts-label"><span>Teamwork</span><span>92%</span></div>
            </div>
            <div className="team-stat">
              <div className="ts-bar"><div className="ts-fill" style={{width:'96%', background:'linear-gradient(90deg, var(--secondary), #e85d04)'}}></div></div>
              <div className="ts-label"><span>Efficiency</span><span>96%</span></div>
            </div>
            <div className="team-stat">
              <div className="ts-bar"><div className="ts-fill" style={{width:'94%', background:'linear-gradient(90deg, #2EC4B6, #0cb4ad)'}}></div></div>
              <div className="ts-label"><span>Expertise</span><span>94%</span></div>
            </div>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.id} style={{'--tc-color': member.color}}>
                <div className="team-card-header" style={{background: member.color}}>
                  <div className="team-avatar">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="team-expertise">
                    <span className="expertise-badge" style={{background:`${member.color}18`, color: member.color}}>
                      {member.expertise}
                    </span>
                  </div>
                  <p>{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="clients-refs">
        <div className="container">
          <div className="section-header" style={{textAlign:'center', marginBottom:'56px'}}>
            <span className="section-tag">References</span>
            <h2 className="section-title">Clients We <span>Proudly</span> Serve</h2>
            <p className="section-desc" style={{margin:'0 auto'}}>
              Above are just a few clients we serve daily. We have many more clients we attend to as per different requests.
            </p>
          </div>
          <div className="clients-grid">
            {clients.map((c, i) => (
              <div className="client-ref-card" key={i}>
                <div className="client-ref-icon">{c.name.charAt(0)}</div>
                <div>
                  <div className="client-ref-name">{c.name}</div>
                  <div className="client-ref-services">{c.services}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container" style={{textAlign:'center'}}>
          <h2>Ready to Partner With Us?</h2>
          <p>Join hundreds of satisfied clients who trust RODESAM for their service needs.</p>
          <div className="about-cta-btns">
            <Link to="/get-quote" className="btn-orange">Get a Free Quote</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
