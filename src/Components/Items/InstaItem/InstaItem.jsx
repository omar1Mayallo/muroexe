import React from "react";
import "./InstaItem.scss";

const InstaItem = ({ imgUrl }) => {
  return (
    <div className="insta-card">
      <div className="insta-img-container">
        <img src={imgUrl} alt="insta-img" width="100%" height="auto" />
      </div>
    </div>
  );
};

export default InstaItem;
