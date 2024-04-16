import CarProduct from "../components/CardProduct";
import Title from "../components/Title";
import { listProduct } from "@/libs/constance";

export default function Product() {
  return (
    <section className="py-6 wow animate__fadeInUp" data-wow-duration="2s">
      <div className="content mb-6">
        <Title content="SẢN PHẨM" />
        <p className="text-base w-1/2 mx-auto text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ipsa
          illum qui, accusamus labore dolor eos illo ea impedit enim.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {listProduct.map((value) => (
          <CarProduct
            key={value.name}
            linkImg={value.linkImg}
            link={value.link}
            name={value.name}
          />
        ))}
      </div>
    </section>
  );
}
