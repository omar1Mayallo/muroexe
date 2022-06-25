import React from "react";
import "./FormInput.scss";

const FormInput = ({ label, handleChange, ...restProps }) => {
  return (
    <div className="group">
      <input onChange={handleChange} {...restProps} />
      <label className={`${restProps.value.length ? "to-small" : ""}`}>
        {label}
      </label>
      <span className="bar"></span>
    </div>
  );
};

export default FormInput;
