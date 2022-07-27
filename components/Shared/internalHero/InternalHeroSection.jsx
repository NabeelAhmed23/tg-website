import BreadCrumbs from "../../../features/breadcrumbs/BreadCrumbs";
import HotelFormWrapper from "../../../features/hotelBookingForm/HotelFormWrapper";

export default function InternalHeroSection() {
  return (
    <>
      <section
        className="internalhero w-full h-[248px] lg:h-[300px] xl:h-[350px] pt-[45px] px-3 md:px-6 lg:px-12 xl:px-[103px] border"
        style={{
          background:
            "linear-gradient(0deg, rgba(116, 61, 125, 0.5), rgba(116, 61, 125, 0.5)), url(/images/internalhero.jpeg)",
        }}
      >
        <div className="text-white h-6">
          <BreadCrumbs page="Gay Las Vegas" />
        </div>
        <div className="mt-11">
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-[48px] font-bold text-white">
            Gay Las Vegas
          </h1>
          <p className="text-sm mt-2 xl:mt-8 xl:text-base text-white">
            Explore the Las Vegas popular gay scene. Find the best gay bars,
            saunas, cruise clubs, hotels & more.
          </p>
        </div>
      </section>
      <div className="hidden lg:block">
        <HotelFormWrapper />
      </div>
    </>
  );
}
