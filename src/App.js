import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Expenses from'./components/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const Dummy_Expenses=[
  {
    id: "1",
    title: "CarInsurance",
    date: new Date(2021,3,26),
    price: 800.45,
  },
  {
    id: "2",
    title: "Onlineshopping",
    date: new Date(2021,7,24),
    price: 322,
  },
  {
    id: "3",
    title: "Grosseries",
    date: new Date(2020,8,15),
    price: 678.88,
  },
];

const App=()=> {
  
  const [expenses,setExpenses]=useState(Dummy_Expenses);

const addExpenseHandler=(expense)=>{
  setExpenses((prevExpenses)=>{
    return [expense,... prevExpenses];
  });
}

  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
