import React, { useState } from 'react';
import Styles from './login_form.module.css';
import Mail from '../../Assets/Icons/mail.svg';
import Lock from '../../Assets/Icons/lock.svg';
import Signup_form from './Signup_form';
import { useLogin } from '../../hooks/useLogin';

const Login_form = () => {
  const [active, setActive] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleFormSwitch = () => {
    setActive(active === 'login' ? 'signup' : 'login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    await login(userData.email, userData.password);
  };

  return (
    <>
      {active === 'login' && (
        <div className={Styles.LoginForm}>
          <form action='/login' method='post' onSubmit={handleSubmit}>
            <div>
              <h2>Login</h2>
            </div>
            <div className={Styles.login_email}>
              <img src={Mail} alt='mail' />
              <input
                type='text'
                id='user_email'
                name='user_email'
                placeholder='Email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={Styles.login_password}>
              <img src={Lock} alt='lock' />
              <input
                type='password'
                id='user_password'
                name='user_password'
                placeholder='Password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={error && Styles.error}>{error}</div>
            <div className={Styles.login_footer}>
              <button
                type='submit'
                disabled={isLoading}
                className={Styles.login_button}
              >
                Login
              </button>
              <p>Don't have an account yet?</p>
              <button
                className={Styles.register_btn}
                onClick={handleFormSwitch}
              >
                Register
              </button>
            </div>
            {error && <div className={Styles.error}>{error}</div>}
          </form>
        </div>
      )}
      {active === 'signup' && <Signup_form />}
    </>
  );
};

export default Login_form;
