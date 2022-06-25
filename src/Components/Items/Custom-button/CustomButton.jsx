import React from "react";
// import "./CustomButton.scss";

import { Button } from "./CustomButton.styles";

const CustomButton = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>;
};

export default CustomButton;
