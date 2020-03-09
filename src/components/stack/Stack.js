import React from 'react';
import styles from './Stack.css';

export default function techStack() {
  return (
    <>
      <div className={styles.techAndTool}>
        <div className={styles.tech}>
          <h3>Languages</h3>
          <div className={styles.alignTech}>
            <p>HTML 5</p>
            <p>CSS 3</p>
            <p>Javascript</p>
          </div>
          <h3>Front End </h3>
          <div className={styles.alignTech}>
            <p>React </p>
            <p>Redux</p>
          </div>

          <h3>Back End</h3>
          <div className={styles.alignTech}>
            <p>Node.js</p>
            <p>Express.js</p>
          </div>

          <h3>Databases</h3>
          <div className={styles.alignTech}>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>PostgreSQL</p>
          </div>
        </div>
        <div className={styles.tool}>
          <h3>Tools</h3>
          <div className={styles.toolsTech}>
            <p>Github</p>
            <p>VS Code</p>
            <p>Heroku</p>
            <p>Netlify</p>
            <p>Slack</p>
            <p>Trello</p>
            <p>Adobe Creative Suite</p>
          </div>
        </div>
      </div>
      <h3>Currently Learning</h3>
      <div className={styles.alignTech}>
        <p>Bootstrap</p>
        <p>Tailwind CSS</p>
        <p>SASS</p>
        <p>VUE.js</p>
      </div>
    </>
  );
}
