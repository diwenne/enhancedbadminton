import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <NavLink to="/" className="logo">Enhanced Badminton</NavLink>
      <nav>
        <ul className="nav-links">
          {/* New Home link added here */}
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
    </header>
  );
}
export default Header;
