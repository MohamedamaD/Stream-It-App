import React from "react";
import "./sidebar.scss";
import { BiX } from "react-icons/bi";
import { images, navLinks } from "../../constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivationLink, setVisible } from "../../store/slices/navSlice";

export const Sidebar = () => {
  const { sidebarIsVisible, activeLink } = useSelector((state) => state.nav);
  const dispatch = useDispatch();

  return (
    <div className={sidebarIsVisible ? `__sidebar active` : `__sidebar`}>
      <div className="__sidebar-container">
        <div className="__brand">
          <div>
            <img src={images.LOGO} alt="" />
          </div>
          <button
            onClick={() => {
              dispatch(setVisible(false));
            }}
          >
            <BiX className="__exit-icon" />
          </button>
        </div>
        <div className="__links">
          {navLinks.map((link, i) => (
            <Link
              to={`/${link}`}
              className={activeLink === link ? "active" : ""}
              key={i}
              onClick={(ev) => {
                dispatch(setActivationLink(link));
              }}
            >
              {link === "" ? "home" : link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
