import React, { useState } from "react";
import SectionContainer from "../../Layout/SectionContainer/SectionContainer";
import SectionHead from "../../Layout/SectionHead/SectionHead";
import CustomButton from "../../Items/Custom-button/CustomButton";
import InstaItem from "../../Items/InstaItem/InstaItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const InstaCarousel = () => {
  const [instaImages] = useState([
    { id: 1, imgUrl: "https://i.ibb.co/W3v9X1h/insta-1.jpg" },
    { id: 2, imgUrl: "https://i.ibb.co/ByJFszF/insta-2.jpg" },
    { id: 3, imgUrl: "https://i.ibb.co/JF96n92/insta-3.jpg" },
    { id: 4, imgUrl: "https://i.ibb.co/dLpQfDm/insta-4.jpg" },
    { id: 5, imgUrl: "https://i.ibb.co/1L8g25G/insta-5.jpg" },
    { id: 6, imgUrl: "https://i.ibb.co/PcW6yN8/insta-6.jpg" },
    { id: 7, imgUrl: "https://i.ibb.co/JFPJTf0/insta-7.jpg" },
    { id: 8, imgUrl: "https://i.ibb.co/Z87LRnz/insta-8.jpg" },
  ]);
  const instaItems = instaImages.map(({ id, ...restProps }) => (
    <InstaItem key={id} {...restProps} />
  ));
  return (
    <SectionContainer Tag="section" Class="instagram-carousel">
      <SectionHead para="Follow Us On Instagram" head="@muroexe" />
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
            items: 5,
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
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {instaItems}
      </Carousel>
      <div className="text-center mt-4">
        <a
          href="https://www.instagram.com/muroexe/"
          target="_blank"
          rel="noreferrer"
        >
          <CustomButton>Follow Us</CustomButton>
        </a>
      </div>
    </SectionContainer>
  );
};

export default InstaCarousel;
