import { SplideSlide, Splide } from "@splidejs/react-splide";
import PropTypes from "prop-types";

export default function PartySlider({ reff, data, loc }) {
  return (
    <div>
      <Splide
        ref={reff}
        options={{
          autoplay: true,
          type: "loop",
          perPage: loc === "home" ? 2 : 3,
          arrows: false,
          gap: "1rem",
          pagination: false,
          breakpoints: {
            1023: {
              perPage: loc === "home" ? 2 : 2.5,
              padding: { right: "2rem" },
            },
            768: {
              padding: { right: "4rem" },
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {data.map((party) => (
          <SplideSlide key={party.src}>
            <PartiesSlide
              src={party.src}
              label={party.label}
              date={party.date}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

PartySlider.defaultProps = {
  loc: "home",
};

PartySlider.propTypes = {
  reff: PropTypes.shape().isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  loc: PropTypes.string,
};

export function PartiesSlide({ src, label, date }) {
  return (
    <div className="relative h-full rounded-md overflow-hidden hover:shadow-[0_0_15px_rgba(0,_0,_0,_0.25)]">
      <img src={src} alt="" className="w-full h-full" />
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
