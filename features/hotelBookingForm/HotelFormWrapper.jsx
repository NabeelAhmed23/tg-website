// import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
import TgApproveRedLogo from "../../components/Shared/TgApproveRedLogo";
import HotelForm from "./HotelForm";
import TGApprovedLogoWhite from "../../components/Shared/TGApprovedLogoWhite";

export default function HotelFormWrapper() {
  const [scrolled, setScrolled] = useState(false);
  const [smFormOpen, setSmFormOpen] = useState(false);
  function makeHotelFormSticky() {
    if (window.scrollY >= 600 && window.innerWidth >= 1024) setScrolled(true);
    else setScrolled(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", makeHotelFormSticky);
    return () => {
      window.removeEventListener("scroll", makeHotelFormSticky);
    };
  }, []);
  return (
    <>
      {smFormOpen && (
        <div
          role="button"
          tabIndex={0}
          aria-label="Overlay button"
          className="fixed z-20 inset-0 bg-[rgba(0,0,0,0.5)] lg:hidden"
          onClick={() => setSmFormOpen(false)}
          onKeyDown={() => {}}
        />
      )}
      <div
        className={`fixed lg:relative -bottom-1 lg:bottom-auto transition-all ${
          smFormOpen ? " h-[475px] md:h-[448px] z-30" : " h-[44px] z-10"
        } inset-x-0 lg:h-auto`}
      >
        <div className="">
          <button
            type="button"
            className={`bg-[#743D7D] lg:hidden w-full py-3 rounded-t-lg flex items-center justify-center gap-x-2 ${
              smFormOpen ? "hidden" : ""
            }`}
            onClick={() => setSmFormOpen(!smFormOpen)}
          >
            <TGApprovedLogoWhite className="w-6 h-5" />
            <p className="text-sm font-semibold text-white">
              Book A TG Approved Hotel Now!
            </p>
          </button>
        </div>
        <div
          className={`${
            smFormOpen ? "h-[475px] md:h-[448px]" : "h-0"
          } overflow-hidden lg:overflow-visible lg:h-auto ${
            scrolled ? "fixed top-0 w-full z-50" : "lg:relative lg:h-24 md:mt-0"
          }`}
        >
          <div
            className={`transition-all duration-700 h-full lg:h-auto ${
              scrolled
                ? "px-3 2xl:px-12 3xl:px-[102px] py-3 xl:py-4 2xl:py-[25px]"
                : "relative md:absolute top-auto left-auto right-auto lg:-top-[5.75rem] md:left-0 md:right-0 w-full max-w-[100%] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1312px] mx-auto md:shadow-lg lg:rounded-md  py-6 md:py-6 xl:py-6 px-4 md:px-10 lg:px-6 xl:px-8 2xl:px-10"
            } bg-primary`}
          >
            <div className="flex items-center flex-col lg:flex-row gap-3 xl:gap-6">
              <div className="bg-[#D74874] w-[116px] h-1 rounded-full lg:hidden" />
              <TgApproveRedLogo className="h-16 lg:hidden" />
              <h2
                className={`font-semibold ${
                  scrolled
                    ? "max-w-[185px] 2xl:text-xl text-primary"
                    : "text-primary text-center lg:text-left text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-[2rem]  lg:max-w-[230px] xl:max-w-[297px] xl:leading-[48px] "
                }`}
              >
                Book A Travel Gay Approved Hotel
              </h2>
              <HotelForm scrolled={scrolled} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
