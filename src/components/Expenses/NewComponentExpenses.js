import ExpensesList from './ExpensesList';
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

    return (
        <li>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear} 
                    onSelectedNewYear={selectedNewYear}
                /> 
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
    );
}
export default NewComponentExpenses;