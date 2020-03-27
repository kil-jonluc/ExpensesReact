import axios from "axios";

export function getExpenses() {
  return axios.get("http://localhost:3001/expenses");
}

export function removeExpenses(id) {
  return axios.delete(`http://localhost:3001/expenses/${id}`);
}

export function saveExpenses(expense) {
  let url = "http://localhost:3001/expenses/";
  return axios[expense.id ? "put" : "post"](url, expense);
}

// TODO
// 1. Add Async/await
