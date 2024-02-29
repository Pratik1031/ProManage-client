import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Login_form from './Login_form';
import Styles from './signup.module.css';
import user_icon from '../../Assets/Icons/Profile.svg';
import email_icon from '../../Assets/Icons/mail.svg';
import password_icon from '../../Assets/Icons/lock.svg';

const Signup_form = () => {
  const [active, setActive] = useState('signup');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, confirmPassword: value });
    setError(formData.password !== value ? 'Password doesn’t match' : '');
  };

  const handleFormSwitch = () => {
    setActive(active === 'signup' ? 'login' : 'signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(formData.email)) {
      return setError('Invalid email format');
    }

    if (!passwordRegex.test(formData.password)) {
      return setError(
        'Password must be 8+ characters, a mix of letters, numbers, and uppercase/lowercase'
      );
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Password doesn’t match');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/users/register`,
        formData
      );

      toast.success(`Registered Successfully! Welcome ${formData.name}`, {
        duration: 4000,
        position: 'top-right',
      });

      return <Navigate to='/dashboard' replace />;
    } catch (error) {
      toast.error('Registration Failed', {
        duration: 4000,
        position: 'top-right',
      });
      console.error('Signup Error:', error);
    }
  };

  return (
    <>
      {active === 'signup' && (
        <div className={Styles.SignupForm}>
          <div>
            <h2>Register</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={Styles.signup}>
              <div className={Styles.signup_name}>
                <img src={user_icon} alt='user_profile' />
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  id='name'
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
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
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className={Styles.signup_password}>
                <img src={password_icon} alt='icon' />
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
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
