import Link from "next/link";
import PropTypes from "prop-types";

export default function NavigationMenuItems({
  label,
  link,
  className,
  active,
  setActive,
  children,
}) {
  function checkAndSetActive() {
    if (active === label) setActive("");
    else setActive(label);
  }

  if (!link)
    return (
      <>
        <button
          type="button"
          onClick={() => checkAndSetActive()}
          className={className}
        >
          <span
            className={`inline mr-1 w-max ${
              active === label ? "text-primary" : ""
            }`}
          >
            {label}
          </span>
          <svg
            className={`w-4 lg:w-3 transition inline group-hover:fill-[#D74874] ${
              active === label
                ? "text-primary fill-current rotate-180 xl:rotate-0"
                : "fill-black"
            }`}
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
        </button>
        {active === label && children}
      </>
    );

  return (
    <Link href={link}>
      <a className={className}> {label} </a>
    </Link>
  );
}
NavigationMenuItems.defaultProps = {
  className: "",
  link: "",
  children: "",
};

NavigationMenuItems.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  children: PropTypes.node,
};
