import React from 'react';
import styles from './Form.css';

const Form = () => (
  <div className={styles.background}>
    <div className={styles.container}>
      <div className={styles.screen}>
        <div className={styles.screenHeader}>
          <div className={styles.screenHeaderLeft}>
            <div className={styles.close}></div>
            <div className={styles.maximize}></div>
            <div className={styles.minimize}></div>
          </div>

         
        </div>

        <div className={styles.screenBody}>
          <div className={styles.screenBodyItemLeft}>
            <div className={styles.appTitle}>
              <span>Contact</span>
            </div>
            {/* //13 */}
          </div>

          <div className={styles.screenBodyItem}>
            <form
              className={styles.appForm}
              name='contact'
              method='POST'
              data-netlify='true'
            >
              <div className={styles.appFormGroup}>
                <input
                  className={styles.appFormControl}
                  type='text'
                  name=''
                  placeholder='NAME'
                ></input>
              </div>
              <div className={styles.appFormGroup}>
                <input
                  className={styles.appFormControl}
                  type='text'
                  name=''
                  placeholder='EMAIL'
                ></input>
              </div>

              <div className={styles.messages}>
                <textarea
                  className={styles.messagesInput}
                  id='txtArea'
                  //   rows='10'
                  //   cols='70'
                  placeholder='MESSAGE'
                ></textarea>
              </div>
              <div className={styles.buttons}>
                <button className={styles.appFormButton}>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Form;
