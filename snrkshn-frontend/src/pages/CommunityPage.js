import React from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  const articles = [
    { 
      title: 'Agricultural Waste Management in India', 
      image: '/images/agricultural-waste-management.jpg', 
      link: 'https://www.corpseed.com/knowledge-centre/agricultural-waste-management-in-india'
    },
    { 
      title: 'Transforming Agricultural Waste Management on Smallholder Farms', 
      image: '/images/transforming-agricultural-waste-management.jpeg', 
      link: 'https://pressroom.icrisat.org/transforming-agricultural-waste-management-on-smallholder-farms'
    },
    { 
      title: 'Biogas Plant Setup', 
      image: '/images/biogas-plant.jpg', 
      link: 'https://mnre.gov.in/bio-gas'
    },
  ];

  const videos = [
    { title: 'AI in Agriculture', src: 'https://www.youtube.com/embed/sof1VTmDyr8' },
    { title: 'Waste Management Innovations', src: 'https://www.youtube.com/embed/7CKUzU80eDY' },
    { title: 'Sustainable Agriculture Practices', src: 'https://www.youtube.com/embed/aXtPhyq5RPA' },
  ];

  return (
    <div className="community-page">
      <h1>Community Page</h1>
      
      <section className="articles-section">
        <h2>Articles</h2>
        <div className="articles-container">
          {articles.map((article, index) => (
            <a key={index} href={article.link} target="_blank" rel="noopener noreferrer" className="article-card">
              <img src={article.image} alt={article.title} className="article-image" />
              <h3 className="article-title">{article.title}</h3>
            </a>
          ))}
        </div>
      </section>
      
      <section className="videos-section">
        <h2>Videos</h2>
        <div className="videos-container">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <iframe 
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-frame"
              />
              <h3 className="video-title">{video.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
