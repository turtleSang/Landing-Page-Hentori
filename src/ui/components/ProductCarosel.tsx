"use client";
import { useState } from "react";
import { Thumbs, FreeMode } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "@/ui/customcss/swiper.css";

import clsx from "clsx";
import { LinkImg, Product } from "@/libs/defination";

export default function ProductCarousel(props: { listLinkImg: LinkImg[] }) {
  let a: any;
  const [thumbsSwiper, setThumbsSwiper] = useState(a);

  let { listLinkImg } = props;

  return (
    <div className="mt-4">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {listLinkImg.map((value, index) => (
          <SwiperSlide key={index}>
            <img src={value.linkImg} alt={value.des} className="block w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className={clsx("mt-4")}
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
      >
        {listLinkImg.map((value, index) => (
          <SwiperSlide key={index}>
            <img src={value.linkImg} alt={value.des} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
