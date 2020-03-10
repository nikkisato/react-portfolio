import React from 'react';
import styles from './About.css';
import nikki from '../assets/nikki-sato.jpg';
import photo from '../assets/photo.jpg';
import smile from '../assets/smile.jpg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const About = () => (
  <>
    <div className={styles.polaroids}>
      <div className={styles.item}>
        <div className={styles.polaroid}>
          <img src={photo} />
          <div className={styles.caption}>Photographer</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.polaroid}>
          <img src={nikki} />
          <div className={styles.caption}>Developer</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.polaroid}>
          <img src={smile} />
          <div className={styles.caption}>Always Smiling</div>
        </div>
      </div>
    </div>
    <div className={styles.intro}>
      <p>
        I'm a full stack developer, I enjoy combining my creative ideas with
        coding. When I'm not in front of the computer, I'm either taking
        exploring portland through the lens of a camera, or playing video games.
      </p>
      <br></br>
      <h3>Connect With me!</h3>
    </div>

    <div className={styles.socialIcon} style={{ color: 'black' }}>
      <br></br>
      <a href='https://github.com/nikkisato'>
        <FaGithubSquare size={32} />
      </a>

      <a href='https://www.linkedin.com/in/nikkisato/'>
        <FaLinkedin size={32} />
      </a>

      <a href='https://twitter.com/nikkisatodev'>
        <FaTwitterSquare size={32} />
      </a>
      <Link to='/contact'>
        <MdEmail size={32} />
      </Link>
    </div>
  </>
);

export default About;
