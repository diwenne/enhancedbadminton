import React from 'react';

const PrivateCoaching: React.FC = () => {
  return (
    <div className="container">
      <h2 className="section-heading">Private Coaching</h2>
      <div className="info-grid">
        <div className="info-card">
          <h3>One-on-One Coaching</h3>
          <p>
            Receive personalized training tailored to your skill level and goals. Our private coaching program is designed to accelerate progress and provide focused attention.
          </p>
          <p>
            Please contact us directly for pricing and availability.
          </p>
          <a href="/contact" className="cta-button">
            Contact for Private Coaching
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivateCoaching;
