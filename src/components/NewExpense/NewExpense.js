import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => 
{

    const[isEditing, setIsEditing] = useState(false);

    /* gets entered data from its child ExpenseForm */
    const saveExpenseDataHandler = (enteredExpenseData) =>
    {
        const expenseData = {
            ...enteredExpenseData, // copy all elements in enteredExpenseData
            id: Math.random().toString() // add an additional attribute to this object
        }
        props.onAppExpense(expenseData);
        setIsEditing(false); // close the form once submitted
        //console.log(expenseData);
    };

    /* function to update isEditing attribute of this class */
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () =>{
        setIsEditing(false);
    }


    return( 
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} 
        onCancel={stopEditingHandler}/>}
    </div>
    );
};

export default NewExpense;