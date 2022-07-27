import Link from "next/link";
import TripSlider from "../Shared/tripSlider/TripSlider";

export default function GroupTripsComponent() {
  const trips = [
    {
      label: "Sydney to Dubai",
      src: "/homepage/trip1.jpg",
      date: "3-Jul-2022",
      price: "4500",
    },
    {
      label: "Sydney to Dubai",
      src: "/homepage/trip2.jpg",
      date: "3-Jul-2022",
      price: "4500",
    },
    {
      label: "Sydney to Dubai",
      src: "/homepage/trip3.jpg",
      date: "3-Jul-2022",
      price: "4500",
    },
    {
      label: "Sydney to Dubai",
      src: "/homepage/trip4.jpg",
      date: "3-Jul-2022",
      price: "4500",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-primary text-xl xl:text-[28px] pl-4">
          Gay Group Trips
        </h1>
        <Link href="#">
          <a className="text-[#666666] underline pr-4"> View All </a>
        </Link>
      </div>
      <div className="mt-2 xl:mt-5 p-4 overflow-hidden trip-slider">
        <TripSlider data={trips} />
      </div>
    </div>
  );
}
