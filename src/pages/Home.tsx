import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import juniorPDF from '../assets/junior.pdf';
import adultPDF from '../assets/adult.pdf';
import "../index.css";

// ✅ IMPORT your images so the build tool can process them
import coaching1 from '../assets/photos/coaching1.png';
import coaching2 from '../assets/photos/coaching2.png';
import coaching3 from '../assets/photos/coaching3.png';
import diwen1 from '../assets/photos/diwen1.png';
import doubles1 from '../assets/photos/doubles1.png';
import medals1 from '../assets/photos/medals1.png';
import courts1 from '../assets/courts1.png';
import courts2 from '../assets/courts2.png';

// --- Photo Gallery Component (Infinite Loop) ---
function PhotoGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // ✅ Use the imported image variables in the array (the "real" slides)
  const photos = [
    coaching1,
    coaching2,
    coaching3,
    diwen1,
    doubles1,
    medals1,
  ];

  // We create three copies: [A][A][A]
  // and keep the scroll position inside the middle [A] so we can loop seamlessly.
  const loopPhotos = [...photos, ...photos, ...photos];

  // Scroll by viewport amount on arrow press
  const scrollByAmount = useCallback((dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.8 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  // Initialize position to the start of the middle segment
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const setToMiddle = () => {
      // Each of the three segments is ~ a third of total scrollWidth
      const segment = el.scrollWidth / 3;
      // Put the user inside the middle segment
      el.scrollLeft = segment + 1; // +1 avoids edge equality case
    };

    // After first layout
    requestAnimationFrame(setToMiddle);

    // Keep things stable when the layout changes (resize/images load)
    const onResize = () => requestAnimationFrame(setToMiddle);
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Loop logic: if user scrolls beyond middle segment edges, jump by one segment
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const total = el.scrollWidth;
        const segment = total / 3;
        const left = el.scrollLeft;

        // If we’re left of the middle segment → jump forward one segment
        if (left < segment * 0.05) {
          el.scrollLeft = left + segment;
        }
        // If we’re right of the middle segment → jump back one segment
        else if (left > segment * 1.95) {
          el.scrollLeft = left - segment;
        }

        ticking = false;
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="gallery-wrap">
      {/* --- Left Scroll Arrow --- */}
      <button
        className="gallery-arrow left"
        onClick={() => scrollByAmount("left")}
        aria-label="Previous photos"
      >
        &larr;
      </button>

      {/* --- Horizontally Scrolling Image Container --- */}
      <div className="gallery-scroller" ref={scrollerRef}>
        {loopPhotos.map((photoSrc, i) => (
          <div className="gallery-item" key={i}>
            <img
              src={photoSrc}
              alt={`Gallery view ${i + 1}`}
              className="gallery-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/0A192F/FFF?text=Image+${i+1}`;
              }}
            />
          </div>
        ))}
      </div>

      {/* --- Right Scroll Arrow --- */}
      <button
        className="gallery-arrow right"
        onClick={() => scrollByAmount("right")}
        aria-label="Next photos"
      >
        &rarr;
      </button>
    </div>
  );
}

// --- Main Home Page Component ---
export default function Home() {
  return (
    <main>
      {/* --- Main Hero Section --- */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${courts2})` }}
      >
        <div className="hero-content">
          <h1 className="hero-title">Enhanced Badminton</h1>
          <p className="hero-subtitle">World-Class Training & Facilities</p>
        </div>
      </section>

      {/* --- Programs Section --- */}
      <section id="programs" className="container">
        <h2 className="section-heading">Our Programs</h2>
        <div className="info-grid">
          {/* --- Junior Programs Card --- */}
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

          {/* --- Adult Programs Card --- */}
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

          {/* --- Private Lessons Card --- */}
          <div className="info-card">
            <h3>Private / Semi-Private Lessons</h3>
            <p>Customized 1-on-1 or 1-on-2 lessons to maximize your training outcome and focus on specific skill development.</p>
            <ul>
              <li>Flexible Scheduling</li>
              <li>Tailor-made Training</li>
              <li>Tactics Improvement</li>
              <li>Injury Risk Reduction</li>
            </ul>
            <Link to="/contact" className="cta-button">
              Book a Lesson
            </Link>
          </div>
        </div>
      </section>
      
      {/* --- Courts Hero Section --- */}
      <section
        id="courts"
        className="hero-section"
        style={{ backgroundImage: `url(${courts1})` }}
      >
        <div className="hero-content">
          <h2 className="hero-title">Professional Courts</h2>
          <p className="hero-subtitle">
            We provide <strong>6 international level courts</strong> with
            <strong> 3 spring layers</strong> for maximum performance and injury
            prevention.
          </p>
        </div>
      </section>

      {/* --- Photo Gallery Section --- */}
      <section id="photos" className="container">
        <h2 className="section-heading">Gallery</h2>
        <PhotoGallery />
      </section>
    </main>
  );
}