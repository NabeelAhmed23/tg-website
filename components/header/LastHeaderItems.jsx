import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";
import LastItemButton from "./LastItemButton";
import Link from "next/link";

const iconClassRed = { className: "text-primary w-5 sm:w-4 sm:h-4" };
const iconClassWhite = { className: "fill-[white] text-primary" };
export default function LastHeaderItems() {
  const items = [
    {
      label: "eng",
      icon: (
        <IconContext.Provider value={iconClassRed}>
          <TbWorld />
        </IconContext.Provider>
      ),
      className: "block uppercase text-sm 2xl:text-base",
    },
    {
      label: "usd",
      icon: (
        <IconContext.Provider value={iconClassRed}>
          <FaRegMoneyBillAlt />
        </IconContext.Provider>
      ),
      className: "block uppercase text-sm 2xl:text-base",
    },
  ];
  return (
    <div className="flex items-center justify-end gap-2 lg:gap-3">
      {items.map((item) => (
        <LastItemButton
          key={item.label}
          label={item.label}
          icon={item.icon}
          className={item.className}
        />
      ))}

      <Link href="/login">
        <a
          className="w-[120px] sm:w-[142px] 2xl:w-[162px] btn-primary transition-colors hover:bg-[rgba(215,_72,_116,_0.8)]
        px-2 2xl:px-4 py-3 rounded text-white flex
          items-center justify-between 2xl:gap-1 my-account-btn"
        >
          <span>
            <IconContext.Provider value={iconClassWhite}>
              <AiOutlineUser />
            </IconContext.Provider>
          </span>
          <span className="text-xs sm:text-sm 2xl:text-base">My Account</span>
          <span>
            <svg
              className="w-3 transition fill-white"
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
        </a>
      </Link>
    </div>
  );
}
