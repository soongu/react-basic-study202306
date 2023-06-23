import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = ({id, onDelete, children}) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(삭제됨!)');
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
