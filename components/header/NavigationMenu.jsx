import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import NavigationMenuItems from "./NavigationMenuItems";
import DropdownWrapper from "./megamenu/DropdownWrapper";
import { getMegaMenu } from "../../utils/services/ApiCalls";

export default function NavigationMenu({ isActive, reff }) {
  const [active, setActive] = useState("");
  const [menu, setMenu] = useState("");

  async function getMenu() {
    const res = await getMegaMenu();
    setMenu(res.data.data);
  }
  useEffect(() => {
    getMenu();
  }, []);

  const navItems = [
    { label: "Destinations", children: <DropdownWrapper menu={menu} /> },
    { label: "Hotels", link: "/hotels" },
    { label: "Group Trips", link: "/group-trips" },
    { label: "Pride", link: "/pride" },
    { label: "Editorials", link: "/editorials" },
    { label: "More" },
  ];
  return (
    <ul
      className={`absolute left-0 right-0 bg-primary top-[63px]
      ${
        isActive
          ? "overflow-visible pt-4 pb-8 lg:py-0 h-max"
          : "p-0 overflow-hidden lg:overflow-visible h-0 lg:h-max"
      }
     lg:relative lg:inset-0 lg:flex lg:gap-4 2xl:gap-[23px]
      lg:mr-4 2xl:mr-4 3xl:mr-8 transition-[padding]`}
      ref={reff}
    >
      {navItems.map((item) => (
        <li key={item.label} className="relative">
          <NavigationMenuItems
            label={item.label}
            link={item.link}
            className="flex justify-between w-full items-center lg:inline-block lg:w-max font-medium text-lg lg:text-sm 2xl:text-base p-3 lg:px-0 hover:text-[#D74874] group"
            active={active}
            setActive={setActive}
          >
            {item.children}
          </NavigationMenuItems>
        </li>
      ))}
    </ul>
  );
}

NavigationMenu.defaultProps = {
  isActive: false,
};

NavigationMenu.propTypes = {
  isActive: PropTypes.bool,
  reff: PropTypes.objectOf(PropTypes.shape()).isRequired,
};
