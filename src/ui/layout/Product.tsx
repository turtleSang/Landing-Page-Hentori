import CarProduct from "../components/CardProduct";
import Title from "../components/Title";
import { listProduct } from "@/libs/constance";
import ReactWOW from "react-wow";

export default function Product() {
  return (
    <section className="py-6 wow animate__fadeInUp" data-wow-duration="2s">
      <div className="content mb-6">
        <Title content="SẢN PHẨM" />
        <p className="text-base w-3/4 md:w-1/2 mx-auto text-center">
          Đánh thức phong cách tiềm ẩn cùng sự tinh túy may đo -
          <br />
          Tùy chỉnh đa dạng với từng loại sản phẩm theo cơ thể
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
