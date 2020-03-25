import axios from "axios";

export function getExpenses() {
  return axios.get("http://localhost:3001/expenses");
}
