import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
  const [showScrollClass, setShowScrollClass] = useState("");
  useEffect(() => {
    const showScrollTop = () => {
      if (window !== null) {
        let windowHeight = window.scrollY;
        // console.log(windowHeight);
        windowHeight > 80 ? setShowScrollClass("show") : setShowScrollClass("");
      }
    };
    window.addEventListener("scroll", showScrollTop);
    return () => window.removeEventListener("scroll", showScrollTop);
  }, [showScrollClass]);
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={`scroll-top-container ${showScrollClass}`} onClick={toTop}>
      <AiOutlineArrowUp className="bounce" />
    </div>
  );
};
export default ScrollToTop;
