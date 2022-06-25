import React from "react";
import "./NoItemYet.scss";

const NoItemYet = ({ children }) => {
  return <div className="no-items-alert">{children}</div>;
};

export default NoItemYet;
