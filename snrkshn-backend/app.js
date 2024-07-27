const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const registerRoutes = require('./routes/registerRoutes');
const profileRoutes = require('./routes/profileRoutes');
app.use('/api/register', registerRoutes);
app.use('/api/profile', profileRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});
