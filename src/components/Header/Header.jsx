import React from 'react';
import moment from 'moment';
import styles from './header.module.css';
import { useAuthContext } from '../../hooks/useAuthContext';

const Header = () => {
  const formattedDate = moment().format(' Do MMM, YYYY');
  const { data } = useAuthContext() || {};
  const userName = data && data.user && data.user.name;
  return (
    <div className={styles.header_container}>
      <div className={styles.top_section}>
        <div className={styles.Welcome}>Welcome {userName} </div>
        <div className={styles.date}>{formattedDate} </div>
      </div>
      <div className={styles.heading_section}>
        <div className={styles.heading}>Board</div>
        <div>
          <select className={styles.date_selection}>
            <option value='Today' style={{ padding: '1rem' }}>
              Today
            </option>
            <option value='This Week' style={{ padding: '1rem' }}>
              This Week
            </option>
            <option value='This Month' style={{ padding: '1rem' }}>
              This Month
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
