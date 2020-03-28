import axios from "axios";

export async function getExpenses() {
  return axios.get("http://localhost:3001/expenses");
}

export async function removeExpense(id) {
  return axios.delete(`http://localhost:3001/expenses/${id}`);
}

export async function saveExpense(expense) {
  let url = "http://localhost:3001/expenses/";
  if (expense.id) url += expense.id;
  return axios[expense.id ? "put" : "post"](url, expense);
}
