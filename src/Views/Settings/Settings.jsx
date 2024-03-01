import React from 'react';
import Styles from './settings.module.css';
import Sidebar from '../../components/SideBar/Sidebar';

const Settings = () => {
  return (
    <>
      <div className={Styles.settings_container}>
        <Sidebar />
        <div className={Styles.settings_sub_container}></div>
      </div>
    </>
  );
};

export default Settings;
