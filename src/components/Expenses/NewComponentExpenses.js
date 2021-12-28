import ExpenseItem from './ExpenseItem';
import './NewComponentExpenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';

const NewComponentExpenses = (props) => {

    const[filteredYear, setFilteredYear] = useState('2021');

    const selectedNewYear = (selectedYear) =>
    {
        setFilteredYear(selectedYear);
        //console.log("The year chosen = " + selectedYear);
    }

    /* filter parent array based on year the user selects */
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    }); 

    /* variable to point to message to user if there is no elements on that year or a filtered array */
    let expensesContent = <p>No expenses found.</p>;

    /* if length is greater than 0, there is expenses in the year the user selected */
    if(filteredExpenses.length > 0)
    {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                key = {expense.id}
                title = {expense.title} 
                amount = {expense.amount}
                date = {expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear} 
                    onSelectedNewYear={selectedNewYear}
                /> 
                {expensesContent}
            </Card>
        </div>
    );
}
export default NewComponentExpenses;