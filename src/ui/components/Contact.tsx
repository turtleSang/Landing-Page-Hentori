"use client";

import { infoLink } from "@/libs/constance";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import "@/ui/customcss/footerfixed.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Contact() {
  let [activeMobile, setActiveMobile] = useState(true);

  return (
    <section>
      <div className="hidden md:flex flex-col">
        {infoLink.map((value, index) => (
          <Link
            href={value.link}
            key={index}
            className="bg-background-4 h-16 rounded-full text-gray-200 text-center pt-5 text-xl mb-5 hover:text-letter-dark hover:bg-background-3 duration-500"
          >
            <FontAwesomeIcon icon={value.icon} />
          </Link>
        ))}
      </div>
      <div
        className={clsx(
          "grid grid-cols-4 gap-3 footerFixed md:hidden",
          activeMobile && "show"
        )}
      >
        {infoLink.map((value, index) => (
          <Link
            key={index}
            className="py-4 bg-background-4 rounded-3xl text-center"
            href={value.link}
          >
            <FontAwesomeIcon icon={value.icon} className="text-2xl" />
          </Link>
        ))}
      </div>
    </section>
  );
}
