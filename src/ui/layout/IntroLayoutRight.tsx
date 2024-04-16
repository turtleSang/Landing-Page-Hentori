import { IntroContent } from "@/libs/defination";
import { TitleLight } from "../components/Title";

// CSS
import style from "@/app/component.module.css";
import clsx from "clsx";

export default function IntroLayoutRight({
  introConent,
}: {
  introConent: IntroContent;
}) {
  return (
    <div
      className="flex flex-col-reverse md:flex-row bg-background-2 wow animate__fadeInUp"
      data-wow-duration="2s"
    >
      <div className="pb-4 md:w-1/2 flex flex-col justify-center">
        <TitleLight title={introConent.title} />
        <p className="text-letter-dark text-sm md:text-base px-7">
          {introConent.content}
        </p>
      </div>
      <div className={clsx(style.imgIntroRight, "md:w-1/2")}>
        <img
          className="block"
          src={introConent.linkImg.linkImg}
          alt={introConent.linkImg.des}
        />
      </div>
    </div>
  );
}
