import CarouselProcess from "../components/CarouselProcess";
import Title from "../components/Title";

export default function Process() {
  return (
    <section className="mb-6">
      <div className="title mb-6">
        <Title content="QUY TRÌNH CỦA CHÚNG TÔI" />
        <p className="px-6 text-center">
          Với quy trình chuyên nghiệp và đội ngũ tay nghề cao, Hentori Bespoke
          cam kết mang đến cho bạn những bộ suit hoàn hảo, đẳng cấp và tôn lên
          phong cách riêng biệt.
        </p>
      </div>
      <CarouselProcess />
    </section>
  );
}
