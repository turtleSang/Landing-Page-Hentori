"use client";

import { listCustomer } from "@/libs/constance";
import Title from "../components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Link from "next/link";

export default function Customers() {
  let list = listCustomer();

  return (
    <div className="py-6 wow animate__fadeInUp" data-wow-duration="2s">
      <div className="title mb-6">
        <Title content="Khách hàng của Hentori" />
        <p className="px-5 text-center text-letter-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          temporibus quod eligendi iusto obcaecati ipsa maxime aut, odio a
          veniam.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href="/product">
              <img src={item.imageUrl} alt="Khách hàng Hentori" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
