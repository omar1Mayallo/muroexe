import React, { useState } from "react";
import {
  BsFillHeartFill,
  BsFillPersonFill,
  BsFillEnvelopeOpenFill,
} from "react-icons/bs";
import { FaSignOutAlt, FaHistory } from "react-icons/fa";
import { signOutFunc } from "../../../Firebase/Firebase-config";
import "./OptionList.scss";

const OptionList = ({ activeOption, changeActive }) => {
  const [optionItems] = useState([
    { id: 1, name: "Information", iconName: BsFillPersonFill },
    { id: 2, name: "Orders", iconName: FaHistory },
    { id: 3, name: "Wishlist", iconName: BsFillHeartFill },
    { id: 4, name: "Alerts", iconName: BsFillEnvelopeOpenFill },
    { id: 5, name: "Sign out", iconName: FaSignOutAlt },
  ]);
  const Options = optionItems.map(({ id, name, iconName }) => {
    const Icon = iconName;
    const itemFunc = (id, name) => {
      changeActive(id);
      if (name === "Sign out") {
        signOutFunc();
      }
    };
    return (
      <li
        key={id}
        className={
          activeOption === id
            ? "option-list-item active-option"
            : "option-list-item"
        }
        onClick={() => itemFunc(id, name)}
      >
        <span>
          <Icon />
        </span>
        {name}
      </li>
    );
  });
  return <ul className="options-list">{Options}</ul>;
};

export default OptionList;
