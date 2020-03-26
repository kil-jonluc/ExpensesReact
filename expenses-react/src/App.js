import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getExpenses } from "./api/expensesapi";

const newExpense = {
  id: null,
  vendor: "",
  amount: 0,
  catagory: "",
  date: ""
};

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(loadExpenses, []);

  function loadExpenses() {
    getExpenses().then(({ data }) => setExpenses(data));
  }

  function renderExpense(expense) {
    const { vendor, amount, catagory, date } = expense;

    return(
      <tr>
        <td>{vendor}</td>
        <td>{amount}</td>
        <td>{catagory}</td>
        <td>{date}</td>
      </tr>
    );
  }

  return (
    <>
      <h1>Expenses</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Catagory</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{expenses.map(renderExpense)}</tbody>
      </table>
    </>
  );
}

export default App;
