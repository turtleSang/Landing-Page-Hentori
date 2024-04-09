import { listLinks } from "@/libs/constance";
import clsx from "clsx";

import Link from "next/link";

import { useEffect, useState } from "react";

export default function NavBarMobile(props: { onClickLink: Function }) {
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
    <nav className="flex flex-col md:flex-row items-center ">
      {listLinks.map((item) => {
        let checkActive: boolean = activePath === item.link;
        return (
          <Link
            key={item.name}
            href={item.link}
            onClick={() => {
              handleActiveItem(item.link);
              props.onClickLink();
            }}
            className={clsx(
              "font-normal text-lg hover:bg-background-3 w-full items-center duration-200",
              checkActive && "bg-background-3"
            )}
          >
            <h1 className="w-1/2 mx-auto text-center">{item.name}</h1>
          </Link>
        );
      })}
    </nav>
  );
}
