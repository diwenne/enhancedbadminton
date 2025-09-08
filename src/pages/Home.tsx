import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import juniorPDF from '../assets/junior.pdf';
import adultPDF from '../assets/adult.pdf';
import "../index.css";

/* ✅ Images (reuse your existing assets) */
import coaching1 from '../assets/photos/coaching1.png';
import coaching2 from '../assets/photos/coaching2.png';
import coaching3 from '../assets/photos/coaching3.png';
import diwen1 from '../assets/photos/diwen1.png';
import doubles1 from '../assets/photos/doubles1.png';
import medals1 from '../assets/photos/medals1.png';
import courts1 from '../assets/courts1.png';
import courts2 from '../assets/courts2.png';

/* --- Photo Gallery (Infinite Loop) --- */
function PhotoGallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const photos = [coaching1, coaching2, coaching3, diwen1, doubles1, medals1];
  const loopPhotos = [...photos, ...photos, ...photos];

  const scrollByAmount = useCallback((dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = el.clientWidth * 0.8 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const setToMiddle = () => {
      const segment = el.scrollWidth / 3;
      el.scrollLeft = segment + 1;
    };

    requestAnimationFrame(setToMiddle);

    const onResize = () => requestAnimationFrame(setToMiddle);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

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
        if (left < segment * 0.05) el.scrollLeft = left + segment;
        else if (left > segment * 1.95) el.scrollLeft = left - segment;
        ticking = false;
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="gallery-wrap">
      <button className="gallery-arrow left" onClick={() => scrollByAmount("left")} aria-label="Previous photos">
        &larr;
      </button>

      <div className="gallery-scroller" ref={scrollerRef}>
        {loopPhotos.map((src, i) => (
          <div className="gallery-item" key={i}>
            <img
              src={src}
              alt={`Gallery view ${i + 1}`}
              className="gallery-img"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://placehold.co/600x400/0A192F/FFF?text=Image+${i+1}`;
              }}
            />
          </div>
        ))}
      </div>

      <button className="gallery-arrow right" onClick={() => scrollByAmount("right")} aria-label="Next photos">
        &rarr;
      </button>
    </div>
  );
}

/* --- Small utility chunk: Stat Pill --- */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div style={{
      display: "grid",
      gap: "0.25rem",
      padding: "1rem 1.25rem",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      background: "#fff",
      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)"
    }}>
      <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--navy-700)" }}>{value}</div>
      <div style={{ color: "var(--slate-500)", fontWeight: 600 }}>{label}</div>
    </div>
  );
}

