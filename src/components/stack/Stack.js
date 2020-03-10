import React from 'react';
import styles from './Stack.css';

export default function techStack() {
  return (
    <>
      <div className={styles.techAndTool}>
        <div className={styles.tech}>
          <div className={styles.page}>
            <h3 className='animated bounceInDown delay-1s'>Languages</h3>
            <div className={styles.alignTech}>
              <p className='animated fadeInDown delay-1s'>HTML 5</p>
              <p className='animated fadeInDown delay-1s'>CSS 3</p>
              <p className='animated fadeInDown delay-1s'>Javascript</p>
            </div>
            <h3 className='animated bounceInDown delay-2s'>Front End </h3>
            <div className={styles.alignTech}>
              <p className='animated fadeInDown delay-2s'>React </p>
              <p className='animated fadeInDown delay-2s'>Redux</p>
            </div>

            <h3 className='animated bounceInDown delay-3s'>Back End</h3>
            <div className={styles.alignTech}>
              <p className='animated fadeInDown delay-3s'>Node.js</p>
              <p className='animated fadeInDown delay-3s'>Express.js</p>
            </div>

            <h3 className='animated bounceInDown delay-4s'>Databases</h3>
            <div className={styles.alignTech}>
              <p className='animated fadeInDown delay-4s'>MongoDB</p>
              <p className='animated fadeInDown delay-4s'>Mongoose</p>
              <p className='animated fadeInDown delay-4s'>PostgreSQL</p>
            </div>
          </div>
        </div>
        <div className={styles.tool}>
          <div className={styles.page}>
            <h3 className='animated bounceInDown delay-5s'>Tools</h3>
            <div className={styles.toolsTech}>
              <div className={styles.alignTech}>
                <p className='animated rollIn delay-5s'>Github</p>
                <p className='animated rollIn delay-5s'>VS Code</p>
                <p className='animated rollIn delay-5s'>Heroku</p>
              </div>
              <div className={styles.alignTech}>
                <p className='animated rollIn delay-5s'>Netlify</p>
                <p className='animated rollIn delay-5s'>Slack</p>
                <p className='animated rollIn delay-5s'>Trello</p>
                <p className='animated rollIn delay-5s'>Adobe Creative Suite</p>
              </div>
              <h3 className='animated bounceInDown delay-5s'>
                Currently Learning
              </h3>
              <div className={styles.alignTech}>
                <p className='animated bounceInRight delay-5s'>Bootstrap</p>
                <p className='animated bounceInRight delay-5s'>Tailwind CSS</p>
              </div>
              <div className={styles.alignTech}>
                <p className='animated bounceInRight delay-5s'>SASS</p>
                <p className='animated bounceInRight delay-5s'>VUE.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
