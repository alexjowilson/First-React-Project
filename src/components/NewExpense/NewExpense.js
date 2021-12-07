import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => 
{
    /* gets entered data from its child ExpenseForm */
    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData = {
            ...enteredExpenseData, // copy all elements in enteredExpenseData
            id: Math.random().toString() // add an additional attribute to this object
        }
        props.onAppExpense(expenseData);
        //console.log(expenseData);
    }

    return( 
    <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    );
};

export default NewExpense;