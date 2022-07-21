import { useRef, useState } from "react";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";
import { IconContext } from "react-icons";
import Searchbar from "../../features/searchbar/Searchbar";
import HamburgerButton from "./HamburgerButton";
import NavigationMenu from "./NavigationMenu";
import LastHeaderItems from "./LastHeaderItems";

const iconClass = { className: "text-primary" };
export default function HeaderWrapper() {
  const [isActive, setIsActive] = useState(false);
  const reff = useRef();

  function handleHamburgerMenu() {
    setIsActive(!isActive);
  }
  return (
    <>
      <div
        role="switch"
        aria-checked="true"
        tabIndex={0}
        aria-label="Background Overlay"
        className={
          isActive
            ? "fixed inset-0 bg-black opacity-70 z-20 lg:relative lg:z-[-1] lg:bg-transparent"
            : ""
        }
        onClick={() => setIsActive(false)}
        onKeyUp={() => setIsActive(false)}
      />
      <header
        className="relative bg-primary px-3 2xl:px-12 3xl:px-[102px] py-3 pb-6 xl:py-4 2xl:py-[25px]
     flex items-center justify-between z-20 gap-4 lg:gap-0"
      >
        <div className="flex items-center xl:gap-4 2xl:gap-[26px]">
          <div className="flex items-center gap-4 ">
            <HamburgerButton
              handleHamburgerMenu={() => handleHamburgerMenu()}
              className="w-6 h-5 lg:hidden"
            />
            <Link href="/">
              <a className="lg:mt-1 xl:mt-0 inline-block">
                <img
                  src="/logo.png"
                  className="w-28 md:w-36 2xl:w-40 3xl:w-auto"
                  alt="TG Logo"
                />
              </a>
            </Link>
          </div>
          <div className="absolute -bottom-7 left-4 right-4 xl:relative xl:inset-auto xl:w-[280px] 2xl:w-[316px] 3xl:w-[376px]">
            <Searchbar className="flex items-center bg-white rounded mt-[2px] shadow-md xl:shadow-none">
              <div className="px-4 xl:px-3 2xl:px-4 border-l">
                <IconContext.Provider value={iconClass}>
                  <HiOutlineSearch />
                </IconContext.Provider>
              </div>
            </Searchbar>
          </div>
        </div>
        <div className="flex items-center">
          <NavigationMenu isActive={isActive} reff={reff} />
          {/* <div className="w-[328px]"></div> */}
          <LastHeaderItems />
        </div>
      </header>
    </>
  );
}
