import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";
import Link from "next/link";
import PropTypes from "prop-types";

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
        <Splide
          extensions={{ Grid }}
          options={{
            autoplay: false,
            type: "loop",
            grid: {
              rows: 2,
              cols: 2,
              gap: {
                row: "1rem",
                col: "1rem",
              },
            },
            arrows: false,
            gap: "1rem",
            pagination: false,
            focus: "center",
            className: "pr-20",
            breakpoints: {
              1023: {
                padding: { right: "1rem" },
                grid: {
                  cols: 2,
                  rows: 1,
                  gap: {
                    row: "1rem",
                  },
                },
              },
              640: {
                perPage: 1,
                grid: false,
                padding: { right: "1rem" },
              },
            },
          }}
        >
          {trips.map((trip) => (
            <SplideSlide key={trip.src} className="mx-0">
              <TripSlide
                src={trip.src}
                label={trip.label}
                price={trip.price}
                date={trip.date}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export function TripSlide({ src, label, price, date }) {
  return (
    <Link href="#">
      <div className="relative group transition-transform w-full hover:scale-110 rounded-lg cursor-pointer overflow-hidden">
        <img src={src} alt="" className="w-full h-full " />
        <button
          type="button"
          className="group-hover:hidden bg-white px-4 py-3 rounded absolute bottom-3 left-3 lg:text-xs xl:text-sm font-semibold"
        >
          {label}
        </button>
        <div className="slide-linear-gradient hidden group-hover:block absolute left-0 right-0 bottom-0 h-[50%] p-2 items-end">
          <div className="flex justify-between items-start h-max gap-4 absolute bottom-1 inset-x-2">
            <div>
              <p className="text-white font-semibold lg:text-xs xl:text-base">
                {label}
              </p>
              <p className="text-white font-semibold text-xs md:text-sm lg:text-xs xl:text-sm">
                {date}
              </p>
            </div>
            <div>
              <p className="text-white font-semibold text-xs md:text-sm lg:text-xs xl:text-sm">
                Starting From:
              </p>
              <p className="text-white font-semibold lg:text-base xl:text-2xl">
                {price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

TripSlide.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
