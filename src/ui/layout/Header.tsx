"use client";

import { clsx } from "clsx";
import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import style from "@/app/component.module.css";
import NavBarMobile from "../components/NavBarMobile";

import NavBarDesktop from "../components/NavBarDesktop";
import LogoGroup from "../components/Logo";

export default function Header() {
  let [activeNav, setActiveNav] = useState(false);

  function handleOpenMenu(): void {
    setActiveNav(!activeNav);
  }

  function handleClickLink(): void {
    setActiveNav(false);
  }

  return (
    <header className="flex flex-row justify-center">
      <div className="header bg-background-2 flex flex-col w-full items-center p-3 shadow-lg shadow-light-1/25 md:flex-row ">
        <div className="logo flex flex-row items-center w-full md:w-2/6 justify-evenly md:justify-start">
          <Bars3CenterLeftIcon
            className={clsx("w-8 cursor-pointer md:hidden")}
            onClick={handleOpenMenu}
          />
          <LogoGroup />
        </div>
        {/* Nav Bar Mobile*/}
        <div
          className={clsx(
            style.nav,
            activeNav && style.show,
            " w-10/12 rounded-md overflow-hidden bg-slate-200 mt-1 md:hidden"
          )}
        >
          {activeNav && <NavBarMobile onClickLink={handleClickLink} />}
        </div>
        {/* Nav bar desktop */}
        <div className="hidden md:block w-4/6 font-medium">
          <NavBarDesktop />
        </div>
      </div>
    </header>
  );
}
