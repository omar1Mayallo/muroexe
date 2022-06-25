import React from "react";
import {Spinner} from "react-bootstrap";
import {SpinnerBack} from "./Spinner.styled";
const WithSpinner =
  (WrappedComponent) =>
  ({isLoading, restProps}) => {
    return isLoading ? (
      <SpinnerBack>
        <Spinner animation="border" />
      </SpinnerBack>
    ) : (
      <WrappedComponent {...restProps} />
    );
  };

export default WithSpinner;
