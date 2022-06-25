import React from "react";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import PgHead from "../../Components/Layout/PgHead/PgHead";
const Returns = () => {
  return (
    <SectionContainer Tag="section" className="returns-page">
      <PgHead title="Returns" />
      <p className="text-muroexe strongBold">Can I return any product?</p>
      <p className="text-muroexe">
        Returns are not free of charge but at the customer's expense. Returns of
        products that are not in perfect condition or that show clear signs of
        use and/or manipulation are not allowed. The product must be returned in
        its original box and must be accompanied by a copy of the purchase
        invoice or delivery note.
      </p>
      <p className="text-muroexe strongBold">Return of used products</p>
      <p className="text-muroexe">
        We insist, we strive to admit all returns, but in the (unlikely) event
        that we receive a returned item in poor condition or used, we will
        unfortunately not be able to accept the return and will send it to you
        again.
      </p>
      <p className="text-muroexe strongBold">
        How can I check the status of an order?
      </p>
      <p className="text-muroexe">
        We will inform you by mail of the most important steps through which
        your order goes through, which are the receipt of the order, the
        preparation, and the shipment. You can also check the shipping tracking
        number in the data of your order, in case you want to make a detailed
        follow-up of the route. If you do not see the tracking number in your
        order, do not worry, please contact us and we will look for it to
        facilitate it.
      </p>
    </SectionContainer>
  );
};
export default Returns;
