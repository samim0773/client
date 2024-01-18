import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Image-slider.css";

function ImageSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="img-sli">
        <img
          style={{ height: "550px" }}
          src="../../public/SliderImage/img1.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="img-sli">
        <img
          style={{ height: "550px" }}
          src="../../public/SliderImage/img2.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="img-sli">
        <img
          style={{ height: "550px" }}
          src="../../public/SliderImage/img3.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="img-sli">
        <img
          style={{ height: "550px" }}
          src="../../public/SliderImage/img4.jpg"
        />
      </Carousel.Item>
      <Carousel.Item className="img-sli">
        <img
          style={{ height: "550px" }}
          src="../../public/SliderImage/img5.jpg"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
