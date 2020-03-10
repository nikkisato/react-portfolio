import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
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
      </ul>
    </nav>
  </header>
);

export default Header;
