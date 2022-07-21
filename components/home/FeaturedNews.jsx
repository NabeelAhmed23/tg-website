import { Splide, SplideSlide } from "@splidejs/react-splide";
import Link from "next/link";

export default function FeaturedNews() {
  return (
    <section className=" theme-container px-4 py-10 lg:py-16 xl:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[20rem_1fr] gap-4">
        <div>
          <h1 className="text-xl font-bold text-primary max-w-[19.5rem] xl:text-[1.75rem] xl:leading-10 sm:max-w-none">
            Gay Travel News, Interviews & Features
          </h1>
          <hr className="bg-[#D64D78] w-[7.5rem] mt-2 h-[2px] lg:h-1 xl:mt-4" />
          <p className="text-sm mt-2 xl:mt-4">
            Reference site about Lorem Ipsum, giving information on its origins,
            as well as a random Lipsum generator. Reference site about Lorem
            Ipsum, giving information on its origins, as well as a random Lipsum
            generator.
          </p>
          <Link href="#">
            <a className="text-primary mt-4 hidden md:inline-block underline font-semibold">
              {" "}
              View All Update{" "}
            </a>
          </Link>
        </div>
        <div className="overflow-hidden">
          <Splide
            options={{
              autoplay: false,
              type: "loop",
              perPage: 3,
              arrows: false,
              gap: "1rem",
              pagination: false,
              breakpoints: {
                1280: {
                  perPage: 2,
                },

                640: {
                  perPage: 1,
                  padding: { right: "2rem" },
                },
              },
            }}
          >
            <SplideSlide>
              <div className="relative">
                <img src="/homepage/featured1.jpg" alt="" className="w-full" />
                <div className="mt-3">
                  <p className="text-xs">14 March, 2022</p>
                  <h2 className="mt-1 font-bold xl:text-lg">
                    Tom Prior On Gay Travel, Mindfulness Firebird
                  </h2>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="relative">
                <img src="/homepage/featured2.jpg" alt="" className="w-full" />
                <div className="mt-3">
                  <p className="text-xs">14 March, 2022</p>
                  <h2 className="mt-1 font-bold xl:text-lg">
                    Tom Prior On Gay Travel, Mindfulness Firebird
                  </h2>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="relative">
                <img src="/homepage/featured3.jpg" alt="" className="w-full" />
                <div className="mt-3">
                  <p className="text-xs">14 March, 2022</p>
                  <h2 className="mt-1 font-bold xl:text-lg">
                    Tom Prior On Gay Travel, Mindfulness Firebird
                  </h2>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
}
