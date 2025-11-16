import React, { use, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router";

const heroPromise = fetch(
  "https://eco-track-server-one-rho.vercel.app/hero"
).then((res) => res.json());

export default function HeroBanner() {
  const banner = use(heroPromise);
  console.log(banner);

  return (
    <>
      <Swiper
        pagination={{ type: "progressbar" }}
        navigation={true}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {banner.map((hero) => (
          <SwiperSlide key={hero._id}>
            <div
              className="
            relative w-full 
            h-[500px] 
            md:h-[400px] 
            sm:h-[320px] 
            bg-cover bg-center bg-no-repeat overflow-hidden
          "
              style={{
                backgroundImage: `url(${hero.image})`,
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 flex items-center justify-center h-full text-white font-bold">
                <div className="text-center w-[70%] md:w-[85%] sm:w-[95%] space-y-3">
                  <h4 className="text-2xl md:text-xl sm:text-lg roboto">
                    {hero.tagline}
                  </h4>

                  <h2 className="text-5xl md:text-4xl sm:text-2xl poppins">
                    {hero.title}
                  </h2>

                  <p className="font-normal text-xl md:text-lg sm:text-base roboto">
                    {hero.description}
                  </p>

                  <Link
                    className="
                  btn poppins bg-white rounded-4xl
                  text-[#7a9352]
                  hover:bg-[#7a9352] hover:text-white
                  md:text-sm sm:text-sm
                "
                    to="/challenges/6914d57068b326dddb3ef9af"
                  >
                    {hero.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
