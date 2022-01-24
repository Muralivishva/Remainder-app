import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense=(props)=>{
    const[isEditing,setisEditing]=useState(false);

const saveExpenseDataHandler=(enteredExpenseData)=>{
const ExpenseData={
    ...enteredExpenseData,
    id:Math.random().toString()
}
props.onAddExpense(ExpenseData);
setisEditing(false);
}

const startEditingHandler=()=>{
    setisEditing(true);
}
const stopEditingHandler=()=>{
    setisEditing(false);
}
    return(
<div className="new-expense">
    {!isEditing && (
    <button className="btnnn" onClick={startEditingHandler}>Add New Expenses</button>)}
  {isEditing &&(
       <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>)}
</div>
 );
}
export default NewExpense;