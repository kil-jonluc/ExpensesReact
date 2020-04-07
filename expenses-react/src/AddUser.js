import React, { useState, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
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
  const match = useRouteMatch();
  const [user, setUser] = useState(newUser);

  function handleSubmit(event) {
    event.preventDefault();
    userApi.AddUser(user).then((response) => {
      const savedUser = response.data;
      setUser([...user, savedUser]);
      history.push("/Login");
    });
  }

  function handleChange(event) {
    const newUser = { ...user };
    newUser[event.target.id] = event.target.value;
    setUser(newUser);
  }

  return <div></div>;
}

export default AddUser;
