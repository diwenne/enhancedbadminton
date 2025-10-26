// src/pages/About.tsx
import PhotoGallery from '../components/PhotoGallery';

function About() {
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
            ABOUT US
          </div>
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 900,
            margin: "0 0 1.5rem 0",
            lineHeight: 1.1
          }}>
            Our Story
          </h1>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: 1.7,
            opacity: 0.95,
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Building Richmond's premier badminton community one player at a time
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: "3rem 1rem", background: "#ffffff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)",
            border: "2px solid #e2e8f0",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            boxShadow: "0 10px 40px -10px rgba(13, 43, 79, 0.15)",
            marginBottom: "3rem"
          }}>
            <p style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.9,
              color: "var(--slate-700)",
              marginBottom: "1.5rem"
            }}>
              Enhanced Badminton is a local badminton club based in the greater Vancouver area with an affiliation with Badminton BC. We offer lessons for grassroots players as well as professional players. Our coaches are all trained and certified in the Canadian coaching system and experienced in both competitive and tournament coaching.
            </p>
            <p style={{
              fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
              lineHeight: 1.9,
              color: "var(--slate-700)"
            }}>
              Our vision is to <strong style={{ color: "var(--navy-700)" }}>Enhance Athletes on their Steps to Enjoyment (EASE)</strong> of badminton. We are proud to offer lessons across multiple locations, including Richmond, Surrey, and Coquitlam.
            </p>
          </div>

          {/* Values Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            marginTop: "3rem"
          }}>
            <div style={{
              padding: "2rem",
              background: "white",
              border: "2px solid #e2e8f0",
              borderRadius: "var(--radius-md)",
              textAlign: "center"
            }}>
              <div style={{
                width: "60px",
                height: "60px",
                margin: "0 auto 1.25rem auto",
                borderRadius: "50%",
                background: "var(--sky-500)",
                display: "grid",
                placeItems: "center"
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="6"/>
                  <circle cx="12" cy="12" r="2"/>
                </svg>
              </div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.35rem",
                color: "var(--navy-700)",
                margin: "0 0 .75rem 0"
              }}>Excellence</h3>
              <p style={{
                color: "var(--slate-500)",
                lineHeight: 1.7,
                margin: 0
              }}>
                Committed to providing world-class coaching and training facilities
              </p>
            </div>

            <div style={{
              padding: "2rem",
              background: "white",
              border: "2px solid #e2e8f0",
              borderRadius: "var(--radius-md)",
              textAlign: "center"
            }}>
              <div style={{
                width: "60px",
                height: "60px",
                margin: "0 auto 1.25rem auto",
                borderRadius: "50%",
                background: "var(--sky-500)",
                display: "grid",
                placeItems: "center"
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.35rem",
                color: "var(--navy-700)",
                margin: "0 0 .75rem 0"
              }}>Community</h3>
              <p style={{
                color: "var(--slate-500)",
                lineHeight: 1.7,
                margin: 0
              }}>
                Building a supportive environment for players of all levels
              </p>
            </div>

            <div style={{
              padding: "2rem",
              background: "white",
              border: "2px solid #e2e8f0",
              borderRadius: "var(--radius-md)",
              textAlign: "center"
            }}>
              <div style={{
                width: "60px",
                height: "60px",
                margin: "0 auto 1.25rem auto",
                borderRadius: "50%",
                background: "var(--sky-500)",
                display: "grid",
                placeItems: "center"
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                  <polyline points="17 6 23 6 23 12"/>
                </svg>
              </div>
              <h3 style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.35rem",
                color: "var(--navy-700)",
                margin: "0 0 .75rem 0"
              }}>Growth</h3>
              <p style={{
                color: "var(--slate-500)",
                lineHeight: 1.7,
                margin: 0
              }}>
                Helping every athlete progress and achieve their personal goals
              </p>
            </div>
          </div>
        </div>
      </section>

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
}
export default About;
