"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { listCarousel } from "@/libs/constance";

export default function Carousel() {
  let listLink = listCarousel();
  return (
    <div>
      <Swiper
        // install Swiper modules
        slidesPerView={1}
        zoom={true}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {listLink.map((value, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-row justify-center overflow-hidden">
              <img
                className="block w-full md:w-full"
                src={value.linkImg}
                alt={value.des}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
