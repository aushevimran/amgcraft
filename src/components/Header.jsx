import React from "react";

import slide1 from "../assets/img/slide_one.jpg";
import slide3 from "../assets/img/slide.png";
import Arrow from "../assets/img/Arrow.svg";

import Slider from "../react_slick/slick";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  const images = [slide3, slide1];

  return (
    <div className="content">
      <div className="header">
        <HeaderMenu />
        <div className="header__title">
          <p>Next level IT</p>
          <h1>
            Web-craft — веб-студия дизайна, разработки и продвижения сайтов
          </h1>
          <div className="header__slider-link">
            <a href="#">
              <span>Подробнее</span>
              <span>
                <img className="header__slider-arrow" src={Arrow} alt="Arrow" />
              </span>
            </a>
          </div>
        </div>
        <div className="header__bottom">
          <p>&darr; Создаем продающие сайты для бизнеса</p>
          <p>
            &darr; Помогаем привлечь клиентов из интернета, повысить известность
            компании
          </p>
          <p>
            &darr; Нам понадобится один разговор на час и 5 минут в день на
            уточнение
          </p>
        </div>
      </div>
      <Slider images={images} interval={38000} />
    </div>
  );
};

export default Header;
