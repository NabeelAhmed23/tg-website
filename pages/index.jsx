import Head from "next/head";
import HeroSection from "../components/home/HeroSection";
import HotelFormWrapper from "../features/hotelBookingForm/HotelFormWrapper";
import CarouselWrapper from "../features/carousel/CarouselWrapper";
import PartiesEvents from "../components/home/PartiesEvents";
import FeaturedNews from "../components/home/FeaturedNews";
import TravelFaqs from "../components/home/TravelFaqs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | TravelGay</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <div className="relative -top-[8rem] md:hidden pl-4">
          <CarouselWrapper />
        </div>
        <div className="hidden lg:block">
          <HotelFormWrapper />
        </div>
        <div className="hidden md:block mt-[50px] lg:mt-[65px]">
          <CarouselWrapper />
        </div>
        <PartiesEvents />
        <FeaturedNews />
        <TravelFaqs />
      </main>
    </>
  );
}
