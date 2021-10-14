import React, { useContext } from "react";
import "../styles/Balance.css";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transactions) => transactions.amount);
  const totals = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <p className="account">
      Your Balance <span>${totals}</span>
    </p>
  );
};
