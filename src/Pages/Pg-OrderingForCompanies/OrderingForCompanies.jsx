import React from "react";
import PgHead from "../../Components/Layout/PgHead/PgHead";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";

const OrderingForCompanies = () => {
  return (
    <SectionContainer Tag="section" Class="OrderingForCompanies-page">
      <PgHead
        title="Dress your project"
        boldParagraph="AT MUROEXE WE LOVE THE FUTURE, INNOVATION, CHANGE AND CREATIVITY"
      />

      <p className="text-muroexe">
        Therefore we started a special program for entrepreneurs, start-ups and
        SMEs who want to dress Muroexe. If you are several people at your
        project that want wear our shoes, write us! We weekly select up to 10
        projects, which will be able to buy Muroexe with a 25% discount.
      </p>
      <p className="text-muroexe strongBold">HOW TO TAKE PART</p>
      <p className="text-muroexe">
        Email us to projects@muroexe.com writing who are you, what you do, your
        website address, and the number of pairs you would like and if you
        attach us a song or even a funny video will be great.
      </p>
      <p className="text-muroexe strongBold">CONDITIONS</p>
      <p className="text-muroexe">
        1. The discount is only applicable purchasing minimum 10 pairs.
        <br />
        <br />
        2. The discount will be applied on the amount of whole purchase.
        <br />
        <br />
        3. Shipment, exchange and return is free. Exchange and returns can be
        handled separately but with the reference of the general purchase.
        <br />
        <br />
        4. Not combinable with other discounts.
        <br />
        <br />
        5. We reserve the right to ask for more information about the projects
        in order to evaluate the application.
      </p>
    </SectionContainer>
  );
};

export default OrderingForCompanies;
