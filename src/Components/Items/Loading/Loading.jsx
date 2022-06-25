import React from "react";
import {Spinner} from "react-bootstrap";
import {LoadingContainer} from "./Loading.styled";
const Loading = () => {
  return (
    <LoadingContainer>
      <Spinner animation="grow" />
    </LoadingContainer>
  );
};
export default Loading;
