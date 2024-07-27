import React, { useRef } from 'react';
import './MissionPage.css';

const MissionPage = () => {
  const missionRef = useRef(null);

  const scrollToMission = () => {
    missionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mission-page">
      <div className="mission-statement">
        <h1>Our Mission</h1>
        <p>
          Our mission is to empower farmers with the latest technology and sustainable practices
          to improve their livelihoods and promote a healthier planet.
        </p>
        <div className="mission-images">
          <div className="mission-image">
            <img src="path_to_image1.jpg" alt="Empowering Farmers" />
            <h2>Empowering Farmers</h2>
          </div>
          <div className="mission-image">
            <img src="path_to_image2.jpg" alt="Sustainable Practices" />
            <h2>Sustainable Practices</h2>
          </div>
          <div className="mission-image">
            <img src="path_to_image3.jpg" alt="Technological Innovations" />
            <h2>Technological Innovations</h2>
          </div>
        </div>
        <button className="mission-button" onClick={scrollToMission}>
          Check Our Mission
        </button>
      </div>

      <div className="farmer-images-section" ref={missionRef}>
        <h2>Meet Our Farmers</h2>
        <div className="farmer-images">
          <button className="scroll-button">&#8592;</button>
          <div className="farmer-image-card">
            <img src="path_to_farmer_image1.jpg" alt="Farmer 1" />
            <h3>Farmer 1</h3>
          </div>
          <div className="farmer-image-card">
            <img src="path_to_farmer_image2.jpg" alt="Farmer 2" />
            <h3>Farmer 2</h3>
          </div>
          <div className="farmer-image-card">
            <img src="path_to_farmer_image3.jpg" alt="Farmer 3" />
            <h3>Farmer 3</h3>
          </div>
          <button className="scroll-button">&#8594;</button>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
