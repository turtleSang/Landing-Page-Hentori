import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import { fontlogo } from "../font";
import clsx from "clsx";

export default function LogoGroup() {
  return (
    <Link
      className="flex flex-row items-center justify-center lg:flex-col"
      href="/"
    >
      <Image src={Logo} alt="Logo Hentori Bespoke" width={50} height={50} />
      <h1 className={clsx(fontlogo.className, "text-2xl")}>Hentori Bespoke</h1>
    </Link>
  );
}
