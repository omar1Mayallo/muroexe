import React, { useState } from "react";
import FaqItem from "../../Components/Items/FaqItem/FaqItem";
import PgHead from "../../Components/Layout/PgHead/PgHead";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import FAQData from "./FAQData";

const FAQ = () => {
  const [state] = useState(FAQData);
  console.log(state);
  const Faqs = state.map(({ id, ques, answer }) => {
    console.log(ques);
    return (
      <div key={id}>
        <FaqItem Question={ques} Answer={answer} />
      </div>
    );
  });
  return (
    <SectionContainer Tag="section" Class="faq-page">
      <PgHead
        title="FAQ'S"
        boldParagraph="At Muroexe we take the happiness of our customers very serious and we try to give an answer as soon as possible to all of your questions. You can always write us to: userexperience@muroexe.com."
      />

      <p className="text-muroexe">
        Many questions are very common, so maybe you'll find the answer your
        searching for over here.
      </p>
      {Faqs}
    </SectionContainer>
  );
};

export default FAQ;
