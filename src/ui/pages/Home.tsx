import Carousel from "../components/Carousel";
import CarouselContent from "../components/CarouselContent";
import Process from "../layout/Process";
import Product from "../layout/Product";

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <Carousel />
        <div className="absolute w-2/3 top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <CarouselContent />
        </div>
      </div>
      <Product />
      <Process />
    </>
  );
}
