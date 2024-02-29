import React, { useState } from 'react';
import Login_form from './Login_form';
import Styles from './signup.module.css';
import user_icon from '../../Assets/Icons/Profile.svg';
import email_icon from '../../Assets/Icons/mail.svg';
import password_icon from '../../Assets/Icons/lock.svg';
import axios from 'axios';

const Signup_form = () => {
  const [active, setActive] = useState('signup');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError(password !== e.target.value ? 'password doesn’t match' : '');
  };

  const handleFormSwitch = () => {
    setActive(active === 'signup' ? 'login' : 'signup');
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
    if (password !== confirmPassword) {
      setError('Password doesn’t match');
      return;
    }

    const registerData = { name, email, password, confirmPassword };
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/users/register`,
        registerData,
        {
          method: 'post',
          headers: 'content-type : application/json',
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('Signup Error :', error);
    }
  };

  return (
    <>
      {active === 'signup' && (
        <div className={Styles.SignupForm}>
          <div>
            <h2>Register</h2>
          </div>
          <form
            action='http:localhost:8080/api/v1/users/register'
            method='post'
            onSubmit={handleSubmit}
          >
            <div className={Styles.signup}>
              <div className={Styles.signup_name}>
                <img src={user_icon} alt='user_profile' />
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  id='name'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={Styles.signup_email}>
                <img src={email_icon} alt='icon' />
                <input
                  type='email'
                  placeholder='Email'
                  id='email'
                  name='email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={Styles.signup_password}>
                <img src={password_icon} alt='icon' />
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={Styles.signup_confpassword}>
                <img src={password_icon} alt='icon' />
                <input
                  type='password'
                  name='confpassword'
                  id='confpassword'
                  placeholder='Confirm Password'
                  onChange={handleConfirmPasswordChange}
                  autoComplete='new-password'
                />
              </div>
              <div className={error && Styles.error}>
                <span>{error}</span>
              </div>
              <div className={Styles.signup_footer}>
                <button type='submit' className={Styles.register_btn}>
                  Register
                </button>
                <p>Have an account ?</p>
                <button
                  className={Styles.login_button}
                  onClick={handleFormSwitch}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {active === 'login' && <Login_form />}
    </>
  );
};
export default Signup_form;
