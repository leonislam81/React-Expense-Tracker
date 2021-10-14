import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import "../styles/TransactionList.css";
import { GlobalContext } from "../context/GlobalState";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h2 className="history">History</h2>
      <div className="divider"></div>
      <ul className="list">
        {transactions.map((Transactions) => (
          <Transaction key={Transactions.id} transactions={Transactions} />
        ))}
      </ul>
    </>
  );
};
