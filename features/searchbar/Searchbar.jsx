import PropTypes from "prop-types";
import InputField from "../../components/Shared/InputField";

export default function Searchbar({ className, children }) {
  function handleSearch(e) {
    console.log(e);
  }
  return (
    <div className={className}>
      <InputField
        type="text"
        name="search"
        id="search"
        onChange={(e) => handleSearch(e)}
        className="px-4 py-2 2xl:px-6 2xl:text-base 2xl:py-[12px] rounded w-full focus:outline-0 "
        placeholder="What are you looking for?"
      />
      {children}
    </div>
  );
}

Searchbar.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
