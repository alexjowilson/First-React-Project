import ExpensesList from './ExpensesList';
import './NewComponentExpenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import React, { useState } from 'react';

const NewComponentExpenses = (props) => {

    const[filteredYear, setFilteredYear] = useState('2021'); // setting default year

    const selectedNewYear = (selectedYear) =>
    {
        setFilteredYear(selectedYear);
        //console.log("The year chosen = " + selectedYear);
    }

    /* filter parent array based on year the user selects */
    const filteredExpenses = props.items.filter(expense =>{
        console.log("filtered year is " + filteredYear);
        return expense.date.getFullYear().toString() === filteredYear;
    }); 

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter 
                    selected={filteredYear} 
                    onSelectedNewYear={selectedNewYear}
                /> 
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}
export default NewComponentExpenses;