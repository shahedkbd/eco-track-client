import React, { useRef, useState } from "react";
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

export default function HeroBanner() {
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        autoplay={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat  overflow-hidden"
            style={{
              "backgroundImage":
                "url('https://i.ibb.co.com/qQpYxdy/group-activists-friends-collecting-plastic-waste-beach-environmental-conservation.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content on top */}
            <div className="relative z-10 flex items-center justify-center h-full text-white font-bold">
              <div className="text-center w-[70%] space-y-3">
                <h4 className="text-2xl roboto">💧 SMALL STEPS, CLEANER OCEANS</h4>
                <h2 className="text-5xl poppins">Join the Plastic-Free Week!</h2>
                <p className="font-normal text-xl roboto">
                  Reduce single-use plastic for just one week — and see how
                  small changes make a big difference! Together, our community
                  has already reduced over 1,200 kg of plastic waste. Are you
                  ready to join the movement?
                </p>
                <Link className="btn poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white"to="/challenges/6914d57068b326dddb3ef9af">View Challenge</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat  overflow-hidden"
            style={{
              "backgroundImage":
                "url('https://i.ibb.co.com/F4qDBQzQ/man-woman-riding-their-bikes.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content on top */}
            <div className="relative z-10 flex items-center justify-center h-full text-white font-bold">
              <div className="text-center w-[70%] space-y-3">
                <h4 className="text-2xl roboto">🚴 MOVE SMART. LIVE CLEAN</h4>
                <h2 className="text-5xl poppins">Pedal, Walk, or Share — Go Green on the Move!</h2>
                <p className="font-normal text-xl roboto">
                  Cut down your carbon footprint by choosing sustainable transport — cycling, walking, or carpooling. Every kilometer you travel clean helps save CO₂ and keeps the air fresher for everyone
                </p>
                <Link className="btn poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white" to="/challenges/6914d60868b326dddb3ef9b0">Join Now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
              "backgroundImage":
                "url('https://i.ibb.co.com/prWPHHjZ/daniel-boberg-a-Att-L6-YSa0s-unsplash.jpg')",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content on top */}
            <div className="relative z-10 flex items-center justify-center h-full text-white font-bold">
              <div className="text-center w-[70%] space-y-3">
                <h4 className="text-2xl roboto">💡 LESS WASTE, MORE LIGHT</h4>
                <h2 className="text-5xl poppins">Save Energy, Power the Future!</h2>
                <p className="font-normal text-xl roboto">
                  Turn off lights, unplug idle devices, and switch to LEDs — track your energy savings and see your progress in real-time. Let’s light the world responsibly
                </p>
                <Link className="btn poppins bg-white rounded-4xl text-[#7a9352] hover:bg-[#7a9352] hover:text-white" to="challenges/6914d63768b326dddb3ef9b1">Explore Challenge</Link>
              </div>
            </div>
          </div>
        </SwiperSlide> 
      </Swiper>
    </>
  );
}
