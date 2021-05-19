import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Timer from './Timer';
import './NavBar.css';
import logo from '../codingal.png';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Codingal
          <img src={logo} width="80" height="40" />
          {/* <i className='fab fa-firstdraft' /> */}
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              <Timer/>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/post'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Post
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;