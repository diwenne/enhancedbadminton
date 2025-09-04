// src/pages/CourtRentals.tsx
function CourtRentals() {
  return (
    <div className="container">
      <div className="page-header">
        <h1 className="section-heading">Court Rentals</h1>
      </div>
      <div className="page-content">
        <p>
          Our 6 international-standard courts are available for booking. Whether you're looking for a casual game with friends or a space to practice, you can reserve a court online.
        </p>
        <h3>Rental Rates</h3>
        <ul>
          <li><strong>Everyday 10am -10pm:</strong> $30/hour+tax</li>
        </ul>
        <p>
          Members receive a 20% discount on all court rental rates. Bookings can be made up to 7 days in advance. Please visit our online booking portal to check availability and reserve your spot.
        </p>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#" className="cta-button">Book a Court Online</a>
        </div>
      </div>
    </div>
  );
}
export default CourtRentals;