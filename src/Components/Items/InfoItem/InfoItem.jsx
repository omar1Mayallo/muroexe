import React from "react";

import "./InfoItem.scss";
const InfoItem = ({ id, activeOption, head, children }) => {
  return (
    <li
      className={
        activeOption === id ? "info-list-item active-info" : "info-list-item"
      }
    >
      <h3>{head}</h3>
      {children}
    </li>
  );
};

export default InfoItem;
