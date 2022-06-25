import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Modal} from "react-bootstrap";
import {FaSortAmountUp, FaSearch} from "react-icons/fa";
import ProductItem from "../ProductItem/ProductItem";
import NoItemYet from "../NoItemYet/NoItemYet";
import "./SearchModal.scss";

const SearchModal = (props) => {
  const [searchVal, setSearchVal] = useState(null);
  const [orderVal, setOrderVal] = useState("all");
  const {shopData} = useSelector((state) => state.shop);
  let allProductsData = [];
  Object.keys(shopData).map((title) => {
    const {items} = shopData[title];
    allProductsData.push(...items);
  });
  const handelSearch = (e) => setSearchVal(e.target.value);
  const handelChange = (e) => setOrderVal(e.target.value);
  const searchFilteredProducts = allProductsData.filter((item) => {
    if (searchVal !== null) {
      return item.name.toLowerCase().includes(searchVal.toLowerCase());
    }
    return item;
  });
  if (orderVal === "Cheapest") {
    searchFilteredProducts.sort((a, b) => a.price - b.price);
  } else if (orderVal === "Expensive") {
    searchFilteredProducts.sort((a, b) => b.price - a.price);
  }
  const Items = searchFilteredProducts.map((item) => (
    <div className="col-lg-3 col-md-4 col-12" key={item.id}>
      <ProductItem item={item} />
    </div>
  ));
  return (
    <Modal
      {...props}
      fullscreen={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="Search-input">
            <FaSearch />
            <input
              type="text"
              placeholder="Search in Muroexe"
              onChange={handelSearch}
            />
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="head-bar">
          <div className="Products-num">
            <span>{searchFilteredProducts.length} results found</span>
          </div>
          <div className="selectBox-container">
            <label htmlFor="order-by">
              <FaSortAmountUp /> Order by :
            </label>
            <select name="order-by" id="order-by" onChange={handelChange}>
              <option value="all">All</option>
              <option value="Cheapest">Cheapest first</option>
              <option value="Expensive">Expensive first</option>
            </select>
          </div>
        </div>
        <div className="container search-container">
          {!searchFilteredProducts.length ? (
            <NoItemYet>No Items Found !</NoItemYet>
          ) : (
            <div className="row my-5">{Items}</div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default SearchModal;
