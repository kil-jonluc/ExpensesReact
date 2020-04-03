import React, { useEffect } from "react";
//import PropTypes from "prop-types";
import * as expensesapi from "./api/expensesapi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function ExpenseList({ expenses, setExpenses }) {
  useEffect(loadExpenses, []);

  async function onRemoveClick(id) {
    await expensesapi.removeExpense(id);
    setExpenses(expenses.filter(f => f.id !== id));
  }

  function loadExpenses() {
    if (expenses.length === 0)
      // may need to be removed
      expensesapi.getExpenses().then(({ data }) => setExpenses(data));
  }

  function renderExpenses(expense) {
    const { id, vendor, amount, catagory, date } = expense;
    console.log(`${vendor} and ${id}`);
    return (
      <tr key={id}>
        <td>{vendor}</td>
        <td>{amount}</td>
        <td>{catagory}</td>
        <td>{date}</td>
        <td>
          <Link
            to={"/edit/" + id}
            aria-label={`Edit ${vendor} expense`}
            className="btn btn-primary btn-sm"
          >
            Edit
          </Link>
        </td>
        <td>
          <button
            aria-label={`Remove ${vendor} expense`}
            onClick={() => onRemoveClick(id)}
            className="btn btn-danger btn-sm"
          >
            Remove
          </button>
        </td>
      </tr>
    );
  }

  return (
    <>
      <h1>Expenses</h1>
      <br />
      <Link to="/add" className="btn btn-primary" role="button">
        Add Expense
      </Link>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Catagory</th>
            <th>Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{expenses.map(renderExpenses)}</tbody>
      </table>
    </>
  );
}

export default ExpenseList;

// TODO
// 1. import proptypes and use proptypes
// 2. Could add Toast to the delete click
