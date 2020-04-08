import axios from "axios";

//export async function getExpenses(username, password) {
//  return axios.get("http://localhost:3001/expenses");
//}

//export async function removeExpense(id) {
//  return axios.delete(`http://localhost:3001/expenses/${id}`);
//}

export async function addUser(user) {
  let url = "http://localhost:3002/users/";
  return axios.post(url, user);
}
