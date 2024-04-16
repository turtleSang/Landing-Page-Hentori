"use client";
import { listProcess } from "@/libs/constance";
import CardProcess from "./CardProcess";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function CarouselProcess() {
  return (
    <div className="px-9 wow animate__fadeInRight" data-wow-duration="2s">
      <Swiper
        autoHeight={true}
        slidesPerView={1}
        spaceBetween={10}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {listProcess.map((value) => (
          <SwiperSlide key={value.name}>
            <CardProcess key={value.name} cardProcess={value} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
