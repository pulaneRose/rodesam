const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, service, description } = req.body;
    if (!name || !email || !phone || !service || !description) {
      return res.status(400).json({ error: 'Please fill all required fields' });
    }
    const quote = new Quote({ name, email, phone, company, service, description });
    await quote.save();
    res.status(201).json({ success: true, message: 'Quote request submitted! We will contact you within 24 hours.' });
  } catch (err) {
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
