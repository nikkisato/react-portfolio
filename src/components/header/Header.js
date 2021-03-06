import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      {/* className={`navigation__nav ${open ? 'navigation__nav-open' : 'navigation__nav-close'}`} */}
      <header>
        <nav className='navbar'>
          <label
            className='navbar-toggle'
            id='js-navbar-toggle'
            htmlFor='chkToggle'
          >
            <div id='nav-container'>
              <div
                className={`toggle-icon navbar-toggle ${
                  open ? 'toggle-icon' : 'pushed'
                }`}
                onClick={() => setOpen(!open)}
                id='js-navbar-toggle'
                htmlFor='chkToggle'
              >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
              </div>
            </div>
          </label>
          <input type='checkbox' id='chkToggle'></input>
          <ul id='js-menu' className='main-nav'>
            <li className='green'>
              <Link to='/'>
                <p className='nav-links '>Home</p>
              </Link>
            </li>

            <li className='blue'>
              <Link to='/about'>
                <p className='nav-links'>About</p>
              </Link>
            </li>

            <li className='purple'>
              <Link to='/projects'>
                <p className='nav-links'>Projects</p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
