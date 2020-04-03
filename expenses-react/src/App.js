import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./ExpenseList";
import EditExpense from "./EditExpense";
import AddExpense from "./AddExpense";
import Nav from "./Nav";
import PageNotFound from "./PageNotFound";
import Home from "./Home";

function App() {
  const [expenses, setExpenses] = useState([]); // holds list of expenses

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
        <Route path="/add">
          <AddExpense expenses={expenses} setExpenses={setExpenses} />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
