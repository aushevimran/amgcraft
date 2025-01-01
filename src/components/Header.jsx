import React from "react";

import slide1 from "../assets/img/slide_one.jpg";
import slide3 from "../assets/img/slide.png";

import Slider from "../react_slick/slick";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const images = [slide3, slide1];

  return (
    <div className="content">
      <div className="header">
        <HeaderMenu />
        <div className="header__title">
          <h1>
            Web-craft — веб-студия дизайна, разработки и продвижения сайтов.
            Исследуем рынок, отрисовываем дизайн и создаем сайты
          </h1>
        </div>
        <div className="header__bottom">
          <p>/ Создаем продающие сайты для бизнеса</p>
          <p>
            / Нам понадобится один разговор на час и 5 минут в день на уточнение
          </p>
        </div>
      </div>
      <Slider images={images} interval={38000} />
    </div>
  );
};

export default Header;
