import React, {useState} from "react";
import {Link} from "react-router-dom";
import {MdCall, MdMail, MdLocationOn} from "react-icons/md";
import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs";
import {BiChevronRight} from "react-icons/bi";

import "./Footer.scss";

const Footer = () => {
  const [Theme, setTheme] = useState("dark");
  const [footerLinks] = useState([
    {id: 1, navName: "About us", path: "/about"},
    {
      id: 2,
      navName: "Ordering for companies",
      path: "/ordering-for-companies",
    },
    {id: 3, navName: "Design Process", path: "/design-process"},
    {id: 4, navName: "Blog", path: "/blog"},
    {id: 5, navName: "Legal notice", path: "/legal-notice"},
    {id: 6, navName: "Shipping", path: "/shipping"},
    {id: 7, navName: "Returns", path: "/returns"},
    {id: 8, navName: "Terms & conditions", path: "/terms-and-conditions"},
    {id: 9, navName: "Frequently asked questions", path: "/faq"},
  ]);
  const handelChange = () => {
    Theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  const MuroexeWorld = footerLinks.slice(0, 4).map(({id, navName, path}) => (
    <li key={id} className="ft-link">
      <Link to={path}>
        <BiChevronRight />
        {navName}
      </Link>
    </li>
  ));
  const Information = footerLinks.slice(4, 5).map(({id, navName, path}) => (
    <li key={id} className="ft-link">
      <Link to={path}>
        <BiChevronRight />
        {navName}
      </Link>
    </li>
  ));
  const BuyGuide = footerLinks
    .slice(5, footerLinks.lengths)
    .map(({id, navName, path}) => (
      <li key={id} className="ft-link">
        <Link to={path}>
          <BiChevronRight />
          {navName}
        </Link>
      </li>
    ));
  return (
    <footer className={`footer ${Theme}`}>
      <div className="container pt-5 pb-2">
        <div className="row">
          <div className="ft-block col-lg-3 col-md-6 col-xs-12 mb-3">
            <p className="ft-block-title">Muroexe World</p>
            <ul className="ft-block-links">{MuroexeWorld}</ul>
          </div>
          <div className="ft-block col-lg-3 col-md-6 col-xs-12 mb-3">
            <p className="ft-block-title">Information</p>
            <ul className="ft-block-links">{Information}</ul>
          </div>
          <div className="ft-block col-lg-3 col-md-6 col-xs-12 mb-3">
            <p className="ft-block-title">Buy guide</p>
            <ul className="ft-block-links">{BuyGuide}</ul>
          </div>
          <div className="ft-block col-lg-3 col-md-6 col-xs-12 mb-3">
            <p className="ft-block-title">Contact us</p>
            <ul className="ft-block-links">
              <li className="ft-contact-item">
                <MdLocationOn className="me-2" />
                C.de Mendez Alvaro, 20 Madrid
              </li>
              <li className="ft-contact-item">
                <MdCall className="me-2" />
                982 02 56 74
              </li>
              <li className="ft-contact-item">
                <MdMail className="me-2" />
                user@gmail.com
              </li>
              <li className="ft-contact-item-social mt-4">
                <a
                  href="https://www.facebook.com/muroexe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook className="social Fac" />
                </a>
                <a
                  href="https://twitter.com/Muroexe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitter className="social Twi" />
                </a>
                <a
                  href="https://www.instagram.com/muroexe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram className="social Ins" />
                </a>
                <a
                  href="https://www.youtube.com/user/muroexe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube className="social YouT" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <div className="d-flex align-items-center justify-content-between">
            <p>&copy; Copyright MAYALLO Projects 2022 All rights reserved.</p>
            <div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onChange={handelChange}
                />
                <label> Dark & Light modes Footer</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//
