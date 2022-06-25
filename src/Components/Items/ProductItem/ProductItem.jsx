import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {BsSuitHeart, BsFillBagFill} from "react-icons/bs";

import {addItem} from "../../../Redux/StateSlices/Cart/CartSlice";
import {addItemToWishList} from "../../../Redux/StateSlices/Wishlist/WishListSlice";

import "./ProductItem.scss";

const ProductItem = ({item}) => {
  const {onSaleValue, imageUrl, hoverImgUrl, name, price, newState} = item;
  const Dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <div className="product-card mb-4">
      {newState && <div className="new-badge">New</div>}
      {onSaleValue && <div className="sale-value">$ {onSaleValue + price}</div>}
      <div
        className="wish-icon"
        title="Add To Wishlist"
        onClick={() => Dispatch(addItemToWishList(item))}
      >
        <BsSuitHeart />
      </div>
      <div
        className="card-img-box"
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
        <img className="thumbnail" src={imageUrl} alt="card-img" />
        <img className="thumbnail-hover" src={hoverImgUrl} alt="card-img" />
      </div>
      <div className="card-text-box">
        <div>
          <h3 className="title">{name}</h3>
          <div>
            <span className="after-sale">$ {price}</span>
            {onSaleValue ? (
              <span className="price">$ {onSaleValue}</span>
            ) : null}
          </div>
        </div>
        <div className="toCart-icon" onClick={() => Dispatch(addItem(item))}>
          <BsFillBagFill />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
