import Link from "next/link";

export default function CarouselContent() {
  return (
    <Link href="/booking" className="flex flex-row justify-center">
      <button
        type="button"
        className="text-xs bg-background-2 text-letter-light duration-200 md:text-lg hover:font-semibold hover:bg-background-4 hover:text-letter-dark w-1/2 h-10 rounded-full"
      >
        LIÊN HỆ TƯ VẤN
      </button>
    </Link>
  );
}
