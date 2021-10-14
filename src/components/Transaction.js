import React, { useContext } from "react";
import "../styles/Transaction.css";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transactions }) => {
  const sign = transactions.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <li className={`bookList ${transactions.amount < 0 ? "minus" : "plus"}`}>
        <span>{transactions.text}</span>
        <span
          className={`${transactions.amount < 0 ? "textRed" : "textGreen"}`}
        >
          {sign}${Math.abs(transactions.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transactions.id)}
          className="close"
        >
          x
        </button>
      </li>
    </>
  );
};
