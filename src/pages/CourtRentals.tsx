// src/pages/CourtRentals.tsx
function CourtRentals() {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="section-heading">Court Rentals</h1>
      </div>
      <div className="page-content">
        <p>
          Our 6 international-standard courts are available for booking. Whether you're looking for a casual game with friends or a space to practice, you can reserve a court.
        </p>
        <h3>Rental Rates</h3>
        <ul>
          <li><strong>Everyday 10am - 10pm:</strong> $30/hour+tax</li>
        </ul>
        <p>
          Please call (604) 313-1810 or email info@enhancedbadminton.ca for bookings.
        </p>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#" className="cta-button">Book a Court Online</a>
        </div>
      </div>
    </div>
  );
}
export default CourtRentals;