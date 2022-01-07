import { useState } from "react";
import SliderContent from "./SliderContent";
import imageSlider from "../constants/SliderInfo";
import Arrows from "./Arrows";
import Dots from "./Dots";

import "./Slider.css";

const imagesLength = imageSlider.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? imagesLength : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === imagesLength ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
