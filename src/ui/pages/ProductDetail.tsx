import { listProductDetail } from "@/libs/constance";
import ProductDetailLayout from "../layout/ProductDetail.Layout";
import { Product } from "@/libs/defination";

export default function ProductDetail(props: { typeProduct: string }) {
  let product = listProductDetail.find((val) => val.type === props.typeProduct);
  if (!product) {
    return <h1>Not Found</h1>;
  }

  let { listLinkImg, description, name, price, timeDescription } = product;
  let info: {
    description: string;
    name: string;
    price: string;
    timeDescription: string;
  } = { description, name, price, timeDescription };

  return (
    <>
      <ProductDetailLayout listLinkImg={listLinkImg} info={info} />
    </>
  );
}
