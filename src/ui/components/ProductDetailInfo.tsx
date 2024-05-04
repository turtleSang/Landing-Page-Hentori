import Link from "next/link";

export default function ProductDetailInfo(props: {
  info: {
    description: string;
    name: string;
    price: string;
    timeDescription: string;
  };
}) {
  let { description, name, price, timeDescription } = props.info;

  return (
    <div className="mt-4 flex flex-col justify-evenly h-full">
      <h2 className="text-4xl font-bold text-background-4 uppercase">{name}</h2>
      <h3 className="text-2xl font-medium">
        FROM{" "}
        <span className="text-3xl font-bold text-background-4">{price}</span>{" "}
        <span className="align-top ">VNĐ</span>
      </h3>
      <h3 className="text-2xl font-medium text-letter-dark">Mô tả</h3>
      <h4 className="text-lg text-letter-dark">{description}</h4>
      <h3 className="text-2xl font-medium text-letter-dark">
        Thời gian thực hiện:
      </h3>
      <h4 className="text-lg text-letter-dark">{timeDescription}</h4>
      <h3 className="text-1xl font-medium text-letter-dark">Ghi chú</h3>
      <Link
        className="bg-background-2 text-letter-light text-3xl text-center rounded-md py-3 leading-8 font-light duration-300 hover:bg-background-4 hover:text-letter-dark hover:font-semibold"
        href={"/lien-he"}
      >
        Liên hệ tư vấn
      </Link>
      <p className="italic text-letter-dark">
        *Tùy vào vật liệu và những sự tinh chỉnh theo ý của khách hàng sẽ ảnh
        hưởng đến giá thành sản phẩm
      </p>
    </div>
  );
}
