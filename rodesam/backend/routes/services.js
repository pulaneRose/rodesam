const express = require('express');
const router = express.Router();

const services = [
  {
    id: 1,
    title: 'Cleaning Services',
    icon: '🧹',
    color: '#00B4D8',
    description: 'Professional, tailor-made cleaning services for businesses and individuals. Our experienced team ensures healthy, safe working environments.',
    features: [
      'Post construction cleaning',
      'Comprehensive cleaning',
      'Fabric and upholstery cleaning',
      'Carpet & floor crystallization',
      'Medical waste & linen',
      'Cleanroom cleaning',
      'Swimming pool cleaning',
      'Landscaping'
    ]
  },
  {
    id: 2,
    title: 'Fire Services, PPE & Clothing',
    icon: '🔥',
    color: '#FF6B35',
    description: 'Premium safety wear and clothing solutions. We blend aesthetics, modernization and technical perfection for reliable performance even in extreme environments.',
    features: [
      'School uniforms',
      'Office & corporate wear',
      'Sports wear',
      'Protective clothing',
      'Firefighter gear',
      'Custom design per client requirements',
      'High quality fabrics',
      'All clothing apparel'
    ]
  },
  {
    id: 3,
    title: 'Transportation & Logistics',
    icon: '🚗',
    color: '#2EC4B6',
    description: 'Reliable car rental and cab services for individuals and companies. Roadworthy vehicles with experienced drivers ensuring time management.',
    features: [
      'Short & long term car rental',
      'Cab services for individuals & companies',
      'Airport deliveries',
      'Tourist deliveries',
      'Parcel collection & delivery',
      'Travel locally, SA, Botswana, Swaziland',
      'SUVs, Bakkies, Luxury cars',
      'Mini buses & 7-seaters'
    ]
  },
  {
    id: 4,
    title: 'Office Supplies',
    icon: '📦',
    color: '#F9C74F',
    description: 'Comprehensive supply of office materials, cleaning products, stationery, and hotel supplies to businesses and organizations.',
    features: [
      'Cleaning materials',
      'Stationery supplies',
      'Hotel supplies',
      'Toilet paper & consumables',
      'Protective equipment',
      'Bulk supply options',
      'Timely delivery',
      'Competitive pricing'
    ]
  }
];

router.get('/', (req, res) => {
  res.json(services);
});

router.get('/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) return res.status(404).json({ error: 'Service not found' });
  res.json(service);
});

module.exports = router;
