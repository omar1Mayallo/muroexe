import React, {Component} from "react";
import Pghead from "../../Components/Layout/PgHead/PgHead";
import AboutBlockItem from "../../Components/Items/AboutBlockItem/AboutBlockItem.jsx";
import {AboutImg} from "./About.styled";
class About extends Component {
  state = {
    title: "About Us",
    boldParagraph1:
      "We dress a generation of urban professionals, creatives and innovators that need functional yet modern products for their everyday lives.",
    boldParagraph2:
      "Our HQ is in Madrid, but we also have offices with contributors in Lisbon, Berlin, Barcelona, London, Warsaw, Stockholm, Amsterdam, Toronto, New York and Tokyo.",
    aboutUsArr: [
      {
        id: 1,
        title: "History",
        ImgURL: "https://i.ibb.co/yYK4nFx/history.png",
        text: "We were born on September 1st 2013. The first day we sold 11 pairs. The second day 3 and the third, 0. We went for a walk to think about what were we doing. After that, unexpectedly, in two months, we were sold out. Today we are team of more than 40 people in our HQ and retail stores. Additionally, we also collaborate with agencies, distributors, photographers and ambassadors from all over the world.",
      },
      {
        id: 2,
        title: "Our values",
        ImgURL: "https://i.ibb.co/F7S6ZsF/value.png",
        text: "Balanced between functionality, aesthetics and minimalism with a less is more approach to design. User-centric in all design processes, experimentation, innovation, and future outlook. We manufacture in places with happy people in good working conditions.",
      },
      {
        id: 3,
        title: "We like",
        ImgURL: "https://i.ibb.co/S57nmCD/smiley.png",
        text: "Muroexe is simplicity, it's the future, creativity, well thought out products, weird, extraterrestrial, artificial intelligent, Netflix, an HBO series, industrial, post-humanism, different, the possibility to populate Mars, science and always forward looking.There are people who love what we do. And people who don't understand anything.",
      },
    ],
  };
  render() {
    const {title, boldParagraph1, boldParagraph2, aboutUsArr} = this.state;
    const AboutUsBlock = aboutUsArr.map(({id, ...restprops}) => (
      <div className="col-md-4 col-xs-12 mb-2" key={id}>
        <AboutBlockItem {...restprops} />
      </div>
    ));
    return (
      <section className="about-sec">
        <div className="container">
          <Pghead title={title} boldParagraph={boldParagraph1} />
          <div className="row">{AboutUsBlock}</div>
        </div>
        <AboutImg />
        <div className="container">
          <Pghead boldParagraph={boldParagraph2} />
        </div>
      </section>
    );
  }
}
export default About;
