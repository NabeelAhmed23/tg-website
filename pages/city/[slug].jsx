import { useMemo, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { IconContext } from "react-icons";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import InternalHeroSection from "../../components/Shared/internalHero/InternalHeroSection";
import InternalNavigation from "../../components/Shared/internalNavigation/InternalNavigation";
import InternalFadeSlider from "../../components/Shared/internalFadeSlider/InternalFadeSlider";
import SliderWithText from "../../components/Shared/internalSliderText/SliderWithText";
import NewsSlider from "../../components/Shared/newsSlider/NewsSlider";
import HotelSlider from "../../components/Shared/hotelSlider/HotelSlider";
import PartySlider from "../../components/Shared/partySlider/PartySlider";
import FeaturedSlider from "../../components/Shared/Featured/FeaturedSlider";
import SpotifyPodcastLogo from "../../components/Shared/SpotifyPodcastLogo";
import ApplePodcastLogo from "../../components/Shared/ApplePodcastLogo";
import GooglePodcastLogo from "../../components/Shared/GooglePodcastLogo";
import TripSlider from "../../components/Shared/tripSlider/TripSlider";

export default function Slug() {
  const hotelRef = useRef(null);
  const newsRef = useRef(null);
  const partyRef = useRef(null);
  const featuredRef = useRef(null);
  const iconClass = useMemo(() => ({ className: "text-primary" }), []);
  const sliderButton = useMemo(
    () => ({ className: "text-[#743D7D] h-6 w-6 group-hover:text-white " }),
    [],
  );
  const images = [
    { src: "/homepage/hotel1.jpg", label: "Axel Hotel Barcelona" },
    { src: "/homepage/hotel2.jpg", label: "Elysium Hotel" },
    { src: "/homepage/hotel3.jpg", label: "Foxberry Inn" },
  ];
  const parties = [
    {
      src: "/homepage/party1.jpg",
      label: "Firebird tell us love story. Story of bar See more about next...",
      date: "Friday, May 27",
    },
    {
      src: "/homepage/party2.jpg",
      label: "Firebird tell us love story. Story of bar See more about next...",
      date: "Friday, May 27",
    },
  ];
  const venues = [
    {
      src: "/homepage/party1.jpg",
      label: "Sweatbox Sauna",
      desc: "Zero for heros - key workers free entry 10am - 2pm (20% off all other times)",
    },
    {
      src: "/homepage/party2.jpg",
      label: "Sweatbox Sauna",
      desc: "Zero for heros - key workers free entry 10am - 2pm (20% off all other times)",
    },
    {
      src: "/homepage/party1.jpg",
      label: "Sweatbox Sauna",
      desc: "Zero for heros - key workers free entry 10am - 2pm (20% off all other times)",
    },
    {
      src: "/homepage/party2.jpg",
      label: "Sweatbox Sauna",
      desc: "Zero for heros - key workers free entry 10am - 2pm (20% off all other times)",
    },
  ];
  const trips = [
    {
      label: "Sydney to Dubai",
      src: "/homepage/trip1.jpg",
      date: "3-Jul-2022",
      price: "4500",
    },
    {
      label: "Sydney to Dubai",
      src: "/homepage/trip2.jpg",
      date: "3-Jul-2022",
      price: "4500",
    },
    {
      label: "Sydney to Dubai",
      src: "/homepage/trip3.jpg",
      date: "3-Jul-2022",
      price: "4500",
    },
    {
      label: "Sydney to Dubai",
      src: "/homepage/trip4.jpg",
      date: "3-Jul-2022",
      price: "4500",
    },
  ];

  function handleSlider(ref, dir) {
    // console.log(ref.current.splide.go());
    ref.current.splide.go(dir);
  }
  return (
    <>
      <Head>
        <title>City | TravelGay</title>
      </Head>
      <InternalHeroSection />
      <div className="theme-container xl:mt-5">
        <InternalNavigation />
        <div className="grid grid-cols-1 lg:grid-cols-[calc(70%_-_8px)_calc(30%_-_8px)] gap-4 xl:mt-8">
          <div>
            <InternalFadeSlider />
            <SliderWithText />
            <div className="bg-secondary rounded-md relative xl:bg-white p-4 xl:p-0 mt-32 xl:mt-[7.25rem]">
              <div className="relative -top-28 xl:-top-10 xl:absolute xl:w-[400px] 2xl:w-[446px] xl:h-[410px] 2xl:h-[376px]">
                <img
                  src="/images/cityimg.jpg"
                  alt=""
                  className="rounded-md md:mx-auto xl:mr-auto xl:ml-0 xl:w-full xl:h-full xl:object-cover
                  shadow-[0_0_20px_rgba(0,0,0,0.25)]"
                />
              </div>
              {/* <div className="hidden xl:block w-[170px]" /> */}
              <div className="xl:bg-[#fcf4f6] -mt-24 xl:p-4 xl:mt-0 xl:rounded-md xl:pl-36 xl:pt-4 xl:pb-8 xl:w-[690px] xl:h-[376px] xl:ml-auto">
                <div className="xl:w-[360px] 2xl:w-[425px] xl:ml-auto">
                  <h3 className="text-primary text-xl lg:text-2xl font-semibold">
                    About Las Vegas
                  </h3>
                  <div className="flex items-center">
                    <p className="mt-4 xl:mt-3 pb-2 text-sm font-semibold text-black border-b border-rose-500 w-max">
                      Say hello to the Las Vegas
                    </p>
                    <p className="hidden xl:block text-sm font-semibold ml-12 text-[#999999]">
                      Gay Nevada
                    </p>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs leading-5">
                      Las Vegas is a desert city dedicated to pleasure. It’s one
                      of America’s top tourist destinations and it’s featured in
                      many iconic movies. Elvis turned it into his backyard and
                      many top performers followed, performing long residencies
                      in Las Vegas.
                    </p>
                    <p className="text-xs leading-5 mt-4">
                      You’ll find many big shiny hotels in Las Vegas, not to
                      mention a good selection of gay bars. This is a party
                      city. Try not to gamble away your life savings! Las Vegas
                      might not be the most subtle or culturally enriched
                      destination, but it’s certainly one of the most fun.
                    </p>
                  </div>
                  <Link href="#">
                    <a className="text-primary text-xs w-max lg:text-sm flex items-center gap-1 mt-6 lg:mt-10 font-medium underline">
                      Gay Las Vegas - Travel Gay Guide
                      <IconContext.Provider value={iconClass}>
                        <BsArrowUpRight />
                      </IconContext.Provider>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="pl-4 md:pl-0 mt-6 xl:mt-[4.35rem]">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-primary text-xl xl:text-2xl font-bold xl:font-semibold">
                  Trending Hotels in Las Vegas
                </h2>
                <div className="hidden lg:block">
                  <button
                    onClick={() => handleSlider(hotelRef, `-${"{i}"}`)}
                    type="button"
                    className="border border-[#743d7d] rounded-md p-1 group transition hover:bg-[#743d7d]"
                  >
                    <IconContext.Provider value={sliderButton}>
                      <HiOutlineArrowSmLeft />
                    </IconContext.Provider>
                  </button>

                  <button
                    onClick={() => handleSlider(hotelRef, `+${"{i}"}`)}
                    type="button"
                    className="border border-[#743d7d] rounded-md p-1 group transition hover:bg-[#743d7d] ml-2"
                  >
                    <IconContext.Provider value={sliderButton}>
                      <HiOutlineArrowSmRight />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
              <HotelSlider reff={hotelRef} data={images} loc="notHome" />
            </div>
            <div className="pl-4 md:pl-0 mt-6 xl:mt-16">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-primary text-xl xl:text-[1.75rem] font-bold xl:font-semibold">
                  News & Features
                </h2>
                <div className="hidden lg:block">
                  <button
                    onClick={() => handleSlider(newsRef, `-${"{i}"}`)}
                    type="button"
                    className="border border-[#743d7d] rounded-md p-1 group transition hover:bg-[#743d7d]"
                  >
                    <IconContext.Provider value={sliderButton}>
                      <HiOutlineArrowSmLeft />
                    </IconContext.Provider>
                  </button>

                  <button
                    onClick={() => handleSlider(newsRef, `+${"{i}"}`)}
                    type="button"
                    className="border border-[#743d7d] rounded-md p-1 group transition hover:bg-[#743d7d] ml-2"
                  >
                    <IconContext.Provider value={sliderButton}>
                      <HiOutlineArrowSmRight />
                    </IconContext.Provider>
                  </button>
                </div>
              </div>
              <NewsSlider reff={newsRef} sidebar />
            </div>
            <div className="pl-4 md:pl-0 mt-6 xl:mt-[5.5rem]">
              <div className="flex justify-between items-center pr-4 md:pr-0 lg:mb-4">
                <h2 className="text-primary text-xl xl:text-2xl font-bold xl:font-semibold">
                  Las Vegas Events
                </h2>
                <div className="flex items-center ">
                  <button
                    className="p-2 rounded-md bg-[#743D7D] lg:mr-4"
                    type="button"
                  >
                    <span className="invert">
                      <AiOutlinePlus />
                    </span>
                  </button>
                  <div className="border-l pl-4  hidden lg:block">
                    <button
                      onClick={() => handleSlider(partyRef, `-${"{i}"}`)}
                      type="button"
                      className="border border-[#743d7d] rounded-md p-1 group transition hover:bg-[#743d7d]"
                    >
                      <IconContext.Provider value={sliderButton}>
                        <HiOutlineArrowSmLeft />
                      </IconContext.Provider>
                    </button>

                    <button
                      onClick={() => handleSlider(partyRef, `+${"{i}"}`)}
                      type="button"
                      className="border border-[#743d7d] rounded-md p-1 group transition hover:bg-[#743d7d] ml-2"
                    >
                      <IconContext.Provider value={sliderButton}>
                        <HiOutlineArrowSmRight />
                      </IconContext.Provider>
                    </button>
                  </div>
                </div>
              </div>
              <PartySlider reff={partyRef} data={parties} loc="city" />
            </div>
            <div className="mt-6 xl:mt-[4.5rem]">
              <div className="flex justify-between items-center mb-4 px-4 md:px-0">
                <h2 className="text-primary text-xl xl:text-2xl font-bold xl:font-semibold">
                  Featured Venues
                </h2>
                <div className="flex items-center">
                  <button
                    className="p-2 rounded-md bg-[#743D7D] lg:mr-4"
                    type="button"
                  >
                    <span className="invert">
                      <AiOutlinePlus />
                    </span>
                  </button>
                  <div className="border-l pl-4 hidden lg:block">
                    <button
                      onClick={() => handleSlider(featuredRef, `-${"{i}"}`)}
                      type="button"
                      className="border border-[#743d7d] rounded-md p-1 group transition hover:bg-[#743d7d]"
                    >
                      <IconContext.Provider value={sliderButton}>
                        <HiOutlineArrowSmLeft />
                      </IconContext.Provider>
                    </button>

                    <button
                      onClick={() => handleSlider(featuredRef, `+${"{i}"}`)}
                      type="button"
                      className="border border-[#743d7d] rounded-md p-1 group transition hover:bg-[#743d7d] ml-2"
                    >
                      <IconContext.Provider value={sliderButton}>
                        <HiOutlineArrowSmRight />
                      </IconContext.Provider>
                    </button>
                  </div>
                </div>
              </div>
              <FeaturedSlider
                reff={featuredRef}
                data={venues}
                sidebar={false}
              />
            </div>
            <div className="mt-16">
              <div className="px-4 md:px-0">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl text-primary xl:text-2xl font-bold xl:font-semibold">
                    Las Vegas Tours
                  </h2>
                  <Link href="#">
                    <a className="underline text-xs lg:text-sm text-[#666] w-[50px] lg:w-auto inline-block">
                      View All
                    </a>
                  </Link>
                </div>
                <p className="text-xs mt-3">
                  Browse a selection of tours in Las Vegas from our partners
                  with free cancellation 24 hours before your tour starts.
                </p>
                <div className="flex items-center justify-between gap-2 bg-[#e1f0ff] px-3 py-4 rounded-md mt-4">
                  <span className="text-xs">
                    The <strong>best experiences</strong> in
                    <strong> Las Vegas</strong> for your trip
                  </span>
                  <Link href="#">
                    <a className="">
                      <img src="/images/getyourguide.jpg" alt="" />
                    </a>
                  </Link>
                </div>
              </div>
              <SliderWithText club />
            </div>
            <div className="mt-8 px-4 md:px-0">
              <div className="flex items-center justify-between">
                <h3 className="text-primary text-xl lg:text-2xl font-semibold">
                  Travelgay Podcast
                </h3>
                <div className="flex items-center gap-1">
                  <GooglePodcastLogo />
                  <SpotifyPodcastLogo />
                  <ApplePodcastLogo />
                </div>
              </div>
              <iframe
                title="castBoxPlayer"
                src="https://castbox.fm/app/castbox/player/id3813372/id358919215?v=8.22.11&autoplay=0"
                frameBorder="0"
                width="100%"
                height="500"
                className="mt-4"
              />
            </div>
          </div>
          <div>
            <div className="mt-2 lg:-mt-1">
              <div className="px-4 md:px-2">
                <h2 className="text-primary text-xl xl:text-2xl font-bold xl:font-semibold mb-4 xl:mb-2 ">
                  What&lsquo;s On Today
                </h2>
              </div>
              <FeaturedSlider data={venues} sidebar />
            </div>
            <div className="mt-12 xl:mt-[3.35rem]">
              <div className="px-4 md:px-2">
                <h2 className="text-primary text-xl xl:text-2xl font-bold xl:font-semibold mb-4 xl:mb-3 ">
                  What&lsquo;s On Tomorrow
                </h2>
              </div>
              <FeaturedSlider data={venues} sidebar />
            </div>
            <div className="mt-16 lg:mt-[32rem] px-4">
              <h2 className="text-primary font-semibold text-xl lg:text-2xl">
                LGBT Rights In USA
              </h2>
              <div className="pl-2 lg:pl-4">
                <div className="mt-4 border-b border-[#F8E3E8] pb-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-[#666] text-sm">
                      Homosexual
                    </h4>
                    <p className="text-sm">Homosexual</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <h4 className="font-semibold text-[#666] text-sm">
                      Activity
                    </h4>
                    <p className="text-sm">Since 2000</p>
                  </div>
                </div>
                <div className="mt-4 border-b border-[#F8E3E8] pb-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-[#666] text-sm">
                      Homosexual
                    </h4>
                    <p className="text-sm">Homosexual</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <h4 className="font-semibold text-[#666] text-sm">
                      Activity
                    </h4>
                    <p className="text-sm">Since 2000</p>
                  </div>
                </div>
                <div className="mt-4 border-b border-[#F8E3E8] pb-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-[#666] text-sm">
                      Homosexual
                    </h4>
                    <p className="text-sm">Homosexual</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <h4 className="font-semibold text-[#666] text-sm">
                      Activity
                    </h4>
                    <p className="text-sm">Since 2000</p>
                  </div>
                </div>
                <div className="mt-4 border-b border-[#F8E3E8] pb-4">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-[#666] text-sm">
                      Homosexual
                    </h4>
                    <p className="text-sm">Homosexual</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <h4 className="font-semibold text-[#666] text-sm">
                      Activity
                    </h4>
                    <p className="text-sm">Since 2000</p>
                  </div>
                </div>
                <Link href="#">
                  <a className="text-primary text-sm lg:text-base flex items-center gap-1 mt-4 font-medium">
                    Learn More
                    <IconContext.Provider value={iconClass}>
                      <BsArrowUpRight />
                    </IconContext.Provider>
                  </a>
                </Link>
              </div>
              <div className="mt-12">
                <h2 className="text-primary font-semibold text-xl lg:text-2xl">
                  Search Hotels By Area
                </h2>
                <div className="mt-8 pl-2 lg:pl-4">
                  <div className="flex items-center justify-between mt-4 border-b border-[#F8E3E8] pb-4">
                    <div>
                      <h5 className="text-primary font-semibold">
                        - All Hotels in Belfast
                      </h5>
                      <p className="text-sm">Top trending hotels in Belfast</p>
                    </div>
                    <IconContext.Provider value={iconClass}>
                      <BsArrowUpRight />
                    </IconContext.Provider>
                  </div>
                  <div className="flex items-center justify-between mt-4 border-b border-[#F8E3E8] pb-4">
                    <div>
                      <h5 className="text-primary font-semibold">
                        - All Hotels in Belfast
                      </h5>
                      <p className="text-sm">
                        Top trending hotels in Birmingham
                      </p>
                    </div>
                    <IconContext.Provider value={iconClass}>
                      <BsArrowUpRight />
                    </IconContext.Provider>
                  </div>
                  <div className="flex items-center justify-between mt-4 border-b border-[#F8E3E8] pb-4">
                    <div>
                      <h5 className="text-primary font-semibold">
                        - All Hotels in Belfast
                      </h5>
                      <p className="text-sm">Top trending hotels in Leeds</p>
                    </div>
                    <IconContext.Provider value={iconClass}>
                      <BsArrowUpRight />
                    </IconContext.Provider>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl lg:text-2xl text-primary font-semibold pl-4 -mb-1">
                Gay Group Trips{" "}
              </h3>
              <TripSlider data={trips} sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
