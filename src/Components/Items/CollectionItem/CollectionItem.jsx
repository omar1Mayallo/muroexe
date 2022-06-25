import React from "react";
import { useNavigate } from "react-router-dom";
import "./CollectionItem.scss";

const CollectionItem = ({ title, backgroundImgURL, pathUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${pathUrl}`)}
      className="menu-item"
      style={{
        backgroundImage: `url(${backgroundImgURL})`,
      }}
    >
      <div className="overlay">
        <div className="content p-3">
          <h3 className="h4">{title.toUpperCase()}</h3>
          <span>SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;
