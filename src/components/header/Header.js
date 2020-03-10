import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  $('.toggle-icon').click(function() {
    $('#nav-container').toggleClass('pushed');
  });
  /*** starwars.com's Toggle Icon Animation ***/

  return (
    <header className={styles.Header}>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/projects'>
            <li>Projects</li>
          </Link>
          <Link to='/tech'>
            <li>Tech Stack</li>
          </Link>
        </ul>
        <div id='nav-container'>
          <div className='toggle-icon'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
