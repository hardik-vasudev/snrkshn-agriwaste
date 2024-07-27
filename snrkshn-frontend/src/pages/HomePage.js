import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homepage">
      <section className="intro-section">
        <h1>Welcome to Snrkshn</h1>
        <p>Transforming agricultural waste into opportunities and revenue.</p>
        <button className="get-started-button" onClick={() => window.scrollTo({ top: document.querySelector('.features-section').offsetTop, behavior: 'smooth' })}>Get Started</button>
      </section>
      
      <section className="carousel-section">
        <h2>Explore Our Solutions</h2>
        <div className="carousel-container">
          <img src="/images/agri_waste_management.png" alt="Agri Waste Management" className="carousel-image" />
          <div className="carousel-buttons">
            <button className="prev-button">❮</button>
            <button className="next-button">❯</button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-container">
          <div className="feature">
            <img src="/images/feature1.png" alt="Easy Listings" />
            <h3>Easy Listings</h3>
            <p>Quickly list your agricultural waste and connect with buyers.</p>
          </div>
          <div className="feature">
            <img src="/images/feature2.png" alt="Instant Payments" />
            <h3>Instant Payments</h3>
            <p>Get paid promptly upon successful transactions.</p>
          </div>
          <div className="feature">
            <img src="/images/feature3.png" alt="Eco-Friendly" />
            <h3>Eco-Friendly</h3>
            <p>Help reduce waste and promote sustainable practices.</p>
          </div>
          <div className="feature">
            <img src="/images/feature4.png" alt="Community Support" />
            <h3>Community Support</h3>
            <p>Join a network of supportive farmers and waste processors.</p>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>1000+</h3>
            <p>Farmers Joined</p>
          </div>
          <div className="stat">
            <h3>5000 Tons</h3>
            <p>Agri-Waste Processed </p>
          </div>
          <div className="stat">
            <h3>10 CR+</h3>
            <p>Earned by Farmers</p>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>Snrkshn envisions a future where agriculture is not only productive but also sustainable and resilient. We strive to create a world where farmers have access to the best tools and knowledge, enabling them to thrive while preserving the environment for future generations.

Join us on our journey to revolutionize agriculture and make a lasting impact on the world. Together, we can build a brighter, more sustainable future for farming.</p>
      </section>

      <footer className="footer-section">
        <p>© 2024 Snrkshn. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
