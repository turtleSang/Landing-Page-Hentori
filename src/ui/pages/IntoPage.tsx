import { introConentList } from "@/libs/constance";
import IntroLayoutLeft from "../layout/IntroLayoutLeft";
import IntroLayoutRight from "../layout/IntroLayoutRight";

export default function IntroPage() {
  return (
    <section>
      {introConentList.map((value, index) => {
        if (index % 2 > 0) {
          return <IntroLayoutRight introConent={value} key={index} />;
        }
        return <IntroLayoutLeft introConent={value} key={index} />;
      })}
    </section>
  );
}
