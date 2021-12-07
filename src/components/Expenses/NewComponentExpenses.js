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

        console.log("Aye the user selected the year " + selectedYear);
    }


    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onSelectedNewYear={selectedNewYear}/> 
                {props.items.map((expense) => (
                    <ExpenseItem 
                        key = {expense.id}
                        title = {expense.title} 
                        amount = {expense.amount}
                        date = {expense.date}
                />))}
            </Card>
        </div>
    );
}
export default NewComponentExpenses;