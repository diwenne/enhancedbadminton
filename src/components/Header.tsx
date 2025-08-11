import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '/enhanced-label.png'; // Make sure this logo is in your /public folder

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <img src={Logo} alt="Enhanced Badminton Logo" className="logo-image" />
        </NavLink>
        <nav>
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
      </div>
    </header>
  );
}
export default Header;
