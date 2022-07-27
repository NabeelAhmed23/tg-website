import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";

export default function InternalFadeSlider() {
  const ref = useRef();
  const info = [
    {
      img: "/homepage/featured1.jpg",
      label: "A popular destination for gay travelers. ",
      heading: "Time To Drink",
    },
    {
      img: "/homepage/featured2.jpg",
      label: "A popular destination for gay travelers. ",
      heading: "Time To Drink",
    },
    {
      img: "/homepage/featured3.jpg",
      label: "A popular destination for gay travelers. ",
      heading: "Time To Drink",
    },
  ];
  return (
    <div className="px-4 md:px-0">
      <Splide
        hasTrack
        ref={ref}
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
          classes: {
            pagination: "splide__pagination internal-pagination",
          },
        }}
      >
        {info.map((item) => (
          <SplideSlide key={item.img}>
            <InternalFadeSliderSlide
              img={item.img}
              label={item.label}
              heading={item.heading}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export function InternalFadeSliderSlide({ img, heading, label }) {
  return (
    <div className="max-h-[242px]  rounded-md border border-[#CCC] overflow-hidden relative">
      <img src={img} alt="" className="h-full w-full object-cover" />
      <div
        className="bg-white absolute bottom-0 left-0 min-w-[282px] p-3 border-t 
      border-r border-[#CCC] rounded-tr-md"
      >
        <h4 className="text-sm font-semibold">{heading}</h4>
        <p className="text-xs mt-1">{label} </p>
      </div>
    </div>
  );
}

InternalFadeSliderSlide.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
