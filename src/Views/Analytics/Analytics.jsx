import React from 'react';
import Styles from './analytics.module.css';
import Sidebar from '../../components/SideBar/Sidebar';
import Analytics_table from '../../components/AnalyticsTable/Analytics_table';

const Analytics = () => {
  return (
    <>
      <div className={Styles.analytics_container}>
        <Sidebar />
        <div className={Styles.analytics_sub_container}>
          <div className={Styles.heading}>Analytics</div>
          <div className={Styles.table_data}>
            <Analytics_table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
