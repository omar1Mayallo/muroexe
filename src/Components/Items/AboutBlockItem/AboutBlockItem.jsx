import React from "react";

import "./AboutBlockItem.scss";

const AboutBlockItem = ({ImgURL, title, text}) => {
  return (
    <div className="aboutBlock-item my-2">
      <div className="head-box mb-3">
        <img src={ImgURL} alt="head-about-img" />
        <h3 className="d-inline">{title}</h3>
      </div>
      <div className="text-box">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AboutBlockItem;
