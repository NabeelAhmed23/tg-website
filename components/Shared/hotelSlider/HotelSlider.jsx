import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";
import TGApprovedLogoWhite from "../TGApprovedLogoWhite";

export default function HotelSlider({ reff, data, loc }) {
  return (
    <Splide
      ref={reff}
      options={{
        type: "loop",
        perPage: loc === "home" ? 3 : 2,
        autoplay: true,
        arrows: false,
        gap: "1rem",
        pagination: false,
        breakpoints: {
          1280: {
            perPage: 2,
          },
          1024: {
            perPage: 1.5,
          },
          640: {
            perPage: 1,
            padding: loc === "notHome" && { right: "2rem" },
          },
        },
      }}
    >
      {data.map((image) => (
        <SplideSlide key={image.src}>
          <CarouselSlide src={image.src} label={image.label} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
HotelSlider.defaultProps = {
  loc: "home",
};
HotelSlider.propTypes = {
  reff: PropTypes.objectOf(PropTypes.shape()).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  loc: PropTypes.string,
};

export function CarouselSlide({ src, label }) {
  return (
    <div
      className="relative rounded-md m-1 md:m-2 overflow-hidden transition-shadow 
    shadow-[0_0_15px_rgba(0,_0,_0,_0.25)] max-h-[238px] w-auto"
    >
      <div className="h-full">
        <img src={src} alt="" className="w-full h-full" />
      </div>
      <div
        className="flex justify-between items-end min-h-[5rem] slide-linear-gradient absolute
       bottom-0 left-0 right-0 px-4 py-3 gap-2"
      >
        <p className="font-semibold text-white text-xs sm:text-sm xl:text-base">
          {label}
        </p>
        <TGApprovedLogoWhite className="w-5 h-5" />
      </div>
    </div>
  );
}

CarouselSlide.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
