import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light w-100" style={{ width: '100%' }}>
      <div className="container d-flex align-items-center w-100"> 
        <Link className="navbar-brand" to="/">
          Complexifi
        </Link>
<ul className="navbar-nav ms-auto d-flex flex-row gap-3"> 
  <li className="nav-item">
            <Link className="nav-link" to="/" end style={{ color: 'blue' }}>
              Home
            </Link>
  </li>
  <li className="nav-item">
            <Link className="nav-link" to="/about" style={{ color: 'blue' }}>
              About
            </Link>
  </li>
  <li className="nav-item">
            <Link className="nav-link" to="/resources" style={{ color: 'blue' }}>
              Resources
            </Link>
  </li>
</ul>
      </div>
    </nav>
  );
};

export default Navbar;
