import React, { useState } from 'react';
import NewComponentExpenses from './components/Expenses/NewComponentExpenses';
import NewExpense from './components/NewExpense/NewExpense';


/* Dummy expenses */
const DUMMY_EXPENSES = [
  { id: 'e1', title: 'FuboTV', amount: 27.93, date: new Date(2021, 11, 18) },
  { id: 'e2', title: 'Xbox Game Pass', amount: 15.00, date: new Date(2021, 11, 14) },
  { id: 'e3', title: 'Xfinity WiFi', amount: 80.93, date: new Date(2021, 11, 1) },
  { id: 'e4', title: 'Apple News', amount: 5.00, date: new Date(2021, 11, 11) },
];

const App = () => {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES);



  const addExpenseHandler = expense => {
    console.log("In App.js SLIME");

    /* add the new expense and copy all existing expenses */
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };


  /* modern and easier way to create component */
  return (
    <div>
      <NewExpense onAppExpense={addExpenseHandler}/>
      <NewComponentExpenses items={expenses}></NewComponentExpenses> 
    </div>
  );

  /* old way of creating the element
  return React.createElement(
    'div',
    {}, 
    React.createElement('h2', {}, "Let's get started Slime!"),
    React.createElement(NewComponentExpenses, {items: expenses})
  );
  */
}
export default App;
