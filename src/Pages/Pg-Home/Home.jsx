import React from "react";
import {useSelector} from "react-redux";
import Collections from "../../Components/Sections/HM-Collections/Collections";
import Main from "../../Components/Sections/HM-Main/Main";
import Features from "../../Components/Sections/HM-Features/Features";
import FeaturedProductsCarousel from "../../Components/Sections/HM-FeaturedProductsCarousel/FeaturedProductsCarousel";
import InstaCarousel from "../../Components/Sections/HM-InstaCarousel/InstaCarousel";
import NewProductsCarousel from "../../Components/Sections/HM-NewProductsCarousel/NewProductsCarousel";
import WithSpinner from "../../Components/HOC/Spinner/Spinner";

const CollectionsWithSpinner = WithSpinner(Collections);
const NewProductsCarouselWithSpinner = WithSpinner(NewProductsCarousel);
const FeaturedProductsCarouselWithSpinner = WithSpinner(
  FeaturedProductsCarousel
);

const Home = () => {
  const {isLoading} = useSelector((state) => state.shop);
  return (
    <>
      <Main />
      <CollectionsWithSpinner isLoading={isLoading} />
      <NewProductsCarouselWithSpinner isLoading={isLoading} />
      <Features />
      <FeaturedProductsCarouselWithSpinner isLoading={isLoading} />
      <InstaCarousel />
    </>
  );
};

export default Home;
