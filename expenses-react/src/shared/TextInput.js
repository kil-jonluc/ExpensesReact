import React from "react";

const TextInput = ({ id, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} className="form-control" />
    </div>
  );
};

export default TextInput;
