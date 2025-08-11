// src/pages/Training.tsx
function Training() {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="section-heading">Training Programs</h1>
      </div>
      <div className="info-grid">
        <div className="info-card">
          <h3>Group Lessons</h3>
          <p>Perfect for beginners and intermediate players looking to learn fundamentals and strategy in a fun, social setting. Classes are available for all age groups, from juniors to adults.</p>
        </div>
        <div className="info-card">
          <h3>High-Performance Programs</h3>
          <p>An intensive training regimen designed for competitive athletes aiming for provincial, national, and international success. Entry is by assessment only.</p>
        </div>
        <div className="info-card">
          <h3>Private Coaching</h3>
          <p>Receive one-on-one instruction tailored to your specific goals. Our coaches will analyze your technique, footwork, and strategy to help you reach your full potential.</p>
        </div>
      </div>
    </div>
  );
}
export default Training;