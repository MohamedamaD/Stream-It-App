import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { images, navLinks, pagesLinks } from "../../constants";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setVisible } from "../../store/slices/navSlice";
import { searchByTitle } from "../../store/slices/moviesSlice";
export const Navbar = () => {
  const [isLoginPanelVisible, setLoginPanelVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearch] = useState("");
  const userIcon = useRef(null);
  const loginPanel = useRef(null);
  const searchPanel = useRef(null);
  const dispatch = useDispatch();

  const handleUserClick = () => {
    setLoginPanelVisible(!isLoginPanelVisible);
  };
  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isSearchVisible &&
        searchPanel.current &&
        !searchPanel.current.contains(e.target)
      ) {
        setSearchVisible(false);
      }
      if (
        isLoginPanelVisible &&
        userIcon.current &&
        loginPanel.current &&
        !userIcon.current.contains(e.target) &&
        !loginPanel.current.contains(e.target)
      ) {
        setLoginPanelVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLoginPanelVisible, isSearchVisible]);
  return (
    <div className="__navbar-wrapper">
      <div className="__navbar__container container">
        <div className="brand">
          <img src={images.LOGO} alt="logo" />
        </div>

        <nav className="__links">
          {navLinks.map((link, i) => (
            <Link to={`/${link}`} key={i}>
              {link === "" ? "home" : link}
            </Link>
          ))}
        </nav>

        <div className="__icons-wrapper">
          <div className="__item __search-item">
            {isSearchVisible && (
              <div className="__nav-search" ref={searchPanel}>
                <Link to={`/search/${searchText}`}>
                  <div className="__icon">
                    <box-icon name="search" size="sm"></box-icon>
                  </div>
                </Link>
                <input
                  type="text"
                  placeholder="search"
                  value={searchText}
                  onChange={(ev) => setSearch(ev.target.value)}
                />
              </div>
            )}

            {!isSearchVisible && (
              <div className="__icon __rounded" onClick={handleSearchClick}>
                <box-icon name="search" size="md"></box-icon>
              </div>
            )}
          </div>
          <div className="__item">
            <div
              ref={userIcon}
              onClick={handleUserClick}
              className="__icon __rounded"
            >
              <box-icon name="user" size="md"></box-icon>
            </div>
            {isLoginPanelVisible && (
              <ul id="__pages-nav__ul" ref={loginPanel}>
                {pagesLinks.map((item, index) => (
                  <li key={item.link + index}>
                    <Link to={`/${item.link}`}>
                      <div className="__icon">
                        <box-icon name={item.icon} size="sm"></box-icon>
                      </div>
                      <span>{item.link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="__item">
            <div
              className="__icon __rounded"
              onClick={() => {
                dispatch(setVisible(true));
              }}
            >
              <box-icon name="menu" id="__menu-icon" size="md"></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
