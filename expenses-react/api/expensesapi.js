import Axios from "axios";

export function getExpenses() {
  return Axios.get("http://localhost:3001/expenses");
}
