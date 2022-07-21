import PropTypes from "prop-types";

export default function LastItemButton({ label, icon, className }) {
  return (
    <button type="button" className="flex items-center gap-1">
      <span>{icon}</span>
      <span className={`hidden sm:inline-block font-medium ${className}`}>
        {label}
      </span>
      <span className="hidden sm:inline-block">
        <svg
          className="w-3 transition fill-black"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.10208 5.93414L10.4883 1.56289C10.7278 1.30843 10.7278 0.91919 10.4883 0.679634C10.2488 0.440122 9.84464 0.440122 9.60508 0.679634L5.66797 4.61675L1.73085 0.679634C1.4764 0.440122 1.08716 0.440122 0.847603 0.679634C0.608091 0.919147 0.608091 1.30837 0.847603 1.56289L5.21886 5.93414C5.47331 6.17365 5.86255 6.17365 6.10211 5.93414H6.10208Z"
          />
        </svg>
      </span>
    </button>
  );
}

LastItemButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired,
};
