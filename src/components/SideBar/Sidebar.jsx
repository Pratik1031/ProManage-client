import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import Style from './sidebar.module.css';
import logo from '../../Assets/Icons/Logo.svg';
import Logout from '../../Assets/Icons/Logout.svg';
import setting_icon from '../../Assets/Icons/settings.svg';
import Board_icon from '../../Assets/Icons/layout.svg';
import analytics_icon from '../../Assets/Icons/database.svg';

const Sidebar = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (page) => {
    navigate(`/${page}`);
    setActiveButton(page);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/v1/users/logout');
      toast.success(`Logout Successfully ${res.data.message}`, {
        duration: 4000,
        position: 'top-right',
      });
    } catch (error) {
      toast.error('Logout Failed', {
        duration: 4000,
        position: 'top-right',
      });
    }
  };

  return (
    <div className={Style.sidebar_container}>
      <div className={Style.top_side}>
        <div className={Style.logo}>
          <img src={logo} alt='Logo' />
        </div>
        <div className={Style.list_item}>
          <ul>
            <li>
              <button
                onClick={() => handleButtonClick('dashboard')}
                className={
                  activeButton === 'dashboard'
                    ? Style.active_button
                    : Style.inactive_button
                }
              >
                <img src={Board_icon} alt='icons' />
                <h4>Board</h4>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('analytics')}
                className={
                  activeButton === 'analytics'
                    ? Style.active_button
                    : Style.inactive_button
                }
              >
                <img
                  src={analytics_icon}
                  alt='icons'
                  style={{ marginLeft: '1rem' }}
                />
                <h4>Analytics</h4>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleButtonClick('settings')}
                className={
                  activeButton === 'settings'
                    ? Style.active_button
                    : Style.inactive_button
                }
              >
                <img
                  src={setting_icon}
                  alt='icons'
                  style={{ marginLeft: '0.6rem' }}
                />
                <h4>Settings</h4>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={Style.side_bar_logout}>
        <button onClick={handleLogout}>
          <img src={Logout} alt='logout' />
          <h4>Logout</h4>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
