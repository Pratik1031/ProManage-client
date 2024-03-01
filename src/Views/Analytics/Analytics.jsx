import React from 'react';
import Styles from './analytics.module.css';
import Sidebar from '../../components/SideBar/Sidebar';

const Analytics = () => {
  return (
    <>
      <div className={Styles.analytics_container}>
        <Sidebar />
        <div className={Styles.analytics_sub_container}></div>
      </div>
    </>
  );
};

export default Analytics;
