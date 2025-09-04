import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '/enhanced-label.png';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger and close icons

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Prevent body from scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Use a Fragment <> to return multiple top-level elements
    <>
      <header className="header">
        <div className="header-container">
          <NavLink to="/" className="logo">
            <img src={Logo} alt="Enhanced Badminton Logo" className="logo-image" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li 
                className="nav-item-dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <NavLink to="/training" className={({ isActive }) => isActive ? "active" : ""}>
                  Training
                </NavLink>
                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li><NavLink to="/training">Training Programs</NavLink></li>
                    <li><NavLink to="/training/privates">Private Coaching</NavLink></li>
                  </ul>
                )}
              </li>
              <li><NavLink to="/coaches">Coaches</NavLink></li>
              <li><NavLink to="/rentals">Court Rentals</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu (Moved outside of <header>) */}
      {/* It is now always rendered, and visibility is controlled by the 'is-open' class */}
      <nav className={`mobile-nav-links ${isMobileMenuOpen ? 'is-open' : ''}`}>
        {/* === ADD THIS BUTTON === */}
        <button className="mobile-close-btn" onClick={toggleMobileMenu} aria-label="Close menu">
          <FiX />
        </button>
        
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/training">Training</NavLink>
        <NavLink to="/coaches">Coaches</NavLink>
        <NavLink to="/rentals">Court Rentals</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}
export default Header;