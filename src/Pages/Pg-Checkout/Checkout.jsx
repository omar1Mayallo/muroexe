import React from "react";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import CheckoutSec from "../../Components/Sections/CHK-Checkout/CheckoutSec";
import Payment from "../../Components/Sections/CHK-Payment/Payment";

const Checkout = () => {
  return (
    <SectionContainer Tag="section" Class="Checkout-page">
      <div className="row">
        <div className="col-lg-7">
          <CheckoutSec />
        </div>
        <div className="col-lg-5">
          <Payment />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Checkout;
