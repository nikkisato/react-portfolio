import React from 'react';
import './About.scss';
import nikki from '../assets/nikki-sato.jpg';
import photo from '../assets/photo.jpg';
import smile from '../assets/smile.jpg';

const About = () => (
  <>
    <div className='about-polaroids'>
      <div className='about-item'>
        <div className='about-polaroid'>
          <img src={photo} />
          <div className='about-caption'>Photographer</div>
        </div>
      </div>

      <div className='about-item'>
        <div className='about-polaroid'>
          <img src={nikki} />
          <div className='about-caption'>Developer</div>
        </div>
      </div>

      <div className='about-item'>
        <div className='about-polaroid'>
          <img src={smile} />
          <div className='about-caption'>Always Smiling</div>
        </div>
      </div>
    </div>
    <div className='intro'>
      <p>
        I'm a full stack developer, I enjoy combining my creative ideas with
        coding. When I'm not in front of the computer, I'm either taking
        exploring portland through the lens of a camera, or playing video games.
      </p>
    </div>

    <div className='social-container'>
      <h1 className='title'>Connect With Me!</h1>
      <ul className='social-accordion'>
        <li className='social-tab'>
          <div className='social mail'>
            <a
              href='mailto:nikki.satopdx@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Mail
            </a>
          </div>
          <div className='content'>
            <h1 className='title'>Mail</h1>
            <p>Send a Mail </p>
          </div>
        </li>

        <li className='social-tab'>
          <div className='social twitter'>
            <a
              href='https://twitter.com/nikkisatodev'
              target='_blank'
              rel='noopener noreferrer'
            >
              Twitter
            </a>
          </div>
          <div className='content'>
            <h1 className='title'>Twitter</h1>
            <p>
              Follow me on Twitter!
            </p>
          </div>
        </li>

        <li className='social-tab'>
          <div className='social linkedin'>
            <a
              href='https://www.linkedin.com/in/nikkisato/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkedin
            </a>
          </div>
          <div className='content'>
            <h1 className='title'>LinkedIn</h1>
            <p>Connect with me on a professional level on Linkedin</p>
          </div>
        </li>
        <li className='social-tab'>
          <div className='social instagram'>
            <a
              href='https://www.instagram.com/nikkisato.visuals/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
          </div>
          <div className='content'>
            <h1 className='title'>Instagram</h1>
            <p>
              Follow me on Instragram for a more personal look into my life and
              photography work
            </p>
          </div>
        </li>
        <li className='social-tab'>
          <div className='social github'>
            <a
              href='https://github.com/nikkisato'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </div>
          <div className='content'>
            <h1 className='title'>Github</h1>
            <p>
              Check out my Github for tutorial code, my personal projects and
              more
            </p>
          </div>
        </li>

        <li className='social-tab'>
          <div className='social resume'>
            <a
              href='https://drive.google.com/file/d/1ZXS5Dgxo04dsutkTA7dBjh4zSDEdL1TI/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume PDF
            </a>
          </div>
          <div className='content'>
            <h1 className='title'>Resume</h1>
            <p>See My Resume</p>
          </div>
        </li>
      </ul>
    </div>

    <div className='tech-container'>
      <h1 className='title'>Tech Stack</h1>
      <ul className='tech-accordion'>
        <li className='tech-tab'>
          <div className='tech language'>
            <p>Languages</p>
          </div>
          <div className='content'>
            <h1 className='title'>Languages</h1>
            <p>HTML5</p>
            <p> CSS3 </p>
            <p>Javascript</p>
          </div>
        </li>
        <li className='tech-tab'>
          <div className='tech frontEnd'>
            <p>Front End</p>
          </div>
          <div className='content'>
            <h1 className='title'>Front End</h1>
            <p>React</p>
            <p>Redux</p>
          </div>
        </li>
        <li className='tech-tab'>
          <div className='tech backEnd'>
            <p>Backend</p>
          </div>
          <div className='content'>
            <h1 className='title'>Backend</h1>
            <p>Node.js</p>
            <p>Express.js</p>
          </div>
        </li>
        <li className='tech-tab'>
          <div className='tech database'>
            <p>Database</p>
          </div>
          <div className='content'>
            <h1 className='title'>Database</h1>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>PostgreSQL</p>
          </div>
        </li>
        <li className='tech-tab'>
          <div className='tech tools'>
            <p>Tools</p>
          </div>
          <div className='contentTools'>
            <p>Github</p>
            <p>VSCode</p>
            <p>Heroku</p>
            <p>Netlify</p>
            <p>Slack</p>
            <p>Trello</p>
            <p>Adobe Creative Cloud</p>
          </div>
        </li>

        <li className='tech-tab'>
          <div className='tech learning'>
            <p>Currently Learning</p>
          </div>
          <div className='content'>
            <h1 className='title'>Currently Learning</h1>
            <p>Bootstrap</p>
            <p>Sass</p>
            <p>Tailwind CSS</p>
            <p>Vue.js</p>
          </div>
        </li>
      </ul>
    </div>
  </>
);

export default About;
