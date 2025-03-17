"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

const MyCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="./banner1.jpg"
            alt="First slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="./banner2.jpg"
            alt="Second slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="./banner3.jpg"
            alt="Third slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="./banner4.jpg"
            alt="Fourth slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="./banner5.jpg"
            alt="Fifth slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src="./banner6.jpg"
            alt="sixth slide"
            layout="responsive"
            width={800}
            height={400}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
