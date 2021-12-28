import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {


    /* function to handle when user chooses a year in drop-down list */
    /* send it to NewComponentExpenses.js */
    const handleDropDownChange = (event) =>
    {

        props.onSelectedNewYear(event.target.value);

        console.log("the year you chose is " + event.target.value);
    }


    return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleDropDownChange}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
        </select>
        </div>
    </div>
    );
};

export default ExpensesFilter;