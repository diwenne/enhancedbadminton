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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
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
                  <li><NavLink to="/training/groups">Group Lessons</NavLink></li>
                  <li><NavLink to="/training/privates">Private Coaching</NavLink></li>
                  <li><NavLink to="/training/programs">Performance Programs</NavLink></li>
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

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/training">Training</NavLink>
          <NavLink to="/coaches">Coaches</NavLink>
          <NavLink to="/rentals">Court Rentals</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      )}
    </header>
  );
}
export default Header;
