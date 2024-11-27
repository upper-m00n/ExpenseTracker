import React from "react";

const Balance = ({ balance }) => {
  return (
    <div>
      <h1 id="total">Total Balance</h1>
      <h1 id="Tbalance">₹{balance.toFixed(2)}</h1>
    </div>
  );
};

export default Balance;
