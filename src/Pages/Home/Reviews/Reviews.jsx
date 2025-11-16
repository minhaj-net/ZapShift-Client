import React, { use } from "react";
import customerTop from "../../../assets/customer-top.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ReviewsCard from "./ReviewsCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center">
          <img src={customerTop} alt="" />
          <h3 className="text-3xl  font-bold  mt-4">
            What our customers are sayings
          </h3>
          <p className="text-center text-gray-500">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, <br /> reduce pain, and strengthen
            your body with ease!
          </p>
        </div>
      </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewsCard review={review}></ReviewsCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
