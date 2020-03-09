import React from 'react';
import styles from './Header.css';

const Header = () => (
  <header className={styles.Header}>
    <nav>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Stacks</li>
      </ul>
    </nav>
  </header>
);

export default Header;
