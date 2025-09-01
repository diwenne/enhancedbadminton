import React from 'react';
import juniorPDF from '../../assets/junior.pdf';
import adultPDF from '../../assets/adult.pdf';

const Programs: React.FC = () => {
  return (
    <div className="container">
      <h2 className="section-heading">Training Programs</h2>
      <div className="info-grid">
        {/* Junior Program */}
        <div className="info-card">
          <h3>Junior Program</h3>
          <p>Download the junior training program schedule below:</p>
          <a href={juniorPDF} target="_blank" rel="noopener noreferrer" className="cta-button">
            View Junior Program
          </a>
        </div>

        {/* Adult Program */}
        <div className="info-card">
          <h3>Adult Program</h3>
          <p>Download the adult training program schedule below:</p>
          <a href={adultPDF} target="_blank" rel="noopener noreferrer" className="cta-button">
            View Adult Program
          </a>
        </div>

        {/* Private Lessons */}
        <div className="info-card">
          <h3>Private Lessons</h3>
          <p>Please contact us directly for pricing and availability.</p>
          <a href="/contact" className="cta-button">Contact for Pricing</a>
        </div>
      </div>
    </div>
  );
};

export default Programs;