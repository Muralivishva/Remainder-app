import react, { useState } from "react";
import'./ExpenseForm.css'

const ExpenseForm=(props)=>{
const[enteredTitle,setEnteredTitle]=useState('');
const[enteredamount,setEntererAmount]= useState('');
const[entereddate,setEnteredDate]=useState('');


    const titlechangehandler=(event)=>{
        setEnteredTitle(event.target.value);
    }

    const amountchangehandler=(event)=>{
setEntererAmount(event.target.value);
    }

    const datechangehandler=(event)=>{
        setEnteredDate(event.target.value);
    }

    const submithandler=(event)=>{
event.preventDefault();

const expenseData={
    title:enteredTitle,
    price:+enteredamount,
    date: new Date(entereddate)
};
console.log(expenseData);

props.onSaveExpenseData(expenseData);
setEnteredTitle('');
setEntererAmount('');
setEnteredDate('');

    }
    return(
        <form onSubmit={submithandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titlechangehandler}></input>
                </div>

                <div className="new-expense__control">
                <label>Amount</label>
                <input type='number'min='0.01'step='0.01'onChange={amountchangehandler}></input>
                </div>

                <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01'max='2022-12-31' onChange={datechangehandler}></input>
                </div>
            
            <div className="new-expense__actions">
                <button type="button"onClick={props.onCancel}>Cancel</button>
                <button className="btnn" type="submit">Add Expense</button>
                </div>
                </div>
        </form>
    )

}
export default ExpenseForm;