import { SplideSlide, Splide } from "@splidejs/react-splide";
import { Grid } from "@splidejs/splide-extension-grid";
import PropTypes from "prop-types";

export default function FeaturedSlider({ reff, data, sidebar }) {
  return (
    <div>
      <Splide
        ref={reff}
        extensions={{ Grid }}
        options={
          sidebar
            ? {
                autoplay: true,
                type: "loop",
                perPage: 1,
                arrows: false,
                gap: "0.5rem",
                pagination: true,
                classes: {
                  pagination: "splide__pagination bar-pagination",
                },
              }
            : {
                autoplay: true,
                arrows: false,
                pagination: false,
                type: "loop",
                gap: "1rem",
                padding: { top: "0.5rem" },
                grid: {
                  rows: 2,
                  cols: 2,
                  gap: {
                    row: "1rem",
                    col: "1rem",
                  },
                },
                breakpoints: {
                  1023: {
                    grid: {
                      cols: 1,
                    },
                  },
                },
              }
        }
      >
        {data.map((party) => (
          <SplideSlide key={party.src}>
            <FeaturedSlide
              src={party.src}
              label={party.label}
              desc={party.desc}
              sidebar={sidebar}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
FeaturedSlider.defaultProps = {
  sidebar: false,
};

FeaturedSlider.propTypes = {
  reff: PropTypes.shape().isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sidebar: PropTypes.bool,
};

export function FeaturedSlide({ src, label, desc, sidebar }) {
  return (
    <div
      className={`${
        sidebar ? "h-[130px] lg:h-[205px] xl:h-[137px]" : "h-[145px]"
      } flex items-end mx-1 w-full pr-2 pb-1`}
    >
      <div
        className={`flex-1 bg-secondary grid ${
          sidebar
            ? "grid-cols-[115px_1fr] lg:grid-cols-1 xl:grid-cols-[142px_1fr] p-2 gap-2 "
            : "grid-cols-[115px_1fr] xl:grid-cols-[142px_1fr] gap-4 p-4 "
        } mx-4 md:mx-0 rounded shadow-[0_0_10px_rgba(0,0,0,0.15)]`}
      >
        <div className="relative">
          <img
            src={src}
            alt=""
            className={`h-[115px] lg:h-[123px] w-[146px] lg:w-[142px] shadow-md absolute bottom-0 rounded object-cover ${
              sidebar ? "lg:left-[20%] xl:left-0" : ""
            }`}
          />
          <img
            src="/images/featuredslidelogo.jpg"
            alt=""
            className={`absolute ${
              sidebar ? "-bottom-3" : "-bottom-4 "
            } left-1/2 -translate-x-1/2 rounded-full`}
          />
        </div>
        <div>
          <h4 className="text-sm md:text-base font-semibold">{label}</h4>
          <p className="text-xs mt-2">{desc}</p>
        </div>
      </div>
    </div>
  );
}
FeaturedSlide.defaultProps = {
  sidebar: false,
};
FeaturedSlide.propTypes = {
  src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  sidebar: PropTypes.bool,
};
