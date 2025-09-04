import React from 'react';
import juniorPDF from '../assets/junior.pdf';
import adultPDF from '../assets/adult.pdf';

const Training: React.FC = () => {
  return (
    <div className="container">
      <h2 className="section-heading">Training Programs</h2>
      <div className="info-grid">
        {/* Junior Programs */}
        <div className="info-card">
          <h3>Junior Programs</h3>
          <p><strong>Fundamental:</strong> Fresh to badminton and looking for enjoyment.</p>
          <p><strong>Intermediate:</strong> Train with basics and common skillsets in a rally.</p>
          <p><strong>Advanced B:</strong> Tactical and technical trainings for Junior B level tournaments.</p>
          <p><strong>Enhanced A (Invitation Only):</strong> For Junior A level tournaments or above.</p>
          <a
            href={juniorPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            View Junior Programs
          </a>
        </div>

        {/* Adult Programs */}
        <div className="info-card">
          <h3>Adult Programs</h3>
          <p><strong>Skills:</strong> Morning skills sessions for adults to enjoy badminton and prevent injuries.</p>
          <p><strong>Doubles Specific:</strong> Morning sessions mainly focused on doubles tactical trainings and rotations.</p>
          <a
            href={adultPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            View Adult Programs
          </a>
        </div>

        {/* Private / Semi-Private Lessons */}
        <div className="info-card">
          <h3>Private / Semi-Private Lessons</h3>
          <p>
            Customized 1-on-1 or 1-on-2 lessons to maximize your training outcome
            and focus on specific skill development.
          </p>
          <ul>
            <li>Flexible Scheduling</li>
            <li>Tailor-made Training</li>
            <li>Tactics Improvement</li>
            <li>Injury Risk Reduction</li>
          </ul>
          <a href="/contact" className="cta-button">
            Contact for Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default Training;