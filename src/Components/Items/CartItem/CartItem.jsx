import React from "react";
import "./CartItem.scss";
const CartItem = ({item: {name, imageUrl, price, quantity}}) => {
  return (
    <div className="cart-item">
      <div className="cartItem-container">
        <div className="cart-item-thumbnail">
          <img src={imageUrl} alt="item-img" />
        </div>
        <div className="cart-item-info">
          <h6 className="item-name">{name}</h6>
          <div className="item-calc">
            <span className="item-price">{price} $</span>
            <span className="item-quantity">Quantity : {quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
