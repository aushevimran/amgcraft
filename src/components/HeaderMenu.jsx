import React from "react";
import { Link } from "react-router";

import Logo from "../assets/img/logo-removebg.svg";
// import Telegram from "../assets/img/telegram.svg";

import Feedback from "./Feedback";
import Burger from "../burger/burger";

const HeaderMenu = () => {
  const [activeIndex, setState] = React.useState(0);

  const onClick = (id) => {
    setState(id);
  };

  const list = [
    { name: "Главная", url: "/" },
    { name: "О нас", url: "https://www.facebook.com" },
    { name: "Услуги", url: "/services" },
    { name: "Этапы работы", url: "https://www.twr.com" },
    { name: "Контакты", url: "https://www.tter.com" },
  ];
  return (
    <div className="header__top">
      <div className="header__logo">
        <a href="/#">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <Burger />
      <div className="header-menu">
        <ul className="header-menu__list">
          {list.map(({ name, url }, i) => {
            return (
              <li
                onClick={() => onClick(i)}
                className={activeIndex === i ? "header-menu__decoration" : ""}
              >
                <Link className="header-menu__link" to={url}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="header-menu__additional-wrap">
        <div className="header-menu__additional">
          {/* <a className="header-menu__tg" href="tg://resolve?domain=awg_ru">
            <img src={Telegram} alt="telegram" />
          </a> */}
          <Feedback />
        </div>
      </div>
    </div>
  );
};
export default HeaderMenu;
