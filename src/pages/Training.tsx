import React from 'react';
import PhotoGallery from '../components/PhotoGallery';

const Training: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section page-banner" style={{
        background: "linear-gradient(135deg, #1e3a5f 0%, #2a4d7c 100%)",
        color: "white",
        padding: "5rem 2rem 4rem 2rem",
        textAlign: "center",
        minHeight: "auto"
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{
            display: "inline-block",
            padding: ".5rem 1rem",
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "999px",
            fontSize: ".85rem",
            fontWeight: 700,
            letterSpacing: ".1em",
            marginBottom: "1.5rem"
          }}>
            PROGRAMS
          </div>
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 900,
            margin: "0 0 1.5rem 0",
            lineHeight: 1.1
          }}>
            Training Programs
          </h1>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: 1.7,
            opacity: 0.95,
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Structured programs designed to develop your skills and elevate your game
          </p>
        </div>
      </section>

      <div className="container">
      <h2 className="section-heading" style={{ display: "none" }}>Training Programs</h2>
      <div className="info-grid">
        {/* Junior Programs */}
        <div className="info-card">
          <h3>Junior Programs</h3>
          <p><strong>Fundamental:</strong> Fresh to badminton and looking for enjoyment.</p>
          <p><strong>Intermediate:</strong> Train with basics and common skillsets in a rally.</p>
          <p><strong>Advanced B:</strong> Tactical and technical trainings for Junior B level tournaments.</p>
          <p><strong>Enhanced A (Invitation Only):</strong> For Junior A level tournaments or above.</p>
          <a
            href="/programs/2025-1112-junior.pdf"
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
            href="/programs/2025-1112-adult.pdf"
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

      {/* Gallery Section */}
      <section id="photos" style={{ padding: "5rem 2rem", background: "#ffffff" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div style={{
              display: "inline-block",
              color: "var(--sky-500)",
              fontWeight: 700,
              fontSize: ".85rem",
              letterSpacing: ".1em",
              marginBottom: ".75rem"
            }}>
              SEE US IN ACTION
            </div>
            <h2 className="section-heading" style={{ margin: "0 0 .5rem 0" }}>Gallery</h2>
            <p style={{
              fontSize: "1.1rem",
              color: "var(--slate-500)",
              maxWidth: "650px",
              margin: "0 auto"
            }}>
              Explore our facilities, coaching sessions, and community in action
            </p>
          </div>
          <PhotoGallery />
        </div>
      </section>
    </main>
  );
};

export default Training;