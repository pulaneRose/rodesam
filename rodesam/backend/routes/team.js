const express = require('express');
const router = express.Router();

const team = [
  {
    id: 1,
    name: 'Nthatisi Masenkane',
    role: 'Founder & CEO',
    expertise: 'Business Strategy & Operations',
    description: 'Visionary leader with extensive experience in service delivery and business development.',
    color: '#00B4D8'
  },
  {
    id: 2,
    name: 'Operations Manager',
    role: 'Head of Operations',
    expertise: 'Logistics & Coordination',
    description: 'Expert in managing day-to-day operations ensuring quality and timeliness across all service lines.',
    color: '#FF6B35'
  },
  {
    id: 3,
    name: 'Cleaning Supervisor',
    role: 'Senior Cleaning Specialist',
    expertise: 'Cleaning & Sanitation',
    description: 'Highly skilled professional ensuring highest standards of cleanliness and safety in all projects.',
    color: '#2EC4B6'
  },
  {
    id: 4,
    name: 'Fleet Manager',
    role: 'Transport & Logistics',
    expertise: 'Vehicle & Route Management',
    description: 'Ensures all vehicles are roadworthy and drivers deliver excellent customer experiences.',
    color: '#F9C74F'
  }
];

router.get('/', (req, res) => {
  res.json(team);
});

module.exports = router;
