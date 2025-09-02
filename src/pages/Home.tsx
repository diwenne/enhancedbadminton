import {useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function PhotoGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.8 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // Grey placeholders with different aspect ratios (swap to real images later)
  const items = [
    { label: "Placeholder 1", w: 320 },
    { label: "Placeholder 2", w: 260 },
    { label: "Placeholder 3", w: 420 },
    { label: "Placeholder 4", w: 280 },
    { label: "Placeholder 5", w: 360 },
  ];

  return (
    <div className="gallery-wrap">
      <button
        className="gallery-arrow left"
        onClick={() => scrollByAmount("left")}
        aria-label="Previous photos"
      >
        ‹
      </button>

      <div className="gallery-scroller" ref={scrollerRef}>
        {items.map((it, i) => (
          <div className="gallery-item" key={i} style={{ width: it.w }}>
            <div className="gallery-ph">
              <span>{it.label}</span>
            </div>
          </div>
        ))}
      </div>

      <button
        className="gallery-arrow right"
        onClick={() => scrollByAmount("right")}
        aria-label="Next photos"
      >
        ›
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero Title */}
      <section className="hero-section">
        <h1 className="hero-title">Enhanced Badminton</h1>
      </section>

      {/* Courts Section */}
      <section id="courts" className="courts-hero">
        <div className="courts-overlay">
          <h2 className="section-heading courts-heading">Our Courts</h2>
          <p className="courts-text">
            We provide <strong>6 international level courts</strong> with
            <strong> 3 spring layers</strong> for maximum performance and injury
            prevention.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="container">
        <h2 className="section-heading">Programs</h2>
        <div className="info-grid">
          {/* Junior Programs */}
          <div className="info-card">
            <h3>Junior Programs</h3>
            <p><strong>Fundamental:</strong> Fresh to badminton and looking for enjoyment.</p>
            <p><strong>Intermediate:</strong> Train with basics and common skillsets in a rally.</p>
            <p><strong>Advanced B:</strong> Tactical and technical trainings for Junior B level tournaments.</p>
            <p><strong>Enhanced A (Invitation Only):</strong> Overall skills and tactical control trainings for Junior A level tournaments or above.</p>
            <a
              href="../assets/junior.pdf"
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
              href="../assets/adult.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              View Adult Programs
            </a>
          </div>

          {/* Private Lessons */}
          <div className="info-card">
            <h3>Private / Semi-Private Lessons</h3>
            <p><strong>1-to-1 Private Lessons</strong></p>
            <p><strong>1-to-2 Semi-Private Lessons</strong></p>
            <h4>Why Choose Private/Semi-Private?</h4>
            <ul>
              <li>Focus on Skills Development</li>
              <li>Flexible Schedule</li>
              <li>Tailor-made Training Content</li>
              <li>Tactics Improvement</li>
              <li>Maximize Training Outcome</li>
              <li>Reduce Risk of Injuries</li>
            </ul>
            <Link to="/contact" className="cta-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Carousel Section */}
      <section id="photos" className="container">
        <h2 className="section-heading">Gallery</h2>
        <PhotoGallery />
      </section>
    </main>
  );
}