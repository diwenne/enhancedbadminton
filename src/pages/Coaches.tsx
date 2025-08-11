// src/pages/Coaches.tsx
import Coach1 from '../assets/coach-1.jpg';
import Coach2 from '../assets/coach-2.jpg';
import Coach3 from '../assets/coach-3.jpg';

function Coaches() {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="section-heading">Meet Our Coaches</h1>
      </div>
      <div className="coaches-grid">
        <div className="coach-card">
          <img src={Coach1} alt="Coach Jane Doe" />
          <h3>Jane Doe</h3>
          <p>Head Coach & Founder. Former National Champion with over 15 years of coaching experience. Specializes in developing youth talent.</p>
        </div>
        <div className="coach-card">
          <img src={Coach2} alt="Coach John Smith" />
          <h3>John Smith</h3>
          <p>Performance Coach. Certified Level 3 coach with a focus on advanced strategy, conditioning, and mental toughness for competitive players.</p>
        </div>
        <div className="coach-card">
          <img src={Coach3} alt="Coach Emily White" />
          <h3>Emily White</h3>
          <p>Development Coach. Expert in fundamental skills and footwork, creating a fun and engaging learning environment for beginners of all ages.</p>
        </div>
      </div>
    </div>
  );
}
export default Coaches;