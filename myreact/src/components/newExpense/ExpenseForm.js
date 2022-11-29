import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm (){

  const [enteredTitle,setEnterTitle]=useState('');
  const [enteredAmount,setEnterAmount]=useState('');
  const [enteredDate,setEnterDate]=useState('');
  function titleChangeHendler(event)
  {
    setEnterTitle(event.target.value);
    console.log(event.target.value);
  }
  function amountChangeHendler(event)
  {
    setEnterAmount(event.target.value);
    console.log(event.target.value);
  }

  function dateChangeHendler(event)
  {
    setEnterDate(event.target.value);
    console.log(event.target.value);
  }


  return (
    <form >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHendler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.5'
            step='0.5'
            onChange={amountChangeHendler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHendler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;