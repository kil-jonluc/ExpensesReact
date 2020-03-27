// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { getExpenses } from "./api/expensesapi";

// const newExpense = {
//   id: null,
//   vendor: "",
//   amount: 0,
//   catagory: "",
//   date: ""
// };

// function ManageExpense() {
//   const [expsene, setExpense] = useState(newExpense); // holds add expense

//   function handleSubmit(even) {
//     event.preventDefault();
//     expenseapi.AddExpense(expense).then(response => {
//       setExpense(newExpense);
//     });
//   }
//   return (
//     <>
//       <h1>Add Expense</h1>
//       <form onSubmit={handleSubmit}></form>
//       <input>Vendor</input>
//       <input>Amount</input>
//       <input>Catagory</input>
//       <input>Date</input>

//     </>
//   );
// }

// export default AddExpense;
