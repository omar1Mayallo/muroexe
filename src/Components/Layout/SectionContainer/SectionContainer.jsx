import React from "react";

const SectionContainer = ({ children, Tag, Class }) => {
  const CustomTag = Tag;
  return (
    <CustomTag className={`my-5 container ${Class}`}>{children}</CustomTag>
  );
};

export default SectionContainer;
