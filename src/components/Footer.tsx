import { Link } from 'react-router-dom';
import { FiMail, FiInstagram, FiPhone, FiMapPin } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Enhanced Badminton</div>
        <p className="footer-address">
          <FiMapPin /> 1751 Savage Rd, Unit 115, Richmond, BC V6V 3A9
        </p>
        <div className="footer-contact-icons">
          <a href="mailto:info@enhancedbadminton.ca" aria-label="Email"><FiMail /></a>
          <a href="tel:+16045551234" aria-label="Phone"><FiPhone /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram /></a>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/training">Training</Link>
          <Link to="/coaches">Coaches</Link>
          <Link to="/rentals">Rentals</Link>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Enhanced Badminton. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