/* --- Main Home Page --- */
export default function Home() {
  return (
    <main>
      {/* ========================= 1) HERO ========================= */}
      <section className="hero-section" style={{ backgroundImage: `url(${courts2})` }}>
        <div className="hero-content" style={{ display: "grid", gap: "1.25rem", placeItems: "center" }}>
          <h1 className="hero-title">Enhanced Badminton</h1>
          <p className="hero-subtitle">World‑class training & facilities in Richmond, BC</p>

          {/* CTA row */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", zIndex: 2 }}>
            <a href="#programs" className="cta-button">View Programs</a>
            <Link to="/contact" className="button" style={{ background: "transparent", color: "var(--white)", border: "2px solid rgba(255,255,255,.9)" }}>
              Book a Lesson
            </Link>
          </div>

          {/* Hero mini badges
          <div style={{
            display: "flex", gap: ".75rem", flexWrap: "wrap",
            marginTop: ".5rem", zIndex: 2
          }}>
            <span style={{
              padding: ".4rem .7rem", borderRadius: "999px",
              background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.25)",
              fontWeight: 600
            }}>
              6 International Courts
            </span>
            <span style={{
              padding: ".4rem .7rem", borderRadius: "999px",
              background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.25)",
              fontWeight: 600
            }}>
              3‑layer Spring Flooring
            </span>
          </div> */}
        </div>
      </section>

      {/* ========================= 2) QUICK STATS STRIP ========================= */}
      <section className="container" style={{ paddingTop: "3rem", paddingBottom: "0" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem"
        }}>
          <Stat value="6" label="Professional Courts" />
          <Stat value="1:1 / 1:2" label="Private & Semi‑Private" />
          <Stat value="Junior → Adult" label="Programs for All Levels" />
        </div>
      </section>


      {/* ========================= 4) PROGRAMS ========================= */}
      <section id="programs" className="container">
        <h2 className="section-heading">Our Programs</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Junior Programs</h3>
            <p><strong>Fundamental:</strong> Fresh to badminton and looking for enjoyment.</p>
            <p><strong>Intermediate:</strong> Train with basics and common skillsets in a rally.</p>
            <p><strong>Advanced B:</strong> Tactical and technical trainings for Junior B level tournaments.</p>
            <p><strong>Enhanced A (Invitation Only):</strong> For Junior A level tournaments or above.</p>
            <a href={juniorPDF} target="_blank" rel="noopener noreferrer" className="cta-button">
              View Junior Programs
            </a>
          </div>

          <div className="info-card">
            <h3>Adult Programs</h3>
            <p><strong>Skills:</strong> Morning skills sessions for adults to enjoy badminton and prevent injuries.</p>
            <p><strong>Doubles Specific:</strong> Morning sessions mainly focused on doubles tactical trainings and rotations.</p>
            <a href={adultPDF} target="_blank" rel="noopener noreferrer" className="cta-button">
              View Adult Programs
            </a>
          </div>

          <div className="info-card">
            <h3>Private / Semi‑Private Lessons</h3>
            <p>Customized 1‑on‑1 or 1‑on‑2 lessons to maximize your training outcome and focus on specific skill development.</p>
            <ul>
              <li>Flexible Scheduling</li>
              <li>Tailor‑made Training</li>
              <li>Tactics Improvement</li>
              <li>Injury Risk Reduction</li>
            </ul>
            <Link to="/contact" className="cta-button">Book a Lesson</Link>
          </div>
        </div>
      </section>

      {/* ========================= 5) COURTS HERO ========================= */}
      <section id="courts" className="hero-section" style={{ backgroundImage: `url(${courts1})` }}>
        <div className="hero-content">
          <h2 className="hero-title">Professional Courts</h2>
          <p className="hero-subtitle">
            We provide <strong>6 international level courts</strong> with <strong>3 spring layers</strong> for maximum performance and injury prevention.
          </p>
        </div>
      </section>

      {/* ========================= 6) GALLERY ========================= */}
      <section id="photos" className="container">
        <h2 className="section-heading">Gallery</h2>
        <PhotoGallery />
      </section>

      {/* ========================= 7) CTA BANNER ========================= */}
      <section className="container" style={{ paddingTop: "0", paddingBottom: "5rem" }}>
        <div className="info-card" style={{
          display: "grid",
          gap: "1rem",
          alignItems: "center",
          gridTemplateColumns: "1.3fr 1fr"
        }}>
          <div>
            <h3 style={{ marginBottom: ".5rem" }}>Ready to play better?</h3>
            <p style={{ color: "var(--slate-500)" }}>
              Join group classes or book private lessons. We’ll help you build consistent shots, smart footwork, and match‑ready confidence.
            </p>
            <div style={{ display: "flex", gap: ".75rem", marginTop: ".75rem" }}>
              <Link to="/contact" className="cta-button">Get Started</Link>
              <a href="#programs" className="button" style={{ background: "var(--navy-700)", color: "#fff" }}>See Programs</a>
            </div>
          </div>
          <div>
            <img src={coaching3} alt="Coaching highlight" style={{ width: "100%", borderRadius: "12px", objectFit: "cover", maxHeight: 260 }} />
          </div>
        </div>
      </section>
    </main>
  );
}