import React from 'react';
import styles from './Hero.css';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

const Hero = () => (
  <div className={styles.hero}>
    <h1 className={styles.name}>Hello, I'm Nikki Sato</h1>
    <div className={styles.type}>
      <TypistLoop interval={800}>
        {[
          'Front End Developer',
          'Full Stack Developer',
          'Photographer',
          'Fun Sized Nerd!!'
        ].map(text => (
          <Typist key={text} className={styles.Typist} startDelay={500}>
            {text}
            <Typist.Backspace count={22} delay={1000} />
          </Typist>
        ))}
      </TypistLoop>
    </div>
  </div>
);

export default Hero;
