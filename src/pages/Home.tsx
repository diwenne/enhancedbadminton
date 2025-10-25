import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
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


/* --- Main Home Page --- */
export default function Home() {
  return (
    <main>
      {/* ========================= 1) HERO ========================= */}
      <section className="hero-section" style={{ backgroundImage: `url(${courts2})` }}>
        <div className="hero-content" style={{
          display: "grid",
          gap: "clamp(1.25rem, 4vw, 1.5rem)",
          placeItems: "center",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
          padding: "0 1rem"
        }}>
          <div style={{
            display: "inline-block",
            padding: ".5rem 1rem",
            background: "rgba(14, 165, 233, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,.3)",
            borderRadius: "999px",
            fontSize: ".95rem",
            fontWeight: 600,
            letterSpacing: ".02em",
            marginBottom: ".25rem"
          }}>
            RICHMOND'S PREMIER BADMINTON FACILITY
          </div>
          <h1 className="hero-title" style={{
            lineHeight: 1.05,
            fontSize: "clamp(4.5rem, 9vw + 1rem, 9rem)",
            fontFamily: "'DM Serif Display', 'Georgia', serif",
            fontWeight: 400,
            background: "linear-gradient(165deg, #94a3b8 0%, #e2e8f0 15%, #ffffff 25%, #f8fafc 35%, #cbd5e1 45%, #f1f5f9 55%, #ffffff 65%, #e2e8f0 75%, #cbd5e1 85%, #f8fafc 95%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% 200%",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            letterSpacing: "-0.02em",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
          }}>
            Train with the Best
          </h1>
          <p className="hero-subtitle" style={{ fontSize: "1.2rem", maxWidth: "650px" }}>
            Professional coaching, world-class courts, and programs designed to elevate your game — from beginners to competitive athletes
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: ".5rem" }}>
            <a href="#programs" className="cta-button" style={{ fontSize: "1.05rem", padding: "1rem 1.75rem" }}>Explore Programs</a>
            <Link to="/contact" className="button" style={{
              background: "rgba(255,255,255,.15)",
              backdropFilter: "blur(10px)",
              color: "var(--white)",
              border: "2px solid rgba(255,255,255,.6)",
              fontSize: "1.05rem",
              padding: "1rem 1.75rem"
            }}>
              Book Your Session
            </Link>
          </div>

          {/* Feature badges */}
          <div style={{
            display: "flex", gap: "1.5rem", flexWrap: "wrap",
            marginTop: "1rem", justifyContent: "center", alignItems: "center"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, marginBottom: ".25rem" }}>6</div>
              <div style={{ fontSize: ".9rem", opacity: .9 }}>International Courts</div>
            </div>
            <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,.3)" }}></div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, marginBottom: ".25rem" }}>3</div>
              <div style={{ fontSize: ".9rem", opacity: .9 }}>Spring Layers</div>
            </div>
            <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,.3)" }}></div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, marginBottom: ".25rem" }}>15+</div>
              <div style={{ fontSize: ".9rem", opacity: .9 }}>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= 2) INTRO SECTION ========================= */}
      <section style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
        padding: "4rem 2rem"
      }}>
        <div style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "3rem",
          alignItems: "center"
        }}>
          <div>
            <div style={{
              display: "inline-block",
              color: "var(--sky-500)",
              fontWeight: 700,
              fontSize: ".85rem",
              letterSpacing: ".1em",
              marginBottom: ".75rem"
            }}>
              WHY ENHANCED BADMINTON
            </div>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3vw, 2.75rem)",
              fontWeight: 800,
              color: "var(--navy-700)",
              margin: "0 0 1rem 0",
              lineHeight: 1.2
            }}>
              Where Passion Meets Performance
            </h2>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--slate-500)",
              marginBottom: "1.5rem"
            }}>
              Enhanced Badminton provides top-tier coaching and facilities for players of all skill levels. Our certified coaches bring decades of competitive and teaching experience to help you achieve your goals.
            </p>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              <div>
                <div style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "var(--sky-500)",
                  fontFamily: "var(--font-heading)"
                }}>100+</div>
                <div style={{ color: "var(--slate-500)", fontWeight: 600 }}>Active Students</div>
              </div>
              <div>
                <div style={{
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  color: "var(--sky-500)",
                  fontFamily: "var(--font-heading)"
                }}>20+</div>
                <div style={{ color: "var(--slate-500)", fontWeight: 600 }}>Weekly Classes</div>
              </div>
            </div>
          </div>
          <div style={{
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            boxShadow: "0 20px 60px -12px rgba(13, 43, 79, 0.25)"
          }}>
            <img src={coaching1} alt="Professional coaching" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
      </section>


      {/* ========================= 3) PROGRAMS ========================= */}
      <section id="programs" style={{ padding: "5rem 2rem", background: "#ffffff" }}>
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
              TRAINING OPTIONS
            </div>
            <h2 className="section-heading" style={{ margin: "0 0 1rem 0" }}>Programs for Every Level</h2>
            <p style={{
              fontSize: "1.1rem",
              color: "var(--slate-500)",
              maxWidth: "700px",
              margin: "0 auto"
            }}>
              From foundational skills to competitive training, find the perfect program to reach your badminton goals
            </p>
          </div>

          <div className="info-grid">
            <div className="info-card" style={{
              background: "linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)",
              border: "2px solid #e2e8f0"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, var(--sky-500), #0284c7)",
                display: "grid",
                placeItems: "center",
                fontSize: "1.5rem",
                marginBottom: "1rem"
              }}>🏸</div>
              <h3 style={{ fontSize: "1.65rem", marginBottom: "1rem" }}>Junior Programs</h3>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Fundamental:</strong> Fresh to badminton and looking for enjoyment.</p>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Intermediate:</strong> Train with basics and common skillsets in a rally.</p>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Advanced B:</strong> Tactical and technical trainings for Junior B level tournaments.</p>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Enhanced A (Invitation Only):</strong> For Junior A level tournaments or above.</p>
              </div>
              <a href="/programs/2025-1112-junior.pdf" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ marginTop: "auto" }}>
                View Junior Programs →
              </a>
            </div>

            <div className="info-card" style={{
              background: "linear-gradient(135deg, #fefcfb 0%, #ffffff 100%)",
              border: "2px solid #e2e8f0"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                display: "grid",
                placeItems: "center",
                fontSize: "1.5rem",
                marginBottom: "1rem"
              }}>💪</div>
              <h3 style={{ fontSize: "1.65rem", marginBottom: "1rem" }}>Adult Programs</h3>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Skills:</strong> Morning skills sessions for adults to enjoy badminton and prevent injuries.</p>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Doubles Specific:</strong> Morning sessions mainly focused on doubles tactical trainings and rotations.</p>
              </div>
              <a href="/programs/2025-1112-adult.pdf" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ marginTop: "auto" }}>
                View Adult Programs →
              </a>
            </div>

            <div className="info-card" style={{
              background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
              border: "2px solid #e2e8f0"
            }}>
              <div style={{
                width: "50px",
                height: "50px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #10b981, #059669)",
                display: "grid",
                placeItems: "center",
                fontSize: "1.5rem",
                marginBottom: "1rem"
              }}>⭐</div>
              <h3 style={{ fontSize: "1.65rem", marginBottom: "1rem" }}>Private / Semi-Private</h3>
              <p style={{ marginBottom: "1rem" }}>Customized 1-on-1 or 1-on-2 lessons to maximize your training outcome and focus on specific skill development.</p>
              <ul style={{ marginBottom: "1.25rem" }}>
                <li>Flexible Scheduling</li>
                <li>Tailor-made Training</li>
                <li>Tactics Improvement</li>
                <li>Injury Risk Reduction</li>
              </ul>
              <Link to="/contact" className="cta-button" style={{ marginTop: "auto" }}>Book a Lesson →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= 4) FACILITIES SECTION ========================= */}
      <section id="courts" style={{
        padding: "5rem 2rem",
        background: "linear-gradient(180deg, #f8fbff 0%, #ffffff 100%)"
      }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "3rem",
            alignItems: "center"
          }}>
            <div style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "0 20px 60px -12px rgba(13, 43, 79, 0.25)"
            }}>
              <img src={courts1} alt="Professional courts" style={{ width: "100%", display: "block" }} />
            </div>
            <div>
              <div style={{
                display: "inline-block",
                color: "var(--sky-500)",
                fontWeight: 700,
                fontSize: ".85rem",
                letterSpacing: ".1em",
                marginBottom: ".75rem"
              }}>
                WORLD-CLASS FACILITIES
              </div>
              <h2 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 3vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--navy-700)",
                margin: "0 0 1rem 0",
                lineHeight: 1.2
              }}>
                Professional Courts Built for Performance
              </h2>
              <p style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                color: "var(--slate-500)",
                marginBottom: "1.5rem"
              }}>
                Train on 6 international-standard courts featuring premium 3-layer spring flooring designed to enhance performance and reduce injury risk.
              </p>
              <div style={{ display: "grid", gap: "1rem" }}>
                <div style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1rem",
                  background: "white",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0"
                }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, var(--sky-500), #0284c7)",
                    flexShrink: 0,
                    display: "grid",
                    placeItems: "center",
                    fontSize: "1.25rem"
                  }}>🏟️</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--navy-700)", marginBottom: ".25rem" }}>International Standards</div>
                    <div style={{ color: "var(--slate-500)", fontSize: ".95rem" }}>Regulation-size courts meeting BWF specifications</div>
                  </div>
                </div>
                <div style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1rem",
                  background: "white",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0"
                }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    flexShrink: 0,
                    display: "grid",
                    placeItems: "center",
                    fontSize: "1.25rem"
                  }}>🛡️</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--navy-700)", marginBottom: ".25rem" }}>3-Layer Spring Flooring</div>
                    <div style={{ color: "var(--slate-500)", fontSize: ".95rem" }}>Premium shock-absorbing surface for injury prevention</div>
                  </div>
                </div>
                <div style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1rem",
                  background: "white",
                  borderRadius: "12px",
                  border: "1px solid #e2e8f0"
                }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    flexShrink: 0,
                    display: "grid",
                    placeItems: "center",
                    fontSize: "1.25rem"
                  }}>💡</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--navy-700)", marginBottom: ".25rem" }}>Optimal Lighting</div>
                    <div style={{ color: "var(--slate-500)", fontSize: ".95rem" }}>Professional LED lighting for perfect visibility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= 5) GALLERY ========================= */}
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

      {/* ========================= 6) FINAL CTA ========================= */}
      <section className="hero-section" style={{
        padding: "5rem 2rem",
        background: "linear-gradient(135deg, var(--navy-700) 0%, #0a1f3d 100%)",
        color: "white",
        minHeight: "auto"
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 3vw, 2.75rem)",
            fontWeight: 800,
            margin: "0 0 1rem 0",
            lineHeight: 1.2
          }}>
            Ready to Elevate Your Game?
          </h2>
          <p style={{
            fontSize: "1.15rem",
            lineHeight: 1.7,
            opacity: 0.95,
            marginBottom: "2rem",
            maxWidth: "700px",
            margin: "0 auto 2rem auto"
          }}>
            Join Richmond's premier badminton community. Whether you're just starting out or training for competition, we have the programs, coaches, and facilities to help you succeed.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contact" className="cta-button" style={{
              background: "white",
              color: "var(--navy-700)",
              fontSize: "1.05rem",
              padding: "1rem 2rem"
            }}>
              Get Started Today →
            </Link>
            <a href="#programs" className="button" style={{
              background: "rgba(255,255,255,.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              border: "2px solid rgba(255,255,255,.4)",
              fontSize: "1.05rem",
              padding: "1rem 2rem"
            }}>
              View Programs
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}