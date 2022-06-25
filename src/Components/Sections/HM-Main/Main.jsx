import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import SectionContainer from "../../Layout/SectionContainer/SectionContainer";
import CustomButton from "../../Items/Custom-button/CustomButton";
import "./Main.scss";

const Main = () => {
  const Navigate = useNavigate();
  const [activeButton, setActiveButton] = useState(1);
  const [imgData] = useState([
    {
      id: 1,
      imgURL: "https://i.ibb.co/Bfpq0z7/co-caro.png",
    },
    {
      id: 2,
      imgURL: "https://i.ibb.co/sm7PsPD/shoes-caro.png",
    },
    {
      id: 3,
      imgURL: "https://i.ibb.co/ZMsy1B7/bag-caro.png",
    },
    {
      id: 4,
      imgURL: "https://i.ibb.co/d6GTHG1/glass-caro.png",
    },
  ]);
  const changeActive = (index) => {
    setActiveButton(index);
  };
  const CarouselImages = imgData.map(({id, imgURL}) => (
    <div
      key={id}
      className={
        activeButton === id ? "img-box fadeIn active-Box" : "img-box fadeIn"
      }
    >
      <img
        className="img-item active"
        src={imgURL}
        alt="main-img"
        width="350px"
        height="auto"
      />
    </div>
  ));
  const CarouselIndicators = imgData.map(({id}) => (
    <li
      key={id}
      className={
        activeButton === id
          ? "indicator-item active-indicator"
          : "indicator-item"
      }
      onClick={() => changeActive(id)}
    ></li>
  ));
  return (
    <SectionContainer Tag={"main"} Class={"Main-section"}>
      <div className="row">
        <div className="content col-md-6 col-xs-12 ">
          <h2 className="display-3">
            Muro<span>exe</span>
          </h2>
          <p className="bold-paragraph">Good Shoes Take you To Good Places</p>
          <p className="regular-paragraph">
            Follow with us the best fashion trends of shoes and accessories at
            <span> MUROEXE</span> online Shop
          </p>
          <CustomButton onClick={() => Navigate("/shop")}>
            Discover More
          </CustomButton>
        </div>
        <div className="carousel-container col-md-6 col-sm-12">
          {CarouselImages}
          <ul className="main-carousel-indicators">{CarouselIndicators}</ul>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Main;
