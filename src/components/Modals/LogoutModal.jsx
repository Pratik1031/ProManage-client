import React from 'react';
import Style from './logoutModal.module.css';

const LogoutModal = ({ show, onConfirm, onCancel }) => {
  return (
    <>
      {show && (
        <div className={Style.modal}>
          <div className={Style.modal_content}>
            <h3>Are you sure you want to logout?</h3>
            <div className={Style.modal_buttons}>
              <button onClick={onConfirm} className={Style.confirmBtn}>
                Yes,Logout
              </button>
              <button onClick={onCancel} className={Style.cancelBtn}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutModal;
