import React from 'react';
import Sidebar from '../../components/SideBar/Sidebar';
import Header from '../../components/Header/Header';
import Board from '../../components/Board/Board';

import Styles from './main.module.css';

const Main = () => {
  return (
    <div className={Styles.container}>
      <Sidebar />
      <div className={Styles.sub_container}>
        <Header />
        <Board />
      </div>
    </div>
  );
};

export default Main;
