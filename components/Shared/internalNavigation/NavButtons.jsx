import Link from "next/link";
import PropTypes from "prop-types";

export default function NavButtons({ label }) {
  return (
    <Link href="#">
      <a className="text-xs px-4 py-[10px] bg-primary text-primary rounded-md inline-block">
        {label}
      </a>
    </Link>
  );
}

NavButtons.propTypes = {
  label: PropTypes.string.isRequired,
};
