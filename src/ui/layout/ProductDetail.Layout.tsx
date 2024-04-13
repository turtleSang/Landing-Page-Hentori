import { LinkImg, Product } from "@/libs/defination";
import ProductCarousel from "../components/ProductCarosel";

export default function ProductDetailLayout(props: { listLinkImg: LinkImg[] }) {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <ProductCarousel listLinkImg={props.listLinkImg} />
      </div>
      <div>
        <h1>Polo</h1>
      </div>
    </div>
  );
}
