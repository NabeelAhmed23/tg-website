import BreadCrumbs from "../../../features/breadcrumbs/BreadCrumbs";
import HotelFormWrapper from "../../../features/hotelBookingForm/HotelFormWrapper";

export default function InternalHeroSection() {
  return (
    <>
      <section
        className="internalhero w-full h-[248px] lg:h-[300px] xl:h-[350px] pt-[75px] lg:pt-[52px] px-3 md:px-6 lg:px-12 xl:px-[103px] border"
        style={{
          background:
            "linear-gradient(0deg, rgba(116, 61, 125, 0.5), rgba(116, 61, 125, 0.5)), url(/images/internalhero.jpeg)",
        }}
      >
        <div className="text-white h-6">
          <BreadCrumbs page="Gay Las Vegas" />
        </div>
        <div className="mt-6 lg:mt-[2.3rem]">
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-[48px] font-bold text-white">
            Gay Las Vegas
          </h1>
          <p className="text-xs lg:text-sm mt-4 lg:mt-2 xl:mt-8 xl:text-base leading-5 text-white">
            A popular destination for gay travelers. Las Vegas has it all – fine
            restaurants, casinos, nightlife and world-class entertainment by
            iconic performers.
          </p>
        </div>
      </section>
      <div className="hidden lg:block">
        <HotelFormWrapper />
      </div>
    </>
  );
}
