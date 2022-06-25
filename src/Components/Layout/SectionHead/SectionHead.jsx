import React from "react";
import "./SectionHead.scss";

const SectionHead = ({ head, para }) => {
  return (
    <>
      {para ? <p className="para">{para}</p> : null}
      <h2 className="sections-head text-center">{head.toUpperCase()}</h2>
    </>
  );
};

export default SectionHead;
