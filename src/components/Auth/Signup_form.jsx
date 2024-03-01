import React, { useState } from 'react';
import Login_form from './Login_form';
import Styles from './signup.module.css';
import user_icon from '../../Assets/Icons/Profile.svg';
import email_icon from '../../Assets/Icons/mail.svg';
import password_icon from '../../Assets/Icons/lock.svg';
import { useRegister } from '../../hooks/useRegister';

const Signup_form = () => {
  const [active, setActive] = useState('signup');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const { signup, error, isLoading } = useRegister();

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setFormData({ ...formData, confirmPassword: value });
  };

  const handleFormSwitch = () => {
    setActive(active === 'signup' ? 'login' : 'signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(
      formData.name,
      formData.email,
      formData.password,
      formData.confirmPassword
    );
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
                  value={formData.name}
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
                  value={formData.email}
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
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <div className={Styles.signup_confpassword}>
                <img src={password_icon} alt='icon' />
                <input
                  type='password'
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Confirm Password'
                  value={formData.confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  autoComplete='new-password'
                />
              </div>
              <div className={Styles.signup_footer}>
                <button
                  disabled={isLoading}
                  type='submit'
                  className={Styles.register_btn}
                >
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
              {error && <div className={Styles.error}>{error}</div>}
            </div>
          </form>
        </div>
      )}
      {active === 'login' && <Login_form />}
    </>
  );
};

export default Signup_form;
