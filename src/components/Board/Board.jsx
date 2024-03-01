import React from 'react';
import styles from './board.module.css';
import collapse_icon from '../../Assets/Icons/codicon_collapse-all.svg';
import add_icon from '../../Assets/Icons/add.svg';
const Board = () => {
  return (
    <div className={styles.board}>
      <div className={styles.board_container}>
        <div className={styles.card_heading}>
          <div className={styles.card_name}>Backlog</div>
          <div>
            <img
              src={collapse_icon}
              alt='collapse'
              className={styles.collapse_icon}
            />
          </div>
        </div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
      </div>

      <div className={styles.board_container}>
        <div className={styles.card_heading}>
          <div className={styles.card_name}>To do</div>
          <div>
            <img
              src={add_icon}
              alt='add'
              style={{ marginRight: '1rem', cursor: 'pointer' }}
            />
            <img
              src={collapse_icon}
              alt='collapse'
              className={styles.collapse_icon}
            />
          </div>
        </div>
        <div className={styles.cards}>card</div>
        <div className={styles.cards}>card</div>
      </div>

      <div className={styles.board_container}>
        <div className={styles.card_heading}>
          <div className={styles.card_name}>In progress</div>
          <div>
            <img
              src={collapse_icon}
              alt='collapse'
              className={styles.collapse_icon}
            />
          </div>
        </div>
        <div className={styles.cards}>card</div>
      </div>

      <div className={styles.board_container}>
        <div className={styles.card_heading}>
          <div className={styles.card_name}>Done</div>
          <div>
            <img
              src={collapse_icon}
              alt='collapse'
              className={styles.collapse_icon}
            />
          </div>
        </div>
        <div className={styles.cards}>card</div>
      </div>
    </div>
  );
};

export default Board;
