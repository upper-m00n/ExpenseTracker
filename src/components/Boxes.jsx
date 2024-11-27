import React from "react";

const Boxes = ({ income, expense }) => {
  return (
    <div className="boxes">
      <div className="salary">
        <h1>Income</h1>
        <h2 id="Tincome">₹{income.toFixed(2)}</h2>
      </div>
      <div className="expense">
        <h1>Expense</h1>
        <h2 id="Texpense">₹{expense.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Boxes;
