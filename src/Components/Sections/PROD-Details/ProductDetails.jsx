import React from "react";
import {useDispatch} from "react-redux";
import {Accordion} from "react-bootstrap";
import {BsSuitHeart, BsPieChartFill} from "react-icons/bs";
import CustomButton from "../../Items/Custom-button/CustomButton";
import {addItemToWishList} from "../../../Redux/StateSlices/Wishlist/WishListSlice";
import {addItem} from "../../../Redux/StateSlices/Cart/CartSlice";
import "./ProductDetails.scss";

const ProductDetails = ({item}) => {
  const Dispatch = useDispatch();
  const {description, name, price, size, style, onSaleValue, newState} =
    item || {};

  return (
    <div className="product-details">
      <div className="product-details-header">
        <div className="product-details-head">
          <h2 className="product-name">
            {name?.toUpperCase()}
            {newState ? <span className="new-badge">New</span> : null}
          </h2>
          <div
            className="wish-icon"
            title="Add To Wishlist"
            onClick={() => Dispatch(addItemToWishList(item))}
          >
            <BsSuitHeart />
          </div>
        </div>
        <span className="product-ref">Reference MARNEREDBROWN43</span>
        <span className="product-price">
          $ {price}
          {onSaleValue ? (
            <span className="product-sale">$ {price + onSaleValue}</span>
          ) : null}
        </span>
        <span className="product-VAT">VAT included</span>
      </div>
      {/* ******************************************************* */}
      <div className="product-details-info">
        <div className="product-size-block">
          <div className="size-list">
            <span className="size-list-header">Size</span>
            <ul className="size-list-block">
              {size?.map((el) => (
                <li className="size-item" key={Math.random()}>
                  <input type="radio" name="size" value={el} />
                  <span className="radio-label">{el}</span>
                </li>
              ))}
            </ul>
          </div>
          <CustomButton ProductDetails>
            <BsPieChartFill />
            Size Chart
          </CustomButton>
        </div>
        <div className="product-add-block">
          <div className="row">
            <div className="col-3">
              <input
                type="number"
                name="quantity"
                min="1"
                max="10"
                placeholder="num"
              />
            </div>
            <div className="col-9">
              <CustomButton
                ProductDetails
                type="submit"
                onClick={() => Dispatch(addItem(item))}
              >
                Add To Cart
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      {/* ******************************************************* */}
      <div className="product-details-accordion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Description</Accordion.Header>
            <Accordion.Body>{description}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Product Details</Accordion.Header>
            <Accordion.Body>
              <div className="detail-item">
                <span>Color</span>
                <span>Red</span>
              </div>
              <div className="detail-item">
                <span>Style</span>
                <span>{style}</span>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Cleaning</Accordion.Header>
            <Accordion.Body>With a damp cloth, hand rub.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductDetails;
