import React from 'react';
import styles from './Hero.css';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

import Typical from 'react-typical';

const Hero = () => (
  <div className={styles.hero}>
    <h1 className={styles.name}>Hello, I'm Nikki Sato</h1>
    <div className={styles.type}>
      <Typical
        className={styles.type}
        steps={[
          2500,
          'Front End Developer',
          3500,
          'Full Stack Developer',
          3500,
          'Photographer',
          3500,
          'Fun Sized Nerd!!',
          3500
        ]}
        loop={Infinity}
        wrapper='h2'
      />
    </div>
  </div>
);

export default Hero;
