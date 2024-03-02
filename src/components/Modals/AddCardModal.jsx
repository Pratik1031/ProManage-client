import { useState } from 'react';
import Styles from './addCardModal.module.css';
import delete_icon from '../../Assets/Icons/Delete.svg';
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
    const newChecklists = [...checklists];
    newChecklists[index].name = event.target.value;
    setChecklists(newChecklists);
  };

  const handleCheckboxChange = (index) => {
    const newChecklists = [...checklists];
    newChecklists[index].checked = !newChecklists[index].checked;
    setChecklists(newChecklists);
  };

  const handleDeleteChecklist = (index) => {
    const updatedChecklists = [...checklists];
    updatedChecklists.splice(index, 1);
    setChecklists(updatedChecklists);
  };

  const totalChecklists = checklists.length;

  const checkedChecklists = checklists.filter(
    (checklist) => checklist.checked
  ).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      priority,
      checklists,
    };
    onSubmit(formData);
    onClose();
  };

  return (
    <div className={Styles.bg}>
      <div className={Styles.popup}>
        <form onSubmit={handleSubmit}>
          <div className={Styles.title}>
            <label htmlFor='title'>
              Title <span style={{ color: 'red' }}>*</span>
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
          </div>

          <div className={Styles.priority_radio}>
            <label htmlFor='priority' className={Styles.select} required>
              Select Priority<span style={{ color: 'red' }}>*</span>
            </label>
            <div className={Styles.Priority}>
              <input
                type='radio'
                id='high'
                value='High'
                checked={priority === 'High'}
                onChange={handlePriorityChange}
              />
              <label htmlFor='high'>HIGH PRIORITY</label>
            </div>

            <div className={Styles.moderate_priority}>
              <input
                type='radio'
                id='medium'
                value='Medium'
                checked={priority === 'Medium'}
                onChange={handlePriorityChange}
              />
              <label htmlFor='medium'>MODERATE PRIORITY</label>
            </div>

            <div className={Styles.Priority}>
              <input
                type='radio'
                id='low'
                value='Low'
                checked={priority === 'Low'}
                onChange={handlePriorityChange}
              />
              <label htmlFor='low'>LOW PRIORITY</label>
            </div>
          </div>

          <div className={Styles.check_head}>
            Checklist ({checkedChecklists}/{totalChecklists})
            <span style={{ color: 'red' }}>*</span>
          </div>
          <div className={Styles.check_container}>
            {checklists.map((checklist, index) => (
              <div key={index} className={Styles.checklist}>
                <div className={Styles.input}>
                  <input
                    className={Styles.checked_input}
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
                  <div>
                    <div className={Styles.image}>
                      <img
                        className={Styles.delete_icon}
                        src={delete_icon}
                        alt='delete'
                        onClick={() => handleDeleteChecklist(index)}
                      />
                    </div>
                  </div>
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
            <input type='date' className={Styles.date} placeholder='Due Date' />
            <div className={Styles.submit_btns}>
              <button
                type='button'
                className={Styles.cancelBtn}
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type='submit'
                className={Styles.saveBtn}
                onClick={onSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
