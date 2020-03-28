import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as expensesapi from "./api/expensesapi";
import Intake from "./shared/Intake";
import { useHistory, useRouteMatch } from "react-router-dom";

const newExpense = {
  id: null,
  vendor: "",
  amount: "",
  catagory: "",
  date: ""
};

function ManageExpense({ expenses, setExpenses }) {
  const history = useHistory();
  const match = useRouteMatch();
  const idToEdit = parseInt(match.params.id);
  const [expense, setExpense] = useState(newExpense);

  function loadExpenses() {
    expensesapi.getExpenses().then(({ data }) => setExpenses(data));
  }
  
  useEffect(() => {
    async function init() {
      if (!idToEdit) return;
      const expenseToEdit = getExpenseById(expenses, idToEdit);
      setExpense(expenseToEdit);
    }

    init();

    function getExpenseById(expenses, id) {
      const expenseToEdit = expenses.find(d => (d.id = id));
      if (!expenseToEdit) return history.push("/page-not-found");
      return expenseToEdit;
    }
  }, [expenses, history, idToEdit, setExpenses]);

  function handleSubmit(event) {
    event.preventDefault();
    // const b = false;
    // if (!b) return;
    expensesapi.saveExpense(expense).then(response => {
      const savedExpense = response.data;
      if (idToEdit) {
        const newExpenses = expenses.map(f =>
          f.id === idToEdit ? savedExpense : f
        );
        setExpenses(newExpenses);
      } else {
        setExpenses([...expenses, savedExpense]);
      }
      history.push("/expenses");
    });
  }

  function handleChange(event) {
    const newExpense = { ...expense };
    newExpense[event.target.id] = event.target.value;
    setExpense(newExpense);
  }

  return (
    <>
      <h1>{idToEdit ? `Edit ${expense.vendor} Expense` : "Add Expense "}</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <Intake
          label="Vendor"
          id="vendor"
          onChange={handleChange}
          value={expense.vendor}
        />
        <Intake
          label="Amount"
          id="amount"
          onChange={handleChange}
          value={expense.amount}
        />
        <Intake
          label="Catagory"
          id="catagory"
          onChange={handleChange}
          value={expense.catagory}
        />
        <Intake
          label="Date"
          id="date"
          onChange={handleChange}
          value={expense.date}
        />
        <input
          type="submit"
          value={idToEdit ? "Save Expense" : "Add Expense"}
          className="btn btn-primary"
        />
      </form>
    </>
  );
}

export default ManageExpense;

// TODO
// 1. Add in error managing
// 2. Validation
