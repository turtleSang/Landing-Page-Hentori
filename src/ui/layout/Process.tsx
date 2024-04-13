import CarouselProcess from "../components/CarouselProcess";
import Title from "../components/Title";

export default function Process() {
  return (
    <section>
      <div className="title mb-6">
        <Title content="QUY TRÌNH CỦA CHÚNG TÔI" />
        <p className="px-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
          voluptatibus saepe odio laborum iure culpa corporis minima aliquid
          hic.
        </p>
      </div>
      <CarouselProcess />
    </section>
  );
}
