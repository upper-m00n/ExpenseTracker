import React, { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [form, setForm] = useState({
    name: "",
    amount: 0,
    date: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ ...form, id: Date.now(), amount: parseFloat(form.amount) });
    setForm({ name: "", amount: 0, date: "", type: "expense" });
  };

  return (
    <form id="transactionForm" onSubmit={handleSubmit}>
      <h2>ADD Transactions</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={form.type === "income"}
            onChange={(e) =>
              setForm({ ...form, type: e.target.checked ? "income" : "expense" })
            }
          />
          <span>ADD Income</span>
        </label>
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
      </div>
      <button id="buttonSub">Submit</button>
    </form>
  );
};

export default TransactionForm;
