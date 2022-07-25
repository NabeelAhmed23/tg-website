import Link from "next/link";

export default function HeroSection() {
  const cities = [
    { label: "Bangkok", id: 1 },
    { label: "London", id: 2 },
    { label: "Barcelona", id: 3 },
    { label: "Berlin", id: 4 },
    { label: "Miami", id: 5 },
    { label: "Seoul", id: 6 },
  ];
  return (
    <section className="hero-background w-full bg-[center_43.5%] bg-cover ">
      <div className="bg-linear w-full md:w-8/12 lg:w-7/12 xl:w-6/12 h-[454px] lg:h-[520px] 2xl:h-[608px] pl-4 md:pl-10 lg:pl-12 xl:pl-[5rem] 2xl:pl-[6.25rem] py-16 md:py-[5rem] 2xl:py-[7.5rem]">
        <div className="max-w-[20rem] md:max-w-[28rem] lg:max-w-[32rem] 2xl:max-w-[36rem]">
          <h1 className="text-shadow text-white font-bold text-[32px] md:text-[44px] lg:text-[52px] xl:text-[56px] 2xl:text-[64px] md:leading-[60px] xl:leading-[76px]">
            The World&rsquo;s Best Gay Travel Guide
          </h1>
          <p className="text-shadow text-xs sm:text-sm md:text-base text-white font-normal mt-3 md:mt-5 leading-5 2xl:max-w-[500px]">
            Find the best gay bars gay hotels clubs saunas and beaches. Book a
            hotel read reviews and get discount.
          </p>
          <div className="mt-5 justify-between hidden md:flex xl:max-w-[515px]">
            {cities.map((item) => (
              <Link href={item.label} key={item.id}>
                <a className="text-white font-medium underline">{item.label}</a>
              </Link>
            ))}
          </div>
          <div className="flex gap-3 md:hidden mt-3">
            <button
              type="button"
              className="text-sm px-4 py-[10px] bg-[#743D7D] rounded-md border border-[#CCCCCC] text-white"
            >
              Search hotels
            </button>
            <button
              type="button"
              className="text-sm px-4 py-[10px] bg-white text-[#666666] rounded-md shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
