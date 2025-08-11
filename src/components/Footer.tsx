import { Link } from 'react-router-dom';
// Import the necessary icons, including a new WeChat icon from Ant Design
import { FiMail, FiInstagram, FiPhone, FiMapPin } from 'react-icons/fi';
import { AiOutlineWechat } from 'react-icons/ai';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
           <img src="/enhanced-label.png" alt="Enhanced Badminton Logo" className="footer-logo-image" />
        </div>
        <p className="footer-address">
          <FiMapPin /> 1751 Savage Rd, Unit 115, Richmond, BC V6V 3A9
        </p>
        <div className="footer-contact-icons">
          <a href="mailto:info@enhancedbadminton.ca" aria-label="Email"><FiMail /></a>
          <a href="tel:+16048346433" aria-label="Phone"><FiPhone /></a>
          {/* Updated to use the new WeChat icon */}
          <a href="#" aria-label="WeChat" title="WeChat ID: coachjkf"><AiOutlineWechat /></a>
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
