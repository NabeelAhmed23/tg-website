/* eslint-disable react/prop-types */
import Link from "next/link";

export default function DropdownContent({ countriesData = [] }) {
  const chunk = Math.ceil(
    countriesData.length / (window.innerWidth < 1280 ? 2 : 4) + 1,
  );

  const arr = countriesData
    ?.map((e, i) =>
      i % chunk === 0 ? countriesData.slice(i, i + chunk) : null,
    )
    .filter((e) => e);

  return (
    // <div
    //   className="lg:fixed lg:right-[1.5rem] 2xl:right-[10.75rem] 3xl:right-[15.1rem] lg:top-[68px]
    //    xl:top-[76px] 2xl:top-[100px] 3xl:top-[102px] bg-white p-5 w-full lg:w-[47rem] overflow-auto
    //  max-h-[50vh] lg:max-h-[100%] lg:h-[34rem] xl:h-[33.75rem] 2xl:h-[33.35rem] lg:overflow-auto dropdownContent lg:shadow-[5px_5px_10px_0px_rgba(0,_0,_0,_0.25)]"
    // >
    <div className="dropdownContent p-4 overflow-auto bg-white lg:relative  lg:w-[748px] h-[50vh] lg:max-h-[544px] lg:h-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {arr.map((countries) =>
          countries.map((country) => (
            <div className="py-2" key={country.slug + country.id}>
              <Link href={country.slug}>
                <a className="text-primary font-bold text-sm lg:max-w-[150px] inline-block">
                  {country.name}
                </a>
              </Link>
              {country.cities.map((city) => (
                <p className="text-sm mt-1 ml-3" key={city.id}>
                  {city.name}
                </p>
              ))}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
