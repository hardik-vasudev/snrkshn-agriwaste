import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

function ServicesPage() {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!window.botpressWebChat) {
      const script1 = document.createElement('script');
      script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = 'https://mediafiles.botpress.cloud/86c4acf4-1dbf-4f91-af02-55fcdb4b0078/webchat/config.js';
        script2.defer = true;
        document.body.appendChild(script2);
      };
      document.body.appendChild(script1);
    }
    return () => {
      const scripts = document.querySelectorAll('script[src^="https://cdn.botpress.cloud/webchat"]');
      scripts.forEach(script => document.body.removeChild(script));
    };
  }, []);

  const handleOpenChatbot = () => {
    if (window.botpressWebChat) {
      window.botpressWebChat.sendEvent({
        type: 'show',
      });
    } else {
      console.error("Botpress WebChat is not initialized");
    }
  };

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="services-page">
      <div className="top-right-buttons">
        <button className="chatbot-button" onClick={handleOpenChatbot}>Open Chatbot</button>
        <Link to="/">
          <button className="learn-about-button">Learn About Snrkshn</button>
        </Link>
      </div>
      <div className="tech-solutions">
        <h1>Our Tech Solutions</h1>
        <div className="solutions-container">
          <div className="solution">
            <img src="/images/ai-based-waste-collector.png" alt="AI-Based Waste Collector" className="solution-image" />
            <div className="solution-info">
              <h2>AI-Based Waste Collector</h2>
              <p className={`solution-summary ${expanded === 0 ? 'hidden' : ''}`}>
                Our AI-based waste collector uses advanced algorithms to efficiently segregate and process waste materials. It ensures accurate sorting and minimizes human intervention.
              </p>
              {expanded === 0 && (
                <p className="solution-details">
                  Our AI-based waste collector uses advanced algorithms to efficiently segregate and process waste materials. It ensures accurate sorting and minimizes human intervention, improving overall efficiency in waste management. It can adapt to different waste types and optimize the sorting process for better recycling outcomes.
                </p>
              )}
              <button className="view-more-button" onClick={() => toggleExpand(0)}>
                {expanded === 0 ? 'Show Less' : 'View More'}
              </button>
            </div>
          </div>
          <div className="solution">
            <img src="/images/autonomous-waste-collector.png" alt="Autonomous Waste Collector" className="solution-image" />
            <div className="solution-info">
              <h2>Autonomous Waste Collector</h2>
              <p className={`solution-summary ${expanded === 1 ? 'hidden' : ''}`}>
                Our autonomous waste collector can be scheduled to operate at specific times, providing a reliable and automated solution for waste collection.
              </p>
              {expanded === 1 && (
                <p className="solution-details">
                  Our autonomous waste collector can be scheduled to operate at specific times, providing a reliable and automated solution for waste collection. It adapts to different waste types and schedules, ensuring optimal collection efficiency. With real-time monitoring and adaptive features, it minimizes operational costs and improves waste management efficiency.
                </p>
              )}
              <button className="view-more-button" onClick={() => toggleExpand(1)}>
                {expanded === 1 ? 'Show Less' : 'View More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
