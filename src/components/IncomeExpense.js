import React, { useContext } from "react";
import "../styles/IncomeExpense.css";
import { GlobalContext } from "../context/GlobalState";
export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transactions) => transactions.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className="box">
      <div className="money income">
        <p>Income</p>
        <span>${income}</span>
      </div>
      <div className="money expense">
        <p>Expense</p>
        <span>-${Math.abs(expense)}</span>
      </div>
    </div>
  );
};
