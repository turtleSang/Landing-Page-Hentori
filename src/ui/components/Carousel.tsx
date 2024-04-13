"use client";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// CSS Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
  const linkImg = [1, 2, 3, 4];

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
        {linkImg.map((value) => (
          <SwiperSlide key={value}>
            <div className="flex flex-row justify-center overflow-hidden">
              <img
                className="block w-full md:w-full"
                src={`/carousel/carousel-${value}.jpg`}
                alt={`hentori image ${value}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
