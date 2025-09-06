import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiInstagram, FiPhone, FiMapPin } from "react-icons/fi";
import { AiOutlineWechat } from "react-icons/ai";

function Footer() {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="/enhanced-label.png"
            alt="Enhanced Badminton Logo"
            className="footer-logo-image"
          />
        </div>

        <p className="footer-address">
          <FiMapPin /> 1751 Savage Rd, Unit 115, Richmond, BC V6V 3A9
        </p>

        <div className="footer-contact-icons">
          <a href="mailto:info@enhancedbadminton.ca" aria-label="Email"><FiMail /></a>
          <a href="tel:+16048346433" aria-label="Phone"><FiPhone /></a>

          {/* ✅ WeChat with caption */}
          <div
            className="wechat-wrapper"
            onClick={() => setShowWeChat(!showWeChat)} // tap on mobile
            onMouseEnter={() => setShowWeChat(true)}  // hover desktop
            onMouseLeave={() => setShowWeChat(false)}
          >
            <AiOutlineWechat className="wechat-icon" />
            {showWeChat && (
              <span className="wechat-caption">WeChat: coachjkf</span>
            )}
          </div>

          <a
            href="https://www.instagram.com/enhancedbadminton/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
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