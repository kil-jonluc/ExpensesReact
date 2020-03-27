import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ExpenseList from "./ExpenseList";
import ManageExpense from "./ManageExpense";
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
        <Route path="/manage/:id?">
          <ManageExpense expenses={expenses} setExpenses={setExpenses} />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
