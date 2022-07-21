import { IconContext } from "react-icons";
import { useMemo } from "react";
import PropTypes from "prop-types";

export default function HotelInput({
  className,
  icon,
  label,
  control,
  children,
}) {
  const iconClass = useMemo(
    () => ({ className: "text-primary inline-block w-5 h-5" }),
    [],
  );
  return (
    <label
      htmlFor={control}
      className={`bg-white py-1 px-3 w-full inline-block rounded ${className}`}
    >
      <div>
        <IconContext.Provider value={iconClass}>{icon}</IconContext.Provider>
        <span className="font-semibold text-sm inline-block ml-1">{label}</span>
      </div>
      {children}
    </label>
  );
}

HotelInput.propTypes = {
  className: PropTypes.string.isRequired,
  control: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
