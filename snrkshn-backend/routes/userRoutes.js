// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Ensure this path is correct

// Register a new user
router.post('/register', async (req, res) => {
  console.log('Request Body:', req.body); // Debugging line

  const { firstName, lastName, email, mobile, purpose, city, country, password } = req.body;

  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      mobile,
      purpose,
      city,
      country,
      password
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error:', error); // Debugging line
    res.status(500).json({ error: 'Registration failed', details: error.message });
  }
});

// Fetch user details
router.get('/profile/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password'); // Exclude password
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user', details: error.message });
  }
});

module.exports = router;
