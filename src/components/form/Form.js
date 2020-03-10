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
          </div>

          <div className={styles.screenBodyItem}>
            <form
              className={styles.appForm}
              name='contact'
              method='POST'
              data-netlify='true'
            >
              <div className={styles.appFormGroup}>
                <label>
                  <input
                    className={styles.appFormControl}
                    type='text'
                    name='name'
                    placeholder='NAME'
                  ></input>
                </label>
              </div>
              <div className={styles.appFormGroup}>
                <label>
                  <input
                    className={styles.appFormControl}
                    type='email'
                    name='email'
                    placeholder='EMAIL'
                  ></input>
                </label>
              </div>

              <div className={styles.messages}>
                <label>
                  <textarea
                    className={styles.messagesInput}
                    placeholder='MESSAGE'
                    name='message'
                  ></textarea>
                </label>
              </div>
              <div className={styles.buttons}>
                <button type='submit' className={styles.appFormButton}>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Form;
