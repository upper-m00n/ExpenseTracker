import React from "react";

const Transactions = ({ transactions, deleteTransaction }) => {
  return (
    <div className="transactions">
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions</p>
      ) : (
        <ul id="tList">
          {transactions.map(({ id, name, amount, date, type }) => (
            <li key={id}>
              <div className="Name">
                <h3>{name}</h3>
                <p>{new Date(date).toLocaleDateString()}</p>
              </div>
              <div className={`amount ${type}`}>
                <span>{type === "income" ? "+" : "-"}₹{amount.toFixed(2)}</span>
              </div>
              <div className="action" onClick={() => deleteTransaction(id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transactions;
