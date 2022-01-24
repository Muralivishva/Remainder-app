import React,{useState} from "react";
import'./Expenses.css';
import ExpensesFilter from "./NewExpense/Expensefilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./Chart/ExpenseChart";
const Expenses=(props)=>{
const [filteredyear,setfilteredyear]=useState('2020');

  const filterChangeHandler=(selectedyear)=>{
    setfilteredyear(selectedyear);
  }
  
    const filteredExpenses= props.items.filter((expense)=>{
return expense.date.getFullYear().toString()===filteredyear;
    });
  
  
    return(
      <div>
        <div className="expenses">
        <ExpensesFilter
         selected={filteredyear}
         onChangeFilter={filterChangeHandler}/>
         
         <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
<ExpensesList items={filteredExpenses}></ExpensesList>
    </div>
    </div>

    )
}
export default Expenses;