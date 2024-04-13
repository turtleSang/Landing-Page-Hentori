import Copywrite from "../components/Copywrite";
import InfoFooter from "../components/InfoFooter";

export default function Footer() {
  return (
    <footer className="mt-6 bg-background-2 pt-14 px-12 grid-cols-3">
      <InfoFooter />
      <Copywrite />
    </footer>
  );
}
