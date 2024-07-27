import React from 'react';
import './ImportantPopup.css'; // Ensure you have the appropriate CSS file

function ImportantPopup({ onClose }) {
  return (
    <div className="important-popup-overlay" onClick={onClose}>
      <div className="important-popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Important Information</h2>
        <p>
            <ol>
                <li>Nabard Promised 750 crores in Indian Startups
                    <a href='www.amazon.now'>Check for more info</a>
                </li>
                <li>Welcome to google 
                    <a href='www.google.com'>Check Now</a>
                </li>
            </ol>
        </p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ImportantPopup;
