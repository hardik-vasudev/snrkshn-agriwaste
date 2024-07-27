import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CommunityPage from './pages/CommunityPage';
import RegisterPopup from './pages/RegisterPopup';
import ProfilePage from './pages/ProfilePage'; // Import ProfilePage
import FarmerRegister from './pages/FarmerRegister';
import BusinessRegister from './pages/BusinessRegister';
import ServicesPage from './pages/ServicesPage';
import MarketPlace from './pages/MarketPlace'; // Import MarketPlace

function App() {
  const [showRegisterPopup, setShowRegisterPopup] = React.useState(false);

  const handleRegisterClick = () => {
    setShowRegisterPopup(true);
  };

  const handleClosePopup = () => {
    setShowRegisterPopup(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onRegisterClick={handleRegisterClick} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/register/farmer" element={<FarmerRegister />} />
          <Route path="/register/business" element={<BusinessRegister />} />
          <Route path="/services" element={<ServicesPage />} /> {/* Use element instead of component */}
          <Route path="/profile-page" element={<ProfilePage />} /> {/* Add route for ProfilePage */}
        </Routes>
        {showRegisterPopup && <RegisterPopup onClose={handleClosePopup} />}
      </div>
    </Router>
  );
}

export default App;
