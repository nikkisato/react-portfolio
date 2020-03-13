import React from 'react';
import './About.scss';
import nikki from '../assets/nikki-sato.jpg';
import photo from '../assets/photo.jpg';
import smile from '../assets/smile.jpg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const About = () => (
  <>
    <div className='polaroids'>
      <div className='item'>
        <div className='polaroid'>
          <img src={photo} />
          <div className='caption'>Photographer</div>
        </div>
      </div>

      <div className='item'>
        <div className='polaroid'>
          <img src={nikki} />
          <div className='caption'>Developer</div>
        </div>
      </div>

      <div className='item'>
        <div className='polaroid'>
          <img src={smile} />
          <div className='caption'>Always Smiling</div>
        </div>
      </div>
    </div>
    <div className='intro'>
      <p>
        I'm a full stack developer, I enjoy combining my creative ideas with
        coding. When I'm not in front of the computer, I'm either taking
        exploring portland through the lens of a camera, or playing video games.
      </p>
      <br></br>
      <h3>Connect With me!</h3>
    </div>

    <div className='socialIcon' style={{ color: 'black' }}>
      <br></br>
      <a
        href='https://github.com/nikkisato'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaGithubSquare size={32} />
      </a>

      <a
        href='https://www.linkedin.com/in/nikkisato/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaLinkedin size={32} />
      </a>

      <a
        href='https://twitter.com/nikkisatodev'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FaTwitterSquare size={32} />
      </a>
      <a
        href='mailto:nikki.satopdx@gmail.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <MdEmail size={32} />
      </a>
    </div>
  </>
);

export default About;
