import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className="profile-page">
      <h1>Welcome to Your Profile!</h1>
      <p>Thank you for registering with us. Your profile is now set up.You will get you Verification Mail and login credentials within 10-12hours.Feel free to explore our platform and start your journey!</p>
      <a href="/" className="home-link">Go to Home</a>
    </div>
  );
}

export default ProfilePage;
