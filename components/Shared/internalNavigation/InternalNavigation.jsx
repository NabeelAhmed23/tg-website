import { useEffect, useState } from "react";
import NavButtons from "./NavButtons";

export default function InternalNavigation() {
  const [length, setLength] = useState();
  const nav = [
    "Hotel",
    "Bars",
    "Dance Clubs",
    "Cruise Clubs",
    "Tours",
    "City Guide",
    "Gay Map",
    "Dance Bars",
    "Bars",
    "Dance Clubs",
    "Cruise Clubs",
    "Tours",
    "Hotel",
    "Bars",
    "Dance Clubs",
    "Cruise Clubs",
    "Tours",
    "City Guide",
    "Gay Map",
    "Bars",
    "Dance Bars",
  ];

  useEffect(() => {
    setLength(window.innerWidth <= 1023 ? 7 : nav.length);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 items-center p-4 md:px-0">
      {nav.slice(0, length).map((item) => (
        <NavButtons label={item} key={item} />
      ))}
      <button
        onClick={() => (length <= 8 ? setLength(nav.length) : setLength(8))}
        type="button"
        className="text-primary underline text-xs lg:text-sm"
      >
        Show {length <= 10 ? "More" : "Less"}
      </button>
    </div>
  );
}
