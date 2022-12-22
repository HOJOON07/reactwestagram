import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="navContainer">
        <div className="logoContainer">
          <h4>westargram</h4>
        </div>

        <div className="searchBarContainer">
          <div className="searchBarWrapper">
            <input className="searchInput" />
            <div className="searchIconWrapper">
              <img
                className="searchIcon"
                src="/images/zoom-lens.png"
                alt="searchIcon"
              />
              <span className="searchTitle">검색</span>
              <img
                className="cancelIcon"
                src="/images/x-mark.png"
                alt="cancelIcon"
              />
            </div>
          </div>
        </div>

        <div className="menuIconContainer">
          <div className="menuIconWrapper">
            {MENU_ICONS.map(menu => {
              return (
                <img
                  className="menuIcon"
                  key={menu.id}
                  src={menu.src}
                  alt={menu.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

const MENU_ICONS = [
  { id: 1, src: "/images/home.png", alt: "home icon" },
  { id: 2, src: "/images/send.png", alt: "direct message icon" },
  { id: 3, src: "/images/more.png", alt: "feedPost icon" },
  { id: 4, src: "/images/direction.png", alt: "explore icon" },
  { id: 5, src: "/images/heart.png", alt: "like icon" },
  { id: 6, src: "/images/profile.png", alt: "profile icon" },
];
