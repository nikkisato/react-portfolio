import React from 'react';
import './Projects.scss';
import petPals from '../assets/pet-pals.png';
import NagMe from '../assets/NagMe.png';
import covrLettr from '../assets/covrletter.png';

const Projects = () => (
  <>
    <div className='polaroids'>
      <div className='item'>
        <div className='polaroid'>
          <img src={petPals} />
          <div className='caption'>
            Pet Pals
            <p>
              Share the responsibilities of letting your dog out with a
              neighbor. Provides detailed profile, with profile pictures, with
              real time messaging, and suggestions of local places in meet.
            </p>
            <a href='https://pet-pals.netlify.com/'>Website</a> |
            <a href='https://github.com/Pet-Project-Alchemy'>Github</a>
            <p> Tech Stack: React, MongoDB, Express, Node.js </p>
          </div>
        </div>
      </div>

      <div className='item'>
        <div className='polaroid'>
          <img src={covrLettr} />
          <div className='caption'>
            CovrLettr
            <p>
              Writing Cover Letters for people who are entering the software
              developer field. The program will ask a series of questions, take
              in user input, and output a customized cover letter.
            </p>
            <a href='https://github.com/covrLettr'>Github</a>
            <p> Tech Stack: React, MongoDB, Express, Node.js </p>
          </div>
        </div>
      </div>

      <div className='item'>
        <div className='polaroid'>
          <img src={NagMe} />
          <div className='caption'>
            Nag Me
            <p>
              NagMe is the super proactive task and reminder app, that uses
              Pushover (push notifications) to send notifications to your phone.
              Users can add, update, delete Nags.
            </p>
            <a href='https://nagmeapp.herokuapp.com/'>Website</a> |
            <a href='https://github.com/dotPush'>Github</a>
            <p>Tech Stack: PostgresSQL, Express, Node.js, Javascript</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Projects;
