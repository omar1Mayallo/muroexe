import React from "react";

import "./PgHead.scss";

const PgHead = ({ title, boldParagraph }) => {
  return (
    <div className="Pg-head-box text-center">
      {!title ? <></> : <h1>{title.toUpperCase()}</h1>}
      {!boldParagraph ? (
        <></>
      ) : (
        <span className="d-block my-4">{boldParagraph}</span>
      )}
    </div>
  );
};

export default PgHead;
