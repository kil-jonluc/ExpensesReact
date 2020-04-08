import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./ExpenseList";
import EditExpense from "./EditExpense";
import AddExpense from "./AddExpense";
import Login from "./Login";
import Nav from "./Nav";
import PageNotFound from "./PageNotFound";
import Home from "./Home";
import AddUser from "./AddUser";

function App() {
  const [expenses, setExpenses] = useState([]); // holds list of expenses
  const [user, setUser] = useState([]); //holds user

  return (
    <div className="container">
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/expenses">
          <ExpenseList expenses={expenses} setExpenses={setExpenses} />
        </Route>
        <Route path="/edit/:id?">
          <EditExpense expenses={expenses} setExpenses={setExpenses} />
        </Route>
        <Route path="/addExpense">
          <AddExpense expenses={expenses} setExpenses={setExpenses} />
        </Route>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/addUser">
          <AddUser />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
