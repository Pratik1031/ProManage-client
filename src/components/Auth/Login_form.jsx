import React, { useState } from 'react';
import Styles from './login_form.module.css';
import Mail from '../../Assets/Icons/mail.svg';
import lock from '../../Assets/Icons/lock.svg';
import Signup_form from './Signup_form';

const Login_form = () => {
  // Use State For Active Form
  const [active, setActive] = useState('login');

  // Function To Switch Between Forms
  const handleFormSwitch = () => {
    setActive(active === 'login' ? 'signup' : 'login');
  };

  //

  return (
    <>
      {active === 'login' && (
        <div className={Styles.LoginForm}>
          <form action='/create' method='post'>
            <div>
              <h2>Login</h2>
            </div>
            <div className={Styles.login_email}>
              <img src={Mail} alt='mail' />
              <input
                type='text'
                id='user_email'
                name='user_email '
                placeholder='Email'
                required
              />
            </div>
            <div className={Styles.login_password}>
              <img src={lock} alt='lock' />
              <input
                type='password'
                id='user_password'
                name='user_password'
                placeholder='Password'
                required
              />
            </div>
            <div className={Styles.login_footer}>
              <button type='submit' className={Styles.login_button}>
                Login
              </button>
              <p>Have no account yet?</p>
              <button
                className={Styles.register_btn}
                onClick={handleFormSwitch}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      )}
      {active === 'signup' && <Signup_form />}
    </>
  );
};

export default Login_form;
