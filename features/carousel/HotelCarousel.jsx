import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import HotelSlider from "../../components/Shared/hotelSlider/HotelSlider";

export default function HotelCarousel({ handleArrow }) {
  const ref = useRef(null);
  const images = [
    { src: "/homepage/hotel1.jpg", label: "Axel Hotel Barcelona" },
    { src: "/homepage/hotel2.jpg", label: "Elysium Hotel" },
    { src: "/homepage/hotel3.jpg", label: "Foxberry Inn" },
  ];

  useEffect(() => {
    handleArrow(ref.current.splide);
  }, [handleArrow]);

  return (
    <div
      className="relative -top-11 md:inset-[auto] grid w-[calc(100%_-_85px)] ml-auto md:w-full 
    grid-cols-[calc(100%_-_56px)_48px] md:grid-cols-[1fr_72px] gap-2"
    >
      <HotelSlider reff={ref} data={images} />
      <div className="relative mb-1 lg:my-2">
        <button
          type="button"
          className="bg-[#743D7D] rounded-l w-full text-white h-full cursor-pointer
            flex flex-col items-center justify-center gap-1 md:gap-4 lg:shadow-lg"
        >
          <span className="inline-block rotate-180 text-sm sm:text-base md:text-xl font-semibold vertical-lr">
            View All
          </span>
          <svg
            className="w-6 h-6 m-0 rotate-180"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="31.5"
              y="31.5"
              width="31"
              height="31"
              rx="4.5"
              transform="rotate(-180 31.5 31.5)"
              stroke="white"
            />
            <path
              d="M9.19696 15.1657L13.5595 19.7609C13.8043 20.0061 14.3296 20.0904 14.616 19.8191C14.9023 19.5477 14.9005 19.0328 14.6122 18.7634L11.416 15.3926H21.845C22.2465 15.3926 22.5721 15.0676 22.5721 14.667C22.5721 14.2663 22.2465 13.9414 21.845 13.9414H11.416L14.6122 10.5705C14.9005 10.3011 14.9196 9.76666 14.616 9.51478C14.3353 9.28198 13.8143 9.27168 13.5595 9.57299L9.19696 14.1682C9.0115 14.3537 8.86696 14.8418 9.19696 15.1659V15.1657Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

HotelCarousel.propTypes = {
  handleArrow: PropTypes.func.isRequired,
};
