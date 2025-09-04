import { useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css";

// --- Photo Gallery Component ---
function PhotoGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // --- Scroll functionality ---
  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    // Scroll by 80% of the container width for a smooth page-like effect
    const delta = el.clientWidth * 0.8 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // --- Assumed list of photos from the specified directory ---
  // Replace these with your actual file names.
  const photos = [
    "src/assets/photos/coaching1.png",
    "src/assets/photos/coaching2.png",
    "src/assets/photos/coaching3.png",
    "src/assets/photos/diwen1.png",
    "src/assets/photos/doubles1.png",
    "src/assets/photos/medals1.png",
  ];

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
        {photos.map((photoSrc, i) => (
          <div className="gallery-item" key={i}>
            <img
              src={photoSrc}
              alt={`Gallery view ${i + 1}`}
              className="gallery-img"
              // Add a fallback for broken image links
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
        style={{ backgroundImage: `url('src/assets/courts2.png')` }}
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
              href="../assets/junior.pdf"
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
              href="../assets/adult.pdf"
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
        style={{ backgroundImage: `url('src/assets/courts1.png')` }}
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

