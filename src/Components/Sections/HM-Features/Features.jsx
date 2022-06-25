import React, { useState } from "react";

import SectionContainer from "../../Layout/SectionContainer/SectionContainer";
import FeatureItem from "../../Items/FeatureItem/FeatureItem";

const Features = () => {
  const [features] = useState([
    {
      id: 1,
      title: "Daily offers",
      ImgURL: "https://i.ibb.co/PxHgrRV/shaking.pngs",
      text: "Discover our offers and exclusive deals and collections.",
    },
    {
      id: 2,
      title: "Smooth Shipping and Return",
      ImgURL: "https://i.ibb.co/r7B3jSV/shipping.png",
      text: "Enjoy our smooth shipping experience and if you are not in love with your product, we will pick it up",
    },
    {
      id: 3,
      title: "Exceptional Customer Care",
      ImgURL: "https://i.ibb.co/fqfvrYG/service.png",
      text: "Our customer care specialists are always ready to help",
    },
    {
      id: 4,
      title: "Endless varieties",
      ImgURL: "https://i.ibb.co/L85gN4m/List.png",
      text: "A wide variety of exclusive design ideas, crafted by designers from different cultures, backgrounds, and Countries.",
    },
  ]);
  const Features = features.map(({ id, ...restProps }) => (
    <div key={id} className="col-lg-3 col-sm-6 text-center">
      <FeatureItem {...restProps} />
    </div>
  ));
  return (
    <SectionContainer Tag="section" Class="features-section">
      <div className="row">{Features}</div>
    </SectionContainer>
  );
};

export default Features;
