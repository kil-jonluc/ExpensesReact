import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getExpenses } from "./api/expensesapi";
import TextInput from "./shared/Intake";

const newExpense = {
  id: null,
  vendor: "",
  amount: 0,
  catagory: "",
  date: ""
};

function App() {
  const [expenses, setExpenses] = useState([]); // holds list of expenses
  useEffect(loadExpenses, []);

  function loadExpenses() {
    getExpenses().then(({ data }) => setExpenses(data));
  }

  function renderExpense(expense) {
    const { vendor, amount, catagory, date } = expense;

    return (
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
      <br />
      <br />
      <h2>Add Expense</h2>
      <br />
      <form>
        <TextInput label="Vendor" id="vendor" />
        <TextInput label="Amount" id="amount" />
        <TextInput label="Catagory" id="catagory" />
        <TextInput label="Date" id="date" />
        <input type="submit" value="Add Expense" className="btn btn-primary"/>
      </form>
    </>
  );
}

export default App;
