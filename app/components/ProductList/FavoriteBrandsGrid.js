"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cube";

const FavoriteBrandsGrid = ({ data }) => {
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
        <div className="bg-gradient-to-t from-gray-900 via-gray-900/40 flex flex-col justify-around items-center absolute top-0 left-0 w-full h-full">
            <div className="w-full container">
                <p className="font-bold text-lg">member favorite brands</p>
                <p className="text-sm">shop from most-loved brands up to 70% off</p>
            </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 container gap-4">
            {data.slice(0, 4).map((product, index) => (
              <div className="aspect-h-1 aspect-w-1 shadow-lg w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteBrandsGrid;
