import { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// eslint-disable-next-line import/no-unresolved
import "@splidejs/react-splide/css";

export default function InternalFadeSlider() {
  const ref = useRef();
  return (
    <div>
      <Splide
        hasTrack
        ref={ref}
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
        }}
      >
        <SplideSlide className="bg-img2 text-white h-[250px]">1</SplideSlide>
        <SplideSlide className="bg-img1 text-white h-[250px]">2</SplideSlide>
        <SplideSlide className="bg-img text-white h-[250px]">3</SplideSlide>
      </Splide>
    </div>
  );
}
