import style from "@/app/component.module.css";
import clsx from "clsx";
import Link from "next/link";

export default function CardProduct(props: { name: string; link: string }) {
  let { name, link } = props;
  return (
    <Link href={`/product/${link}`} className="block w-full">
      <div
        className={clsx(
          "cursor-pointer border-1 border-black rounded-md relative",
          style.card
        )}
      >
        <img
          src={`/product-${link}.jpg`}
          alt="Áo sơ mi Hentori"
          className="block"
        />
        <h2 className="absolute py-3 bottom-0 text-xl w-full text-center text-letter-light">
          {name}
        </h2>
        <div
          className={clsx(
            style.layer,
            "flex flex-row items-center justify-center"
          )}
        >
          <button
            type="button"
            className="duration-300 bg-background-2 text-letter-light hover:bg-background-4 hover:text-letter-dark rounded-full p-3"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </Link>
  );
}
