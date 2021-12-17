import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__image-container">
          <img
            className="header__img"
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            alt="logo"
          />
        </div>
        <div className="header__title-container">
          <h1 className="header__title">
            MEME <br></br> GENERATOR
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
