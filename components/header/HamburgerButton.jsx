import PropTypes from "prop-types";

export default function HamburgerButton({ className, handleHamburgerMenu }) {
  return (
    <button type="button" onClick={handleHamburgerMenu} className={className}>
      <svg
        className={className}
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="9" height="2" fill="#D74874" />
        <rect y="6" width="18" height="2" fill="#D74874" />
        <rect x="7" y="12" width="11" height="2" fill="#D74874" />
        <circle cx="8" cy="13" r="2" fill="#D74874" />
      </svg>
    </button>
  );
}

HamburgerButton.propTypes = {
  className: PropTypes.string.isRequired,
  handleHamburgerMenu: PropTypes.func.isRequired,
};
