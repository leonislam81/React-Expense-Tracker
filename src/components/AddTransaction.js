import React, { useState, useContext } from "react";
import "../styles/AddTransaction.css";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  const submitForm = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h2 className="transaction">Add New Transaction</h2>
      <div className="divide"></div>
      <form onSubmit={submitForm} className="form">
        <label htmlFor="text">Text</label> <br />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          name="text"
          placeholder="Enter Text..."
        />{" "}
        <br />
        <label htmlFor="amount">Amount (Negative or Positive value)</label>
        <br />
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          name="amount"
          placeholder="Enter Amount..."
        />
        <input type="submit" value="Add Transaction" />
      </form>
    </>
  );
};
