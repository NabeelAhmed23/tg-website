import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

export default function SliderWithText({ club }) {
  const slider = [
    {
      img: "/images/slider.png",
      label: "Gay Las Vegas Hotel",
      desc: `Experience London’s amazing gay
bar scene with something to suit
everyone.`,
      rating: 4,
      reviews: 342,
    },
    {
      img: "/images/slider2.png",
      label: "Gay Las Vegas Hotel",
      desc: `Experience London’s amazing gay
bar scene with something to suit
everyone.`,
      rating: 4.5,
      reviews: 342,
    },
    {
      img: "/images/slider3.png",
      label: "Gay Las Vegas Hotel",
      desc: `Experience London’s amazing gay
bar scene with something to suit
everyone.`,
      rating: 3.5,
      reviews: 342,
    },
  ];
  return (
    <div className="mt-3 pl-4 md:p-0 xl:mt-6">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          arrows: false,
          pagination: false,
          gap: "1.25rem",
          padding: "1px",
          perPage: 3,
          breakpoints: {
            650: {
              perPage: 1,
              padding: { right: "4rem" },
            },
          },
        }}
      >
        {slider.map((item) => (
          <SplideSlide key={item.img}>
            {!club ? (
              <SliderWithTextSlide
                img={item.img}
                heading={item.label}
                desc={item.desc}
              />
            ) : (
              <SliderWithTextSlideTwo
                img={item.img}
                heading={item.label}
                rating={item.rating}
                reviewNo={item.reviews}
              />
            )}
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
SliderWithText.defaultProps = {
  club: false,
};
SliderWithText.propTypes = {
  club: PropTypes.bool,
};

export function SliderWithTextSlide({ img, heading, desc }) {
  return (
    <div className="border border-[#ccc] rounded-md overflow-hidden">
      <img src={img} alt="" className="w-full" />
      <div className="bg-white py-4 px-3">
        <h4 className="text-sm font-semibold">{heading}</h4>
        <p className="text-sm mt-3">{desc}</p>
      </div>
    </div>
  );
}

SliderWithTextSlide.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export function SliderWithTextSlideTwo({ img, heading, rating, reviewNo }) {
  return (
    <div className="border border-[#ccc] rounded-md overflow-hidden">
      <img src={img} alt="" className="w-full" />
      <div className="bg-white py-5 px-3">
        <h4 className="text-sm font-semibold">{heading}</h4>
        <ReactStars count={5} value={rating} size={24} isHalf edit={false} />
        <p className="text-sm mt-3 font-semibold">{reviewNo} Reviews</p>
      </div>
    </div>
  );
}

SliderWithTextSlideTwo.propTypes = {
  img: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviewNo: PropTypes.number.isRequired,
};
