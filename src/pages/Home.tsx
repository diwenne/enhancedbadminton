// src/pages/Home.tsx
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero-section">
        <p className="hero-subtitle">Welcome to Enhanced Badminton Club</p>
        <h1 className="hero-title">Elevate Your Game</h1>
        <p className="hero-description">
          Vancouver's premier destination for badminton enthusiasts of all levels.
          Join our community and experience world-class facilities, expert coaching, and a passion for the sport.
        </p>
        <Link to="/training" className="cta-button">Explore Our Programs</Link>
      </section>

      <section className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-heading">Why Train With Us?</h2>
        <div className="info-grid" style={{ marginTop: '4rem' }}>
          <div className="info-card">
            <h3>Expert Coaching Staff</h3>
            <p>Learn from former national champions and certified professionals dedicated to your growth.</p>
          </div>
          <div className="info-card">
            <h3>State-of-the-Art Facilities</h3>
            <p>Play on 12 international-standard courts with professional lighting and flooring.</p>
          </div>
          <div className="info-card">
            <h3>Vibrant Community</h3>
            <p>Connect with fellow players, find partners, and be part of a supportive and friendly club.</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;