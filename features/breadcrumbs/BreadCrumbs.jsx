import { useMemo } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { IconContext } from "react-icons";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function BreadCrumbs({ page }) {
  const iconClass = useMemo(() => ({ className: "text-white" }), []);
  return (
    <div className="flex items-center gap-3">
      <Link href="/">
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.9999 0.00017453C10.9999 0.00017453 4.19546 6.13617 0.392529 9.45927C0.169549 9.67091 0 9.97862 0 10.3418C0 10.9771 0.491873 11.4909 1.10002 11.4909H3.30005V19.5343C3.30005 20.1696 3.79193 20.6834 4.40007 20.6834H7.69995C8.30809 20.6834 8.79996 20.1687 8.79996 19.5343V14.9385L13.2 14.938V19.5338C13.2 20.1683 13.6919 20.6831 14.3001 20.6831L17.5999 20.6832C18.2081 20.6832 18.6999 20.1694 18.6999 19.5342V11.4907H20.9C21.5081 11.4907 22 10.9769 22 10.3416C22 9.97846 21.8308 9.67077 21.5789 9.4591C17.8027 6.13623 11.0005 0 11.0005 0H11.0003L10.9999 0.00017453Z"
              fill="white"
            />
          </svg>
        </a>
      </Link>
      <span>
        <IconContext.Provider value={iconClass}>
          <MdOutlineArrowForwardIos />
        </IconContext.Provider>
      </span>
      <span className="text-sm">{page}</span>
    </div>
  );
}

BreadCrumbs.propTypes = {
  page: PropTypes.string.isRequired,
};
