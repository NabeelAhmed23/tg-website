import PropTypes from "prop-types";

export default function InputField({
  name,
  type,
  onChange,
  placeholder,
  className,
}) {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
