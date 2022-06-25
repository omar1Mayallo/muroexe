import React from "react";
import CustomButton from "../../Items/Custom-button/CustomButton";
import {
  BsCreditCard,
  BsPaypal,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";

import "./Payment.scss";
const Payment = () => {
  return (
    <aside className="payment-section">
      <div className="ask-box">
        <h4>Just Ask</h4>
        <div className="ask-method">
          <div className="ask-item">
            <BsFillEnvelopeFill />
            <span>user@gmail.com</span>
          </div>
          <div className="ask-item">
            <BsFillTelephoneFill />
            <span>982 02 56 74</span>
          </div>
        </div>
      </div>
      <div className="payment-method-box">
        <h4>Payment Methods</h4>
        <div className="payment-methods">
          <div className="pay-method">
            <CustomButton Payment className="me-3">
              Credit card <BsCreditCard />
            </CustomButton>
            <CustomButton Payment>
              PayPal <BsPaypal />
            </CustomButton>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Payment;
