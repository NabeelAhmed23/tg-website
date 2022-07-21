/* eslint-disable react/prop-types */
import { useMemo } from "react";
import { IconContext } from "react-icons";
import { HiOutlineChevronRight, HiOutlineChevronDown } from "react-icons/hi";
import PropTypes from "prop-types";

const rightIconClass = { className: "text-primary hidden lg:block" };

export default function DropdownContinentItem({
  active,
  label,
  handleActive,
  continent,
}) {
  const downIconClass = useMemo(
    () => ({
      className: `text-primary lg:hidden transition ${
        active === label ? "rotate-180" : "rotate-0"
      }`,
    }),
    [active],
  );

  return (
    <li
      className={active === label ? "xl:bg-white xl:shadow lg:px-0" : "lg:px-0"}
    >
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            handleActive(continent);
          }}
          className={`flex items-center justify-between w-full text-sm border-b border-[#EEB6C6] lg:border-none py-3 ${
            active === label ? "bg-white px-4" : "px-4"
          }`}
        >
          <span className={active === label ? "font-bold text-primary" : ""}>
            {label}
          </span>
          <IconContext.Provider value={rightIconClass}>
            <HiOutlineChevronRight />
          </IconContext.Provider>
          <IconContext.Provider value={downIconClass}>
            <HiOutlineChevronDown />
          </IconContext.Provider>
        </button>
      </div>
    </li>
  );
}

DropdownContinentItem.propTypes = {
  active: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleActive: PropTypes.func.isRequired,
  //   continentData: PropTypes.string.isRequired,
};
