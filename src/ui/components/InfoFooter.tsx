import LogoGroup from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { infoLink } from "@/libs/constance";

export default function InfoFooter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      <div>
        <LogoGroup />
        <p className="text-sm text-letter-dark">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          veritatis similique dicta explicabo? Esse ipsam consectetur ab aut,
          blanditiis sit beatae dignissimos alias, non aspernatur voluptates
          quod saepe corporis deleniti.
        </p>
      </div>
      <div className="flex flex-col items-start justify-around text-letter-dark underline my-3">
        {infoLink.map(({ content, link, icon }) => (
          <Link
            key={content}
            href={link}
            className="flex flex-row items-center hover:text-background-4 mt-2 duration-200"
          >
            <FontAwesomeIcon icon={icon} size="xl" />
            <span className="ml-2">{content}</span>
          </Link>
        ))}
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.6042216034619!2d106.66508030714685!3d10.975916550559983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1c641dc3929%3A0x4ada34bee13560b6!2sHentori%20Bespoke%20x%20The%20Kingsman!5e0!3m2!1svi!2s!4v1713169900216!5m2!1svi!2s"
          height="200"
          allowFullScreen={true}
          loading="lazy"
          title="Map"
          className="w-full rounded-md"
        ></iframe>
      </div>
    </div>
  );
}
