import styled, {css} from "styled-components";

const StyleType = (props) => {
  if (props.isGoogle) {
    return css`
      color: white;
      background-color: #df4a34;
      border: 1px solid #df4a34;
      &:hover {
        background-color: white;
        color: #df4a34;
      }
    `;
  } else if (props.isFacebook) {
    return css`
      background-color: #4267b2;
      color: white;
      border: 1px solid #4267b2;
      &:hover {
        background-color: white;
        color: #4267b2;
      }
    `;
  } else if (props.Payment) {
    return css`
      background-color: transparent;
      color: white;
      border: 1px solid white;
      border-radius: 10px;
      font-style: italic;
      &:hover {
        background-color: white;
        color: black;
      }
    `;
  } else if (props.Clear) {
    return css`
      background-color: #177ee6;
      color: white;
      border: 1px solid #177ee6;
      &:hover {
        opacity: 0.7;
      }
    `;
  } else if (props.ProductDetails) {
    return css`
      background-color: black;
      color: white;
      border: none;
      &:hover {
        background-color: #2745ac;
      }
    `;
  } else {
    return css`
      background-color: black;
      color: white;
      border: 1px solid black;
      &:hover {
        background-color: white;
        color: black;
      }
    `;
  }
};

export const Button = styled.button`
  transition: 0.5s;
  height: 50px;
  text-transform: uppercase;
  font-size: 15px;
  min-width: 100px;
  padding: 0 30px;
  ${StyleType}
`;
//
