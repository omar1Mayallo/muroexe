import React from "react";
import {useDispatch} from "react-redux";
import {MdArrowLeft, MdArrowRight} from "react-icons/md";
import {BsX} from "react-icons/bs";
import {
  deleteItem,
  removeItem,
  addItem,
} from "../../../Redux/StateSlices/Cart/CartSlice";

import "./CheckoutItem.scss";

const CheckoutItem = ({cartItem}) => {
  const Dispatch = useDispatch();
  const {name, imageUrl, quantity, price} = cartItem;
  return (
    <div className="checkout-item my-3">
      <div className="item-desc quart">
        <img src={imageUrl} alt="item-img" width="100px" />
      </div>
      <div className="item-name">
        <span>{name}</span>
      </div>
      <div className="item-quantity">
        <div>
          <MdArrowLeft onClick={() => Dispatch(removeItem(cartItem))} />
        </div>
        <span>{quantity}</span>
        <div>
          <MdArrowRight onClick={() => Dispatch(addItem(cartItem))} />
        </div>
      </div>
      <div className="item-price">
        <span>{price} $</span>
      </div>
      <div className="item-remove">
        <span>
          <BsX onClick={() => Dispatch(deleteItem(cartItem))} />
        </span>
      </div>
    </div>
  );
};

export default React.memo(CheckoutItem);
