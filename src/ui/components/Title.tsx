export default function Title(props: { content: string }) {
  return (
    <h1 className="text-2xl text-background-2 font-semibold md:text-3xl text-center after:block after:w-4/12 after:h-1 after:bg-gradient-to-r after:from-background-2 after:to-background-4 after:mx-auto">
      {props.content}
    </h1>
  );
}

export function TitleDark({ title }: { title: string }) {
  return (
    <h1 className="text-2xl text-letter-light font-semibold md:text-3xl text-center after:block after:w-4/12 after:h-1 after:bg-gradient-to-r after:from-background-2 after:to-background-4 after:mx-auto">
      {title}
    </h1>
  );
}

export function TitleLight({ title }: { title: string }) {
  return (
    <h1 className="text-2xl text-background-4 font-semibold md:text-3xl text-center after:block after:w-4/12 after:h-1 after:bg-gradient-to-r after:from-background-2 after:to-background-4 after:mx-auto">
      {title}
    </h1>
  );
}
