"use client";
import clsx from "clsx";
import Header from "./Header";
import { FunctionComponent, useEffect, useState } from "react";
import Contact from "../components/Contact";

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
    <>
      <div
        className={clsx(
          "fixed w-full duration-200 z-40",
          active ? "top-0" : "-top-full"
        )}
      >
        <Header />
      </div>
      <div
        className={clsx(
          "fixed duration-300 w-full z-40 md:w-16",
          active ? "bottom-0 md:right-8" : "-bottom-full md:-right-full"
        )}
      >
        <Contact />
      </div>
    </>
  );
}
