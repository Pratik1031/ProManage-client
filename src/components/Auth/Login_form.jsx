import React, { useState } from 'react';
import Styles from './login_form.module.css';
import Mail from '../../Assets/Icons/mail.svg';
import lock from '../../Assets/Icons/lock.svg';
import Signup_form from './Signup_form';
import axios from 'axios';

const Login_form = () => {
  // Use State For Active Form
  const [active, setActive] = useState('login');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  // Function To Switch Between Forms
  const handleFormSwitch = () => {
    setActive(active === 'login' ? 'signup' : 'login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && emailRegex.test(email)) {
      return setError('Invalid email format');
    }
    if (!password && passwordRegex.test(password)) {
      return setError(
        'Password must be 8+ characters, a mix of letters, numbers, and uppercase/lowercase'
      );
    }

    const userData = { email, password };
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/users/login`,
        userData
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Login Error :', error);
    }
  };

  return (
    <>
      {active === 'login' && (
        <div className={Styles.LoginForm}>
          <form
            action='http:localhost:8080/api/v1/users/login'
            method='post'
            onSubmit={handleSubmit}
          >
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={error && Styles.error}>{error}</div>
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
