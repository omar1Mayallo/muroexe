import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductCarousel.scss";
const ProductCarousel = ({hoverImgUrl, imageUrl}) => {
  return (
    <div className="carousel-block">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={99999}
        centerMode={false}
        className="product-carousel"
        containerClass="carousel-container text-center"
        dotListClass="dot-carousel"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="product-carousel-item"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        showDots
        sliderClass="carousel-slider"
        slidesToSlide={1}
        swipeable
      >
        <img src={imageUrl} height="auto" width="auto" alt="Product-img" />
        <img src={hoverImgUrl} height="auto" width="auto" alt="Product-img" />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
