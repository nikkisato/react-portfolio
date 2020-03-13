import React from 'react';
import './Hero.scss';
import Particles from 'react-particles-js';

import Typical from 'react-typical';

const Hero = () => (
  <div className='hero'>
    <div className='text'>
      <h1 className='name'>Hello, I'm Nikki Sato</h1>
      <div className='type'>
        <Typical
          className='type'
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
    <Particles
      className='particle'
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out'
          }
        }
      }}
    ></Particles>
  </div>
);

export default Hero;
