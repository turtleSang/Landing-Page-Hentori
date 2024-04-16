import Link from "next/link";

import { fontlogo } from "../font";
import clsx from "clsx";

export default function CarouselContent() {
  return (
    <div>
      <h1
        className={clsx(
          fontlogo.className,
          "text-center text-background-4 text-3xl mb-6 md:text-5xl md:mb-10"
        )}
      >
        Hentori Bespoke
      </h1>
      <Link href="/booking" className="flex flex-row justify-center">
        <button
          type="button"
          className="text-xs bg-background-2 text-letter-light duration-200 md:text-lg hover:font-semibold hover:bg-background-4 hover:text-letter-dark w-1/2 h-10 rounded-full"
        >
          LIÊN HỆ TƯ VẤN
        </button>
      </Link>
    </div>
  );
}
