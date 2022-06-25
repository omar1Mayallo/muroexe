import React, {useState} from "react";
import AboutBlockItem from "../../Components/Items/AboutBlockItem/AboutBlockItem";
import PgHead from "../../Components/Layout/PgHead/PgHead";
import SectionContainer from "../../Components/Layout/SectionContainer/SectionContainer";

const DesignProcess = () => {
  const [state] = useState([
    {
      id: 1,
      title: "Functionality.",
      ImgURL: "https://i.ibb.co/1rGsgJx/des-Icon-1.jpg",
      text: "We search for a contemporary and minimal aesthetic in all out models.",
    },
    {
      id: 2,
      title: "Our values",
      ImgURL: "https://i.ibb.co/ww6vJ5p/des-Icon-2.jpg",
      text: "We take between 9 and 12 months conceptualizing, designing, prototyping and testing our new products. We have industrial, fashion and visual designers in every design process. In our design process we also back our decisions with the opinion of thousands of clients that answer our questionnaires periodically.",
    },
    {
      id: 3,
      title: "Our design process.",
      ImgURL: "https://i.ibb.co/D7YvBsJ/des-Icon-3.jpg",
      text: "Muroexe is simplicity, it's the future, creativity, well thought out products, weird, extraterrestrial, artificial intelligent, Netflix, an HBO series, industrial, post-humanism, different, the possibility to populate Mars, science and always forward looking.There are people who love what we do. And people who don't understand anything.",
    },
    {
      id: 4,
      title: "Our production.",
      ImgURL: "https://i.ibb.co/ZVT0mFF/des-Icon-4.jpg",
      text: "We manufacture our products in Spain and China. In Spain, we develop new products, we have a non-stop production and we create the limited editions. In China, we do all the Research and Development, we test the latest fabrics on the market and we also manufacture a large portion of our production. In both places, we know and visit the fabric frequently. We work hand in hand with them and we do care about the people working there so they got proper working conditions.",
    },
  ]);
  const DesignInfoBlocks = state.map(({id, ...restProps}) => (
    <div className="col-md-6 col-12" key={id}>
      <AboutBlockItem {...restProps} />
    </div>
  ));
  return (
    <>
      <SectionContainer Tag="section" Class="design-page">
        <PgHead
          title="Design process."
          boldParagraph={`We believe in the premise "a few but good".
        That's how we design products.`}
        />
        <div className="text-center">
          <p className="text-muroexe">
            We dress a generation of professional youths that need functional
            products for their everyday life in the city. We merge sport
            footwear technologies with the formal aesthetic of shoes to build
            icons.
          </p>
        </div>
        <div className="images-design my-5">
          <img
            src="https://i.ibb.co/cJz0X3W/design-1.jpg"
            alt="design-img"
            width="100%"
            height="auto"
          />
          <div className="row my-3">
            <div className="col-6">
              <img
                src="https://i.ibb.co/PQKMxSy/design-2.jpg"
                alt="design-img"
                width="100%"
                height="auto"
              />
            </div>
            <div className="col-6">
              <img
                src="https://i.ibb.co/vdv3SLj/design-3.jpg"
                alt="design-img"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="des-blocks my-4 row">{DesignInfoBlocks}</div>
      </SectionContainer>
    </>
  );
};

export default DesignProcess;
