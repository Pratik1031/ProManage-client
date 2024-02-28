/* ************************ Imports ************************ */

import React from 'react';
import Styles from './register.module.css';
import Art from '../../Assets/Images/Art.png';
import Login_form from '../../components/Auth/Login_form';

/* Main Methods  */
const Register = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.side_img}>
        <div className={Styles.image}>
          <img src={Art} alt='Art Png' />
        </div>
        <div className={Styles.information}>
          <h3 className={Styles.side_img_title}>Welcome aboard my friend</h3>
          <p className={Styles.side_img_text}>
            just a couple of clicks and we start
          </p>
        </div>
      </div>
      <div className={Styles.form}>
        <Login_form />
      </div>
    </div>
  );
};

export default Register;
