import React from "react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starPeople from "../../../assets/brands/start_people.png";
import { MoonStar } from "lucide-react";

const brandsLogo = [
  amazon,
  amazonVector,
  casio,
  moonstar,
  randstad,
  starPeople,
  star,
];
const Brands = () => {
  return (
    <div className="my-6 w-full mx-auto">
      <h3 className=" text-center mb-6 font-bold text-2xl ">
        We've helped thousands of sales teams
      </h3>
      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {brandsLogo.map((logo, i) => (
          <SwiperSlide key={i}>
            <img src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
