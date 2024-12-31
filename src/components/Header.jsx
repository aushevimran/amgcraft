import React from "react";

import Logo from "../assets/img/logo-removebg.svg";
import Telegram from "../assets/img/telegram.svg";

import Slider from "../react_slick/slick";

import slide1 from "../assets/img/slide_one.jpg";
// import slide2 from "../assets/img/slide_two.jpg";
import slide3 from "../assets/img/slide.png";

const Header = () => {
  const [activeIndex, setState] = React.useState(0);

  const onClick = (id) => {
    setState(id);
  };

  const list = ["Главная", "О нас", " Услуги", "Этапы работы", "Контакты"];

  const images = [slide3, slide1];

  return (
    <div className="content">
      <div className="header">
        <div className="header__top">
          <div className="header__logo">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="header-menu">
            <ul className="header-menu__list">
              {list.map((value, i) => {
                return (
                  <li
                    onClick={() => onClick(i)}
                    className={
                      activeIndex === i ? "header-menu__decoration" : ""
                    }
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
              <a className="header-menu__lang" href="/en/">
                Eng
              </a>
            </div>
          </div>
        </div>
      </div>
      <Slider images={images} interval={18000} />
    </div>
  );
};

export default Header;
