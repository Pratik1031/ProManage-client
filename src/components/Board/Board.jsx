import React, { useState } from 'react';
import styles from './board.module.css';
import collapse_icon from '../../Assets/Icons/codicon_collapse-all.svg';
import add_icon from '../../Assets/Icons/add.svg';
import AddCardModal from '../Modals/AddCardModal';
import axios from 'axios';
import { useLogin } from '../../hooks/useLogin';

const Board = () => {
  const [showModal, setShowModal] = useState(false);
  const { isLoading, error, login } = useLogin();

  const handleOpenModal = () => {
    if ((!isLoading && !error) || login) {
      setShowModal(true);
    } else {
      console.log('Please log in to add a card.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitModal = async (formData) => {
    try {
      console.log('Form data:', formData);
      const response = await axios.post(
        'http://localhost:8080/api/v1/task/create',
        formData
      );
      setShowModal(false);
      console.log('Task created successfully:', response.data);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

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
      </div>

      <div className={styles.board_container}>
        <div className={styles.card_heading}>
          <div className={styles.card_name}>To do</div>
          <div>
            <img
              src={add_icon}
              alt='add'
              onClick={handleOpenModal}
              style={{ marginRight: '1rem', cursor: 'pointer' }}
            />
            <img
              src={collapse_icon}
              alt='collapse'
              className={styles.collapse_icon}
            />
          </div>
        </div>
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
      </div>
      {showModal && (
        <AddCardModal onClose={handleCloseModal} onSubmit={handleSubmitModal} />
      )}
    </div>
  );
};

export default Board;
