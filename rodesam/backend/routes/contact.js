const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST - submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Please fill all required fields' });
    }
    const contact = new Contact({ name, email, phone, subject, message });
    await contact.save();
    res.status(201).json({ success: true, message: 'Message sent successfully! We will get back to you soon.' });
  } catch (err) {
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// GET - fetch all messages (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
