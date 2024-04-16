import { IntroContent } from "@/libs/defination";
import { TitleDark } from "../components/Title";

// CSS
import style from "@/app/component.module.css";
import clsx from "clsx";

export default function IntroLayoutLeft({
  introConent,
}: {
  introConent: IntroContent;
}) {
  return (
    <div
      className="flex flex-col md:flex-row bg-black wow animate__fadeInUp"
      data-wow-duration="2s"
    >
      <div className={clsx(style.imgIntroLeft, "md:w-1/2")}>
        <img
          className="block"
          src={introConent.linkImg.linkImg}
          alt={introConent.linkImg.des}
        />
      </div>
      <div className="pb-4 md:w-1/2 flex flex-col justify-center">
        <TitleDark title={introConent.title} />
        <p className="text-letter-light text-sm md:text-base px-7">
          {introConent.content}
        </p>
      </div>
    </div>
  );
}
