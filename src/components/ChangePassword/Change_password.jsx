import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Styles from './changePassword.module.css';
import user_icon from '../../Assets/Icons/Profile.svg';
import password_icon from '../../Assets/Icons/lock.svg';

const ChangePassword = () => {
  const [name, setName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleConfirmPasswordChange = (e) => {
    const newPasswordValue = e.target.value;
    setNewPassword(newPasswordValue);
    setError(
      oldPassword === newPasswordValue
        ? 'Passwords  matched please change '
        : ''
    );
  };

  useEffect(() => {
    getPrefillData();
  }, []);

  const getPrefillData = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8080/api/v1/users/prefilled'
      );
      const { name } = res.data;
      setName(name);
    } catch (error) {
      console.log('Prefilled Data Error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (oldPassword == newPassword) {
      setError(' Passwords matched please change');
      return;
    }
    try {
      const result = await axios.post(
        'http://localhost:8080/api/v1/users/change',
        {
          name,
          oldPassword,
          newPassword,
        }
      );
      console.log(result);
      toast.success(`Password Successfully Changed ${name}`, {
        duration: 4000,
        position: 'top-right',
      });
    } catch (error) {
      console.log(error);
      toast.error('Password Change Failed', {
        duration: 4000,
        position: 'top-right',
      });
    }
  };

  return (
    <div className={Styles.board}>
      <form onSubmit={handleSubmit}>
        <div className={Styles.login}>
          <div className={Styles.name}>
            <img src={user_icon} alt='icon' />
            <input
              type='text'
              value={name}
              readOnly
              placeholder='Name'
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={Styles.old}>
            <img src={password_icon} alt='icon' />
            <input
              type='password'
              placeholder='Old Password'
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div className={Styles.new}>
            <img src={password_icon} alt='icon' />
            <input
              type='password'
              placeholder='New Password'
              onChange={handleConfirmPasswordChange}
              autoComplete='new-password'
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type='submit' className={Styles.update_btn}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
