import React from "react";
import Logo from "../assets/img/logo.svg";
import Telegram from "../assets/img/telegram.svg";
// import { useState } from "react";

// const [state, setState] = useState(0);

// console.log(list);

const Header = () => {
  const list = ["Главная", "О нас", " Услуги", "Этапы работы", "Контакты"];

  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-menu">
        <ul className="header-menu__list">
          {list.map((value) => {
            return (
              <li className="header-menu__item">
                <a className="header-menu__link" href="/#">
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="header-menu__additional-wrap">
        <div className="header-menu__additional">
          <a className="header-menu__tg" href="tg://resolve?domain=awg_ru">
            <img src={Telegram} />
          </a>
          <a className="header-menu__phone" href="tel:+74952780708">
            +7 965 888-06-06{" "}
          </a>
          <a className="header-menu__lang" href="/en/">
            Eng
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
