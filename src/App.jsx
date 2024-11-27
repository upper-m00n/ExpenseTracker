import React, { useState, useEffect } from "react";
import Balance from "./components/Balance";
import Boxes from "./components/Boxes";
import Transactions from "./components/Transactions";
import TransactionForm from "./components/TransactionForm";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const getTotals = () => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    return { income, expense, balance: income - expense };
  };

  const totals = getTotals();

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance balance={totals.balance} />
      <Boxes income={totals.income} expense={totals.expense} />
      <TransactionForm addTransaction={addTransaction} />
      <Transactions transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;
