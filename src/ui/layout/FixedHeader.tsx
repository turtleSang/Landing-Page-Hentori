"use client";
import clsx from "clsx";
import Header from "./Header";
import { useEffect, useState } from "react";

export default function FixedHeader() {
  let [active, setActive] = useState(false);

  useEffect(() => {
    let preScroll = window.scrollY;
    window.onscroll = () => {
      let currentScroll = window.scrollY;
      if (preScroll < currentScroll || currentScroll < 100) {
        setActive(false);
      } else {
        setActive(true);
      }
      preScroll = currentScroll;
    };
  }, []);

  return (
    <div
      className={clsx(
        "fixed w-full duration-200 z-40",
        active ? "top-0" : "-top-full"
      )}
    >
      <Header />
    </div>
  );
}
