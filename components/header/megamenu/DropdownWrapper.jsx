/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DropdownContinentItem from "./DropdownContinentItem";
import DropdownContent from "./DropdownContent";

export default function DropdownWrapper({ menu }) {
  const [active, setActive] = useState(menu[0]?.name);
  const [continent, setContinent] = useState(menu[0]);
  const handleActive = (continent) => {
    setContinent(continent);
    if (active === continent.name && window.innerWidth <= 1024) {
      setActive("");
    } else setActive(continent.name);
  };

  return (
    <div className="lg:absolute z-50 lg:top-14 2xl:top-16 lg:-left-[12.5rem]  lg:h-[34rem]">
      <div className="h-full lg:grid lg:grid-cols-[208px_1fr]">
        <ul className="lg:py-4 bg-primary w-full lg:w-52 h-full">
          {menu.length > 0 &&
            menu?.map((continent) => (
              <React.Fragment key={continent.id}>
                <DropdownContinentItem
                  active={active && active}
                  label={continent.name}
                  handleActive={handleActive}
                  continent={continent}
                />
                {active === continent.name && (
                  <div className="lg:hidden">
                    <DropdownContent countriesData={continent.countries} />
                  </div>
                )}
              </React.Fragment>
            ))}
        </ul>
        {active === continent.name && (
          <div className="hidden lg:block w-[748px]">
            <DropdownContent countriesData={continent.countries} />
          </div>
        )}
      </div>
    </div>
  );
}
