import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './RegisterPopup.css';

function RegisterPopup({ onClose }) {
  const [formType, setFormType] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFormTypeSelection = (type) => {
    setFormType(type);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    const formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });

    try {
      const response = await fetch(`http://localhost:5000/api/register/${formType}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        form.reset();
        setFormType('');
        alert('Registration successful!');
        onClose();
        navigate('/profile-page'); // Redirect to ProfilePage
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.error);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>&times;</button>
        <h2>Register</h2>
        {!formType && (
          <div>
            <button onClick={() => handleFormTypeSelection('farmer')}>Farmer Register</button>
            <button onClick={() => handleFormTypeSelection('business')}>Business Register</button>
          </div>
        )}
        {formType && (
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="mobile" placeholder="Mobile" required />
            <input type="text" name="country" placeholder="Country" required />
            <input type="text" name="city" placeholder="City" required />
            <input type="text" name="purpose" placeholder="Purpose" required />
            {formType === 'business' && <input type="url" name="website" placeholder="Website" required />}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegisterPopup;
