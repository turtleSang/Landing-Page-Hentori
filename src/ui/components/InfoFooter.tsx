import LogoGroup from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function InfoFooter() {
  let infoLink = [
    {
      content: "Fan Page Facebook",
      link: "https://www.facebook.com/Hentoribespoke.suitmaydo.thudaumot",
      icon: faSquareFacebook,
    },
    {
      content:
        "Địa chỉ: số 39 đường Hoàng Văn Thụ, phường Chánh Nghĩa, thành phố Thủ Dầu Một, tỉnh Bình Dương",
      link: "https://maps.app.goo.gl/SaSxV3199EbSxuHj8",
      icon: faLocationDot,
    },
    {
      content: "Số điện thoại: 0388858682",
      link: "callto:0388858682",
      icon: faPhone,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div>
        <LogoGroup />
        <p className="text-sm text-letter-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          veritatis similique dicta explicabo? Esse ipsam consectetur ab aut,
          blanditiis sit beatae dignissimos alias, non aspernatur voluptates
          quod saepe corporis deleniti.
        </p>
      </div>
      <div className="flex flex-col items-start justify-around  text-letter-dark underline">
        {infoLink.map(({ content, link, icon }) => (
          <Link
            key={content}
            href={link}
            className="flex flex-row items-center hover:text-background-4 duration-200"
          >
            <FontAwesomeIcon icon={icon} size="xl" />
            <span className="ml-2">{content}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
