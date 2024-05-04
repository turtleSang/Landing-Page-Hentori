import Image from "next/image";
import bookImg1 from "@/../public/booking/booking-1.jpg";
import style from "@/app/component.module.css";
import clsx from "clsx";
import Title from "../components/Title";
import Link from "next/link";
import { infoLink } from "@/libs/constance";

export default function BookingPage() {
  return (
    <>
      <div className="flex flex-col-reverse relative">
        <div className={clsx(style.imgBooking)}>
          <Image
            src={bookImg1}
            alt="Liên Hệ Hentori Bespoke"
            sizes="100vw"
            className="w-full"
          ></Image>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-2/3">
          <Title content="Liên hệ ngay với chúng tôi" />
          <div className="">
            {infoLink.map((value, index) => {
              return (
                <Link
                  href={value.link}
                  key={index}
                  className="bg-background-4 text-sm px-1 py-2 block mt-1 rounded-xl text-center md:px-4 md:py-4 md:mt-3 md:text-lg"
                >
                  {value.type}: {value.content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
