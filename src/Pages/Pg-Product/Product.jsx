import React from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";
import FeaturedProductsCarousel from "../../Components/Sections/HM-FeaturedProductsCarousel/FeaturedProductsCarousel";
import ProductCarousel from "../../Components/Sections/PROD-Carousel/ProductCarousel";
import ProductDetails from "../../Components/Sections/PROD-Details/ProductDetails";
import WithSpinner from "../../Components/HOC/Spinner/Spinner";
const Product = () => {
  const {shopData} = useSelector((state) => state.shop);
  const Params = useParams();
  let allProductsData = [];
  Object.keys(shopData)
    .map((key) => shopData[key])
    .map((shData) => allProductsData.push(...shData.items));
  const productData = allProductsData.find(
    (item) =>
      item.name.toLowerCase().split(" ").toString().replaceAll(",", "-") ===
      Params.productId
  );
  const {hoverImgUrl, imageUrl} = productData || {};
  return (
    <SectionContainer Tag="section" Class="product-page">
      <div className="product-container row">
        <div className="col-md-6 mb-5">
          <ProductCarousel hoverImgUrl={hoverImgUrl} imageUrl={imageUrl} />
        </div>
        <div className="col-md-6">
          <ProductDetails item={productData} />
        </div>
      </div>
      <FeaturedProductsCarousel />
    </SectionContainer>
  );
};
export default WithSpinner(Product);
