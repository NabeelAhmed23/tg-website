import PropTypes from "prop-types";
import TGApprovedLogoWhite from "../../components/Shared/TGApprovedLogoWhite";

export default function CarouselSlide({ src, label }) {
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
