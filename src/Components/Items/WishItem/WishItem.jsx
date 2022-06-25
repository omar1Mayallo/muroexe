import React from "react";
import {BsX} from "react-icons/bs";
import {removeItemFromWishList} from "../../../Redux/StateSlices/Wishlist/WishListSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import "./WishItem.scss";
const WishItem = ({item}) => {
  const {imageUrl, name, price} = item;
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <div className="wish-item">
      <div
        className="img-box"
        onClick={() =>
          Navigate(
            `/product/${name
              .toLowerCase()
              .split(" ")
              .toString()
              .replaceAll(",", "-")}`
          )
        }
      >
        <img src={imageUrl} alt="img-item" width="130px" height="130px" />
      </div>
      <div className="text-box">
        <h4>{name}</h4>
        <span>{price} $</span>
      </div>
      <div className="remove-button">
        <BsX onClick={() => Dispatch(removeItemFromWishList(item))} />
      </div>
    </div>
  );
};
export default React.memo(WishItem);
