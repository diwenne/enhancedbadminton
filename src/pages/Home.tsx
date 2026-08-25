import { Link } from "react-router-dom";
import "../index.css";
import PhotoGallery from '../components/PhotoGallery';

/* ✅ Images (reuse your existing assets) */
import coaching1 from '../assets/photos/coaching1.png';
import courts3 from '../assets/courts3.png';
import courts4 from '../assets/courts4.png';

/* --- Main Home Page --- */
export default function Home() {
  return (
    <main>
      {/* ========================= 1) HERO ========================= */}
      <section className="hero-section" style={{ backgroundImage: `url(${courts4})` }}>
        <div className="hero-content" style={{
          display: "grid",
          gap: "clamp(1.25rem, 4vw, 1.5rem)",
          placeItems: "center",
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
          padding: "0 1rem"
        }}>
          <span className="eyebrow" style={{ margin: 0 }}>
            Richmond's Premier Badminton Facility
          </span>
          <h1 className="hero-title">
            Train with the Best
          </h1>
          <p className="hero-subtitle" style={{ fontSize: "1.2rem", maxWidth: "650px" }}>
            Professional coaching, world-class courts, and programs designed to elevate your game — from beginners to competitive athletes
          </p>

          {/* CTA row */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: ".5rem" }}>
            <Link to="/training" className="cta-button" style={{
              fontSize: "1.05rem",
              padding: "1rem 2rem",
              background: "white",
              color: "var(--navy-700)",
              border: "none",
              fontWeight: 600
            }}>
              Explore Programs →
            </Link>
            <Link to="/contact" className="button" style={{
              background: "rgba(255,255,255,.1)",
              backdropFilter: "blur(10px)",
              color: "white",
              border: "2px solid rgba(255,255,255,.4)",
              fontSize: "1.05rem",
              padding: "1rem 2rem",
              fontWeight: 600
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
              <div style={{ fontSize: "2rem", fontWeight: 800, marginBottom: ".25rem" }}>7</div>
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
        <div className="intro-grid" style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: "3rem",
          alignItems: "center"
        }}>
          <div>
            <span className="eyebrow eyebrow--accent">Why Enhanced Badminton</span>
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

      {/* ========================= 3) FACILITIES SECTION ========================= */}
      <section id="courts" className="hero-section" style={{
        padding: "5rem 2rem",
        backgroundImage: `url(${courts3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white"
      }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", position: "relative", zIndex: 5 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow">World-Class Facilities</span>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 3vw, 2.75rem)",
              fontWeight: 800,
              color: "white",
              margin: "0 0 1rem 0",
              lineHeight: 1.2
            }}>
              Professional Courts Built for Performance
            </h2>
            <p style={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.95)",
              marginBottom: "1.5rem",
              maxWidth: "800px",
              margin: "0 auto 2rem auto"
            }}>
              Train on 7 international-standard courts featuring premium 3-layer spring flooring designed to enhance performance and reduce injury risk.
            </p>
          </div>

          <div style={{ display: "grid", gap: "1rem", margin: "0 auto", justifyItems: "center" }}>
            <div className="facility-tag">
              <div className="facility-tag__title">International Standards</div>
              <div className="facility-tag__desc">Regulation-size courts meeting BWF specifications</div>
            </div>
            <div className="facility-tag">
              <div className="facility-tag__title">3-Layer Spring Flooring</div>
              <div className="facility-tag__desc">Premium shock-absorbing surface for injury prevention</div>
            </div>
            <div className="facility-tag">
              <div className="facility-tag__title">Optimal Lighting</div>
              <div className="facility-tag__desc">Professional LED lighting for perfect visibility</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= 4) PROGRAMS ========================= */}
      <section id="programs" style={{ padding: "5rem 2rem", background: "#ffffff" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow eyebrow--accent">Training Options</span>
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
              <span className="card-rule" />
              <h3 style={{ fontSize: "1.65rem", marginBottom: "1rem" }}>Junior Programs</h3>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Fundamental:</strong> Fresh to badminton and looking for enjoyment.</p>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Intermediate:</strong> Train with basics and common skillsets in a rally.</p>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Advanced B:</strong> Tactical and technical trainings for Junior B level tournaments.</p>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Enhanced A (Invitation Only):</strong> For Junior A level tournaments or above.</p>
              </div>
              <a href="/programs/2026-0910-junior.pdf" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ marginTop: "auto" }}>
                View Junior Programs →
              </a>
            </div>

            <div className="info-card" style={{
              background: "linear-gradient(135deg, #fefcfb 0%, #ffffff 100%)",
              border: "2px solid #e2e8f0"
            }}>
              <span className="card-rule" />
              <h3 style={{ fontSize: "1.65rem", marginBottom: "1rem" }}>Adult Programs</h3>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Skills:</strong> Morning skills sessions for adults to enjoy badminton and prevent injuries.</p>
                <p style={{ marginBottom: ".5rem" }}><strong style={{ color: "var(--navy-700)" }}>Doubles Specific:</strong> Morning sessions mainly focused on doubles tactical trainings and rotations.</p>
              </div>
              <a href="/programs/2026-0910-adult.pdf" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ marginTop: "auto" }}>
                View Adult Programs →
              </a>
            </div>

            <div className="info-card" style={{
              background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%)",
              border: "2px solid #e2e8f0"
            }}>
              <span className="card-rule" />
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

      {/* ========================= 5) FINAL CTA ========================= */}
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

      {/* ========================= 6) GALLERY ========================= */}
      <section id="photos" style={{ padding: "5rem 2rem", background: "#ffffff" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow eyebrow--accent">See Us In Action</span>
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
}