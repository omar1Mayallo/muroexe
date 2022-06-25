import React, { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartModal from "../Cart-Modal/CartModal";

import "./CartIcon.scss";
const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const numOfItems = cartItems.reduce(
    (allItemsNum, cartItem) => allItemsNum + cartItem.quantity,
    0
  );
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="cart-icon" onClick={() => setModalShow(true)}>
        <BsCartFill />
        <span className="cart-counter">{numOfItems}</span>
      </div>
      <CartModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default CartIcon;
