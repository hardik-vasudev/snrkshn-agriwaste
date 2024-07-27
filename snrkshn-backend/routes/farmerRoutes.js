// farmerRoutes.js
const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer'); // Ensure this path is correct

// Register a new farmer
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, mobile, purpose, city, country, password } = req.body;

  try {
    const newFarmer = new Farmer({
      firstName,
      lastName,
      email,
      mobile,
      purpose,
      city,
      country,
      password
    });

    await newFarmer.save();
    res.status(201).json({ message: 'Farmer registered successfully', farmer: newFarmer });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
});

// Fetch farmer details
router.get('/profile/:id', async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id).select('-password'); // Exclude password
    if (farmer) {
      res.status(200).json(farmer);
    } else {
      res.status(404).json({ error: 'Farmer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching farmer', details: error.message });
  }
});

module.exports = router;
