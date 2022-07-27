import Link from "next/link";
import PropTypes from "prop-types";
import PartySlider from "../Shared/partySlider/PartySlider";

export default function PartyComponent() {
  const parties = [
    {
      src: "/homepage/party1.jpg",
      label: "Firebird tell us love story. Story of bar See more about next...",
      date: "Friday, May 27",
    },
    {
      src: "/homepage/party2.jpg",
      label: "Firebird tell us love story. Story of bar See more about next...",
      date: "Friday, May 27",
    },
  ];
  return (
    <div className="md:px-0">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-primary text-xl xl:text-[28px] pl-4">
          Parties & Events
        </h1>
        <Link href="#">
          <a className="text-[#666666] pr-4"> View All </a>
        </Link>
      </div>
      <div className="mt-2 xl:mt-5 py-4 pl-4 md:p-4 overflow-hidden trip-slider">
        <PartySlider data={parties} />
      </div>
    </div>
  );
}

export function PartiesSlide({ src, label, date }) {
  return (
    <div className="relative rounded-md overflow-hidden hover:shadow-[0_0_15px_rgba(0,_0,_0,_0.25)]">
      <img src={src} alt="" className="w-full" />
      <div className="slide-linear-gradient h-[50%] absolute bottom-0 p-3 purple-overlay w-full rounded-b-md flex flex-col justify-end">
        <p className="font-medium text-white text-sm xl:text-base">{label}</p>
        <div className="flex justify-between items-center mt-5">
          <button
            type="button"
            className="rounded px-3 py-2 2xl:px-4 2xl:py-3 font-semibold text-base lg:text-xs xl:text-sm bg-white shadow-md"
          >
            View Details
          </button>
          <p className="text-sm lg:text-xs 2xl:text-sm text-white">{date}</p>
        </div>
      </div>
    </div>
  );
}

PartiesSlide.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
