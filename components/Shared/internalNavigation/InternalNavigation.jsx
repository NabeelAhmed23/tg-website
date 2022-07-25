import Link from "next/link";
import NavButtons from "./NavButtons";

export default function InternalNavigation() {
  const nav = [
    "Hotel",
    "Bars",
    "Dance Clubs",
    "Cruise Clubs",
    "Tours",
    "City Guide",
    "Gay Map",
  ];
  return (
    <div className="flex flex-wrap gap-2 items-center px-3 py-4">
      {nav.map((item) => (
        <NavButtons label={item} key={item} />
      ))}
      <Link href="#">
        <a className="text-primary underline text-xs"> Show More </a>
      </Link>
    </div>
  );
}
