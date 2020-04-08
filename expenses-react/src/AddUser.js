import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Intake from "./shared/Intake";
import * as userApi from "./api/userApi";

const newUser = {
  id: null,
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  employer: "",
};

function AddUser() {
  const history = useHistory();
  const [user, setUser] = useState(newUser);

  function handleSubmit(event) {
    event.preventDefault();
    userApi.addUser(user);
     
    history.push("/Login");
  }

  function handleChange(event) {
    const newUser = { ...user };
    newUser[event.target.id] = event.target.value;
    setUser(newUser);
  }

  return (
    <>
      <h1>{"Add Account"}</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <Intake
          label="First Name"
          id="firstName"
          onChange={handleChange}
          value={user.firstName}
        />
        <Intake
          label="Last Name"
          id="lastName"
          onChange={handleChange}
          value={user.lastName}
        />
        <Intake
          label="Username"
          id="username"
          onChange={handleChange}
          value={user.username}
        />
        <Intake
          label="Password"
          id="password"
          onChange={handleChange}
          value={user.password}
          type="password"
        />
        <Intake
          label="Employer"
          id="employer"
          onChange={handleChange}
          value={user.employer}
        />
        <input type="submit" value="Add Account" className="btn btn-primary" />
      </form>
    </>
  );
}

export default AddUser;
