"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cube";
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CircularHomeCarousel = ({ images }) => {
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
        <div className="bg-gradient-to-t from-gray-900 via-gray-900/40 flex justify-center items-center absolute top-0 left-0 w-full h-full">
          <div className="w-1/2 sm:w-1/5 bottom-10">
            <Swiper
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              // pagination={true}
              modules={[EffectCube, Pagination, Autoplay]}
              className="mySwiper"
            >
              {images.map((product, index) => (
                <SwiperSlide className="bg-themePurpleText bg-opacity-50 border-2 border-white">
                  <a key={product.id} href={product.href} className="group flex flex-col items-center ">
                    {/* <div className="aspect-h-1 aspect-w-1 shadow-lg w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div> */}
                    <div className="uppercase text-[8px] text-white bg-gray-700 inline-block px-1 border border-white">
                      Featured
                    </div>
                    <h3 className="mt-4 text-center text-sm text-gray-400">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-center font-semibold text-gray-900">
                      {product.name}
                    </p>
                    {/* <div className="flex gap-4 items-center">
                      <p className="mt-1 text-base font-bold text-gray-900">
                        {product.price}
                      </p>
                      <p className="mt-1 text-base text-gray-400 line-through">
                        {product.price}
                      </p>
                      <p className="mt-1 text-sm font-bold text-green-500">
                        {product.price}
                      </p>
                    </div> */}
                    {/* <div className=" text-white bg-themePurpleText mt-1 text-xs inline-block py-1 px-2">
                      <div className="flex gap-2 items-center font-medium">
                        <div>
                          <FontAwesomeIcon icon={faClock} />
                        </div>
                        <p className="uppercase">First Buy Offer</p>
                      </div>
                    </div> */}
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
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
