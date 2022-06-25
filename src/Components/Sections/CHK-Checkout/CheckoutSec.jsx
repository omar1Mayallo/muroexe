import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "../../Items/CheckoutItem/CheckoutItem";
import CustomButton from "../../Items/Custom-button/CustomButton";
import { clearItems } from "../../../Redux/StateSlices/Cart/CartSlice";
import NoItemYet from "../../Items/NoItemYet/NoItemYet";
import "./Checkout.scss";

const CheckoutSec = () => {
  const Dispatch = useDispatch();
  const Navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const CheckoutItems = cartItems.map((cartItem) => (
    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
  ));
  const TotalPrice = cartItems.reduce(
    (addedPrice, cartItem) => addedPrice + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <section className="checkout-section mb-5 pe-5">
      <div className="checkout-heading">
        <div className="head-box">
          <span>Product</span>
        </div>
        <div className="head-box">
          <span>name</span>
        </div>
        <div className="head-box">
          <span>Quantity</span>
        </div>
        <div className="head-box">
          <span>Price</span>
        </div>
        <div className="head-box remove">
          <span>Remove</span>
        </div>
      </div>
      <div className="checkout-items-container">
        {cartItems.length ? (
          CheckoutItems
        ) : (
          <>
            <NoItemYet>No Items Added Yet !</NoItemYet>
            <div className="text-center">
              <CustomButton onClick={() => Navigate("/shop")}>
                Continue Shopping
              </CustomButton>
            </div>
          </>
        )}
      </div>
      {cartItems.length ? (
        <div className="total-price">
          <CustomButton Clear onClick={() => Dispatch(clearItems())}>
            Clear
          </CustomButton>
          <span>Total : {TotalPrice} $</span>
        </div>
      ) : null}
    </section>
  );
};

export default CheckoutSec;
