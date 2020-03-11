import React from 'react';
// import styles from './Header.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import styles from '../starwars/starWars.scss';

const Header = () => {
  $('.toggle-icon').click(function() {
    $('#nav-container').toggleClass('pushed');
  });

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <label
            className={styles.navbarToggle}
            id='js-navbar-toggle'
            forName='chkToggle'
          >
            <div id='nav-container'>
              <div
                className={[styles.toggleIcon, styles.navbarToggle]}
                id='js-navbar-toggle'
                forName='chkToggle'
              >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
              </div>
            </div>
          </label>
          <input type='checkbox' id='chkToggle'></input>

          <ul className='main-nav' id='js-menu'>
            <li className='green'>
              <Link to='/'>
                <p className='nav-links '>Home</p>
              </Link>
            </li>

            {/* <li className='blue'>
              <Link to='/about'>
                <p className='nav-links'>About</p>
              </Link>
            </li>

            <li className='purple'>
              <Link to='/projects'>
                <p className='nav-links'>Projects</p>
              </Link>
            </li>

            <li className='red'>
              <Link to='/tech'>
                <p className='nav-links'>Tech Stack</p>
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
