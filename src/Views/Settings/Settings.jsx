import React from 'react';

import Styles from './settings.module.css';
import Sidebar from '../../components/SideBar/Sidebar';
import Change_password from '../../components/ChangePassword/Change_password';

const Settings = () => {
  return (
    <>
      <div className={Styles.settings_container}>
        <Sidebar />
        <div className={Styles.settings_sub_container}>
          <div className={Styles.heading}>Settings</div>
          <div className={Styles.form}>
            <Change_password />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
