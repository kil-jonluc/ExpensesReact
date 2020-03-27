import React from "react";

const Intake = ({ id, label, value, onChange, required, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>
        {label} {required && "*"}
      </label>
      <br />
      <input
        id={id}
        className="form-control"
        onChange={onChange}
        type={type}
        value={value}
      />
    </div>
  );
};

//Add PropTypes

Intake.defaultProps = {
  required: false,
  type: "text"
};

export default Intake;
