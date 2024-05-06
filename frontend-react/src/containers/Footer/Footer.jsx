import React from "react";
import "./Footer.scss";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";

import { FlatButton, Input } from "../../components";
import { images } from "../../constants/images";
import { aboutCompany, movies, quickLinks, termsLinks } from "../../constants";

export const Footer = () => {
  return (
    <div className="_footer">
      <div className="_footer_wrapper container">
        <div className="_footer_top_part">
          <div className="_footer_desc _footer_item">
            <img src={images.LOGO} alt="logo" />
            <p>Email us:customer@stremit.com</p>
            <p>COSTUMER SERVICES</p>
            <h1>+(480)555-0103</h1>
          </div>

          <div className="links _footer_item">
            <h1 className="__link-title">quick links</h1>
            <ul>
              {quickLinks.map((item, i) => (
                <li key={i}>
                  <a href={item}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="links _footer_item">
            <h1 className="__link-title">movie to watch</h1>
            <ul>
              {movies.map((item, i) => (
                <li key={i}>
                  {" "}
                  <a href={item}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="links _footer_item">
            <h1 className="__link-title">about company</h1>
            <ul>
              {aboutCompany.map((item, i) => (
                <li key={i}>
                  <a href={item}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="_footer_subscribe _footer_item">
            <h1 className="__link-title">Subscribe </h1>
            <div className="_footer_input">
              <Input type="text" placeholder="Email" />
              <FlatButton value="SUBSCRIBE" />
            </div>
            <div className="__icons-wrapper">
              <a href="##">
                <span>
                  <BiLogoFacebookCircle size={25} />
                </span>
              </a>
              <a href="##">
                <span>
                  <BiLogoInstagram size={25} />
                </span>
              </a>
              <a href="##">
                <span>
                  <BiLogoTwitter size={25} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="_footer_bottom_part">
          <div className="_footer_left_part">
            {termsLinks.map((item, i) => (
              <a href={`#${item}`} key={i}>
                {item}
              </a>
            ))}
            <p>
              2023 <span>STAREAMIT</span>.All Right Reserved.All Viedos and show
              on platform are trademarks of,and all realted images and content
              are the property of, Stream Inc. Duplicated and copy of this is
              stricity prohibited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
