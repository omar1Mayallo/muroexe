import React from "react";

import "./FeatureItem.scss";

const FeatureItem = ({ ImgURL, title, text }) => {
  return (
    <div className="feature-item my-2">
      <div className="head-box mb-3">
        <img src={ImgURL} alt="feature-img" width="auto" height="auto" />
        <h3 className="">{title}</h3>
      </div>
      <div className="text-box">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
