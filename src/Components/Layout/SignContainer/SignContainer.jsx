import React from "react";
import "./SignContainer.scss";

const SignContainer = ({ children }) => {
  return <div className="sign-box mx-auto my-5 fadeInLeft">{children}</div>;
};

export default SignContainer;
