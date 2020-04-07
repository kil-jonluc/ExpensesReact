import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
    <br/>
    <br/>
    <br/>
      <Link to="/addUser" className="btn btn-primary" role="button">
        Create Account
      </Link>
    </>
  );
}

export default Login;
