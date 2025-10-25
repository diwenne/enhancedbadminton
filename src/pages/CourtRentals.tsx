// src/pages/CourtRentals.tsx
function CourtRentals() {
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
            FACILITIES
          </div>
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 900,
            margin: "0 0 1.5rem 0",
            lineHeight: 1.1
          }}>
            Court Rentals
          </h1>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: 1.7,
            opacity: 0.95,
            maxWidth: "700px",
            margin: "0 auto"
          }}>
            Book our professional courts for your training and recreational needs
          </p>
        </div>
      </section>

      <div className="container">
      <div className="page-header" style={{ display: "none" }}>
        <h1 className="section-heading">Court Rentals</h1>
      </div>
      <div className="page-content" style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 1rem"
      }}>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
          Our 7 international-standard courts are available for booking. Whether you're looking for a casual game with friends or a space to practice, you can reserve a court.
        </p>

        <div style={{
          background: "linear-gradient(135deg, #f8fbff 0%, #ffffff 100%)",
          border: "2px solid #e2e8f0",
          borderRadius: "var(--radius-md)",
          padding: "2rem",
          marginBottom: "2rem"
        }}>
          <h3 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.5rem",
            color: "var(--navy-700)",
            margin: "0 0 1rem 0"
          }}>Rental Rates</h3>
          <p style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            color: "var(--slate-700)",
            margin: 0
          }}>
            <strong>Everyday 10am - 10pm:</strong> $30/hour + tax
          </p>
        </div>

        <div className="page-banner" style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2a4d7c 100%)",
          border: "none",
          borderRadius: 0,
          padding: "2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          <p style={{
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "white",
            margin: 0,
            position: "relative",
            zIndex: 5
          }}>
            📞 Call <a href="tel:+16048346433" style={{ color: "white", textDecoration: "underline" }}>(604) 834-6433</a> or email <a href="mailto:info@enhancedbadminton.ca" style={{ color: "white", textDecoration: "underline" }}>info@enhancedbadminton.ca</a> for bookings
          </p>
        </div>
      </div>
      </div>
    </main>
  );
}
export default CourtRentals;