import React, { useState, useEffect } from "react";

const Slider = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Автоматическая прокрутка
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Устанавливаем флаг появления через 500 мс после загрузки
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`slider ${isVisible ? "fade-in" : "hidden"}`}>
      <div className="slider-image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slider-image ${
              index === currentIndex ? "active" : "inactive"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
