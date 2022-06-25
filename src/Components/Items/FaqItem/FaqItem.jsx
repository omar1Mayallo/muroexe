import React from "react";

const FaqItem = ({ Question, Answer }) => {
  return (
    <>
      <p className="text-muroexe strongBold">{Question}</p>
      <p className="text-muroexe">{Answer}</p>
    </>
  );
};
export default FaqItem;
