import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img
            className="header__img"
            src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
            alt="logo"
          />
        </Link>

        <h1 className="header__title">MEME GENERATOR</h1>
      </div>
    </header>
  );
};

export default Header;
