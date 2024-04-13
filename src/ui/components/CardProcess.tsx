import type { CardProcess } from "@/libs/defination";

export default function CardProcess(props: { cardProcess: CardProcess }) {
  let { content, imageDes, imagePath, name } = props.cardProcess;

  return (
    <div className="border-2 rounded-xl overflow-hidden">
      <div className="card-img">
        <img className="block" src={`${imagePath}`} alt={imageDes} />
      </div>
      <div className="p-4">
        <h3 className="text-center text-xl text-background-2">{name}</h3>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}
