import { useState } from 'react';
import Styles from './addCardModal.module.css'; // Assuming Styles and delete_icon are properly defined
import delete_icon from '../../Assets/Icons/Delete.svg'; // Unused import

const AddCardModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [checklists, setChecklists] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const addNewChecklist = () => {
    setChecklists([...checklists, { name: '', checked: false }]);
  };

  const handleChecklistChange = (index, event) => {
    const updatedChecklists = [...checklists];
    updatedChecklists[index].name = event.target.value;
    setChecklists(updatedChecklists);
  };

  const handleCheckboxChange = (index) => {
    const updatedChecklists = [...checklists];
    updatedChecklists[index].checked = !updatedChecklists[index].checked;
    setChecklists(updatedChecklists);
  };

  const handleDeleteChecklist = (index) => {
    const updatedChecklists = [...checklists];
    updatedChecklists.splice(index, 1);
    setChecklists(updatedChecklists);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      priority,
      checklists,
    };
    onSubmit(formData);
  };

  return (
    <div className={Styles.bg}>
      <div className={Styles.popup}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='title' className={Styles.title}>
            Title
          </label>
          <input
            type='text'
            id='title'
            required
            placeholder='Enter Task Title'
            className={Styles.title_ipt}
            value={title}
            onChange={handleTitleChange}
          />

          <div className={Styles.priority_radio}>
            <label htmlFor='priority' className={Styles.select} required>
              Select Priority
            </label>
            <div className={Styles.Priority}>
              <input
                type='radio'
                id='high'
                value='high'
                checked={priority === 'high'}
                onChange={handlePriorityChange}
              />
              <label htmlFor='high'>HIGH PRIORITY</label>
            </div>

            <div className={Styles.Priority}>
              <input
                type='radio'
                id='medium'
                value='medium'
                checked={priority === 'medium'}
                onChange={handlePriorityChange}
              />
              <label htmlFor='medium'>MODERATE PRIORITY</label>
            </div>

            <div className={Styles.Priority}>
              <input
                type='radio'
                id='low'
                value='low'
                checked={priority === 'low'}
                onChange={handlePriorityChange}
              />
              <label htmlFor='low'>LOW PRIORITY</label>
            </div>
          </div>

          <div className={Styles.check_head}>
            Checklist ({checklists.length}/0)
          </div>
          <div className={Styles.check_container}>
            {checklists.map((checklist, index) => (
              <div key={index} className={Styles.checklist}>
                <div className={Styles.input}>
                  <input
                    type='checkbox'
                    checked={checklist.checked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <input
                    type='text'
                    value={checklist.name}
                    onChange={(event) => handleChecklistChange(index, event)}
                    placeholder='Enter checklist item'
                  />
                </div>
                <div>
                  <button
                    type='button'
                    className={Styles.delete_icon}
                    onClick={() => handleDeleteChecklist(index)}
                  >
                    <img src={delete_icon} alt='delete' />
                  </button>
                </div>
              </div>
            ))}
            <button
              type='button'
              onClick={addNewChecklist}
              className={Styles.add_btn}
            >
              + Add New
            </button>
          </div>

          <div className={Styles.bottom}>
            <input type='date' className={Styles.date} />
            <button
              type='button'
              className={Styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>
            <button type='submit' className={Styles.saveBtn} onClick={onSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
