import React from "react";

import Logo from "../assets/img/logo-removebg.svg";
import Telegram from "../assets/img/telegram.svg";

const HeaderMenu = () => {
  const [activeIndex, setState] = React.useState(0);

  const onClick = (id) => {
    setState(id);
  };

  const list = ["Главная", "О нас", " Услуги", "Этапы работы", "Контакты"];
  return (
    <div className="header__top">
      <div className="header__logo">
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
      </div>

      <div className="header-menu">
        <ul className="header-menu__list">
          {list.map((value, i) => {
            return (
              <li
                onClick={() => onClick(i)}
                className={activeIndex === i ? "header-menu__decoration" : ""}
              >
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
            <img src={Telegram} alt="telegram" />
          </a>
          <a className="header-menu__phone" href="tel:+74952780708">
            +7 965 888-06-06{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default HeaderMenu;
