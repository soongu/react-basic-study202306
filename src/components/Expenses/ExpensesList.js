import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({items}) => {

  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>아직 등록된 지출이 없습니다.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {items.map(({id, title, price, date}) => (
        <ExpenseItem
          key={id}
          title={title}
          price={price}
          date={date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
