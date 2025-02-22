import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FarmerRegister = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    country: '',
    city: '',
    email: '',
    password: '',
  });
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register/farmer', formData);
      if (response.status === 201) {
        setSuccess('Registration successful!');
        setTimeout(() => {
          onClose();
          navigate(`/profile/${response.data.user._id}`);
        }, 2000); // Close popup and navigate after 2 seconds
      }
    } catch (error) {
      console.error('Error registering farmer:', error);
    }
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>Farmer Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
          <input type="text" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
          <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
          <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        {success && <p>{success}</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FarmerRegister;
