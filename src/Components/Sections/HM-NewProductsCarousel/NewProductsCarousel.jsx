import React from "react";
import {useSelector} from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SectionContainer from "../../Layout/SectionContainer/SectionContainer";
import SectionHead from "../../Layout/SectionHead/SectionHead";
import ProductItem from "../../Items/ProductItem/ProductItem";

const NewProductsCarousel = () => {
  const {shopData} = useSelector((state) => state.shop);
  let newArr = [];
  Object.keys(shopData)
    .map((key) => shopData[key])
    .map((dep) =>
      dep.items.map((item) => (item.newState ? newArr.push(item) : null))
    );
  const filteredData = newArr.filter((_, idx) => idx < 8);

  const NewItems = filteredData.map((item) => (
    <div className="carousel-element m-2" key={item.id}>
      <ProductItem item={item} />
    </div>
  ));
  return (
    <SectionContainer Tag="section" Class="NewProducts-Carousel">
      <SectionHead head="New products" />
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        draggable
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 768,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 767,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {NewItems}
      </Carousel>
    </SectionContainer>
  );
};

export default NewProductsCarousel;
