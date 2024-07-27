// businessRoutes.js
const express = require('express');
const router = express.Router();
const Business = require('../models/Business'); // Ensure this path is correct

// Register a new business
router.post('/register', async (req, res) => {
  const { name, email, mobile, website, city, country, password } = req.body;

  try {
    const newBusiness = new Business({
      name,
      email,
      mobile,
      website,
      city,
      country,
      password
    });

    await newBusiness.save();
    res.status(201).json({ message: 'Business registered successfully', business: newBusiness });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
});

// Fetch business details
router.get('/profile/:id', async (req, res) => {
  try {
    const business = await Business.findById(req.params.id).select('-password'); // Exclude password
    if (business) {
      res.status(200).json(business);
    } else {
      res.status(404).json({ error: 'Business not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching business', details: error.message });
  }
});

module.exports = router;
