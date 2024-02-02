import React from "react";
import { Carousel, CarouselCaption } from "react-bootstrap";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((image) => (
        <Carousel.Item>
          <div className="carousel-img-container">
            <img src={image} className="w-100 h-100 object-fit-cover  " />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
