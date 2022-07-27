import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";

export default function NewsSlider({ reff, sidebar }) {
  return (
    <div className="overflow-hidden">
      <Splide
        ref={reff}
        options={{
          autoplay: false,
          type: "loop",
          perPage: sidebar ? 4 : 3,
          arrows: false,
          gap: "1rem",
          pagination: false,
          breakpoints: {
            1280: {
              perPage: 2,
            },

            640: {
              perPage: 1,
              padding: { right: "2rem" },
            },
          },
        }}
      >
        <SplideSlide>
          <div className="relative">
            <img src="/homepage/featured1.jpg" alt="" className="w-full" />
            <div className="mt-3">
              {/* <p className="text-xs">14 March, 2022</p> */}
              <h2 className="mt-1 font-semibold lg:text-sm">
                Tom Prior On Gay Travel, Mindfulness Firebird
              </h2>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative">
            <img src="/homepage/featured2.jpg" alt="" className="w-full" />
            <div className="mt-3">
              {/* <p className="text-xs">14 March, 2022</p> */}
              <h2 className="mt-1 font-semibold lg:text-sm">
                Tom Prior On Gay Travel, Mindfulness Firebird
              </h2>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative">
            <img src="/homepage/featured3.jpg" alt="" className="w-full" />
            <div className="mt-3">
              {/* <p className="text-xs">14 March, 2022</p> */}
              <h2 className="mt-1 font-semibold lg:text-sm">
                Tom Prior On Gay Travel, Mindfulness Firebird
              </h2>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
NewsSlider.defaultProps = {
  sidebar: false,
};

NewsSlider.propTypes = {
  reff: PropTypes.shape().isRequired,
  sidebar: PropTypes.bool,
};
