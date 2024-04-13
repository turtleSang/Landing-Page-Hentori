// "use client";
import { listLinks } from "@/libs/constance";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBarDesktop() {
  let path: string = "";
  let [activePath, setActive] = useState("");

  const handleActiveItem = (link: string) => {
    setActive(link);
  };

  useEffect(() => {
    path = window.location.pathname;
    setActive(path);
  }, []);

  return (
    <nav className="flex flex-row justify-around items-center">
      {listLinks.map((value) => {
        let checkActive = activePath === value.link;

        return (
          <Link
            key={value.name}
            href={value.link}
            onClick={() => handleActiveItem(value.link)}
            className={clsx(
              "lg:text-xl hover:text-letter-light duration-200",
              checkActive && "text-letter-light"
            )}
          >
            {value.name}
          </Link>
        );
      })}
    </nav>
  );
}
