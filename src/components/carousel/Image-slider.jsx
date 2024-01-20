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
          src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Carousel.Item>
      <Carousel.Item className="img-sli">
        <img
          style={{ height: "550px" }}
          src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Carousel.Item>
      <Carousel.Item className="img-sli">
        <img
          style={{ height: "550px" }}
          src="https://images.pexels.com/photos/3992949/pexels-photo-3992949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Carousel.Item>
      <Carousel.Item className="img-sli">
        <img
          style={{ height: "550px" }}
          src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Carousel.Item>
      <Carousel.Item className="img-sli">
        <img
          style={{ height: "550px" }}
          src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
