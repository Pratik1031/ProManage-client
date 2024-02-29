import React from 'react';

import Styles from './sidebar.module.css';
import logo from '../../Assets/Icons/Logo.svg';
import Logout from '../../Assets/Icons/Logout.svg';

const Sidebar = () => {
  return (
    <div className={Styles.sidebar_container}>
      <div className={Styles.top_side}>
        <div className={Styles.logo}>
          <img src={logo} alt='Logo' />
        </div>
        <div className={Styles.list_item}>
          <ul>
            <li>
              <button>Board</button>
            </li>
            <li>
              <button>Analytics</button>
            </li>
            <li>
              <button>Settings</button>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src={Logout} alt='logout' />
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Sidebar;
