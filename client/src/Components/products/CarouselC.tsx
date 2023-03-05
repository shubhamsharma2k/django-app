import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const CarouselC = () => {
  return (
    <div>
      <Carousel infiniteLoop showThumbs={false}/>
    </div>
  );
};

export default CarouselC;
