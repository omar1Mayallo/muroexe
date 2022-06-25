import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import PgHead from "../../Components/Layout/PgHead/PgHead";
import ProductItem from "../../Components/Items/ProductItem/ProductItem";
import WithSpinner from "../../Components/HOC/Spinner/Spinner";

const Department = () => {
  const {shopData} = useSelector((state) => state.shop);
  const {departmentId} = useParams();

  const findDepartment = Object.keys(shopData)
    .map((key) => shopData[key])
    .find((item) => item.id.toLowerCase() === departmentId.toLowerCase());

  const {items, description} = findDepartment || {};

  const ItemsList = items?.map((item) => (
    <div className="col-lg-3 col-md-6 col-12" key={item.id}>
      <ProductItem item={item} />
    </div>
  ));

  return (
    <div className="Collection-page container my-5">
      <PgHead title={departmentId} boldParagraph={description} />
      <div className="row">{ItemsList}</div>
    </div>
  );
};

export default WithSpinner(Department);
