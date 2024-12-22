import React from "react";
import Logo from "../assets/img/logo.jpg";
// import { useState } from "react";

// const [state, setState] = useState(0);

// console.log(list);

const Header = () => {
  const list = ["Главная", "О нас", " Услуги", "Этапы работы", "Контакты"];

  return (
    <div className="header__container">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header__menu">
        <ul>
          {list.map((value) => {
            return (
              <li>
                <a href="/#">{value}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="header-menu__additional-wrap"></div>
    </div>
  );
};

export default Header;
