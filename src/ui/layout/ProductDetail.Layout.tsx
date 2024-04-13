import { LinkImg, Product } from "@/libs/defination";
import ProductCarousel from "../components/ProductCarosel";
import ProductDetailInfo from "../components/ProductDetailInfo";

export default function ProductDetailLayout(props: {
  listLinkImg: LinkImg[];
  info: {
    description: string;
    name: string;
    price: string;
    timeDescription: string;
  };
}) {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <ProductCarousel listLinkImg={props.listLinkImg} />
      </div>
      <div>
        <ProductDetailInfo info={props.info} />
      </div>
    </div>
  );
}
