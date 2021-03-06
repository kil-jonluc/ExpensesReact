import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: "bold"
};

function Nav() {
  return (
    <>
      <NavLink activeStyle={activeStyle} to="/" exact>
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink activeStyle={activeStyle} to="/expenses">
        Expenses
      </NavLink>
    </>
  );
}

export default Nav;
