"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

const CircularHomeCarousel = () => {
  const graph = useRef(null);

  // useEffect(() => {
  //   const ciclegraph = graph.current;
  //   const circleElements = ciclegraph.childNodes;

  //   let angle = 360 - 90;
  //   let dangle = 360 / circleElements.length;

  //   for (let i = 0; i < circleElements.length; i++) {
  //     let circle = circleElements[i];
  //     angle += dangle;
  //     circle.style.transform = `rotate(${angle}deg) translate(${
  //       ciclegraph.clientWidth / 2
  //     }px) rotate(-${angle}deg)`;
  //   }
  // }, []);

  return (
    <div className="overflow-hidden">
      <div className="relative">
        <div className="relative w-full h-[500px]">
          <Image
            src={
              "https://res.cloudinary.com/pollpe-in/image/upload/v1685808325/blog_6_lnmvwk.jpg"
            }
            alt="shopPe"
            fill
            priority={true}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="bg-gradient-to-t from-gray-900 via-gray-900/40 absolute top-0 left-0 w-full h-full"></div>
      </div>
      {/* <div className="absolute top-[45%] sm:top-[50%] bottom-0 w-full left-0 flex justify-center container">
        <div className="ciclegraph w-[500px] h-[500px]" ref={graph}>
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </div> */}
    </div>
  );
};

export default CircularHomeCarousel;
