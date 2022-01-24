import React from "react";
import ExpenseDate from "./Expensedate"
import "./Expenseitem.css";

function ExpenseItem(props) {

  return (
    <li>
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        </div>
      <div className="expense-item__price">${props.price}</div>
   
    </div>
    </li>
  );
}
export default ExpenseItem;
