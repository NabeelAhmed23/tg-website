import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";
import { FiUsers } from "react-icons/fi";
import PropTypes from "prop-types";
import HotelInput from "./HotelInput";
import InputField from "../../components/Shared/InputField";
import SelectInput from "../../components/Shared/SelectInput";
import TgApproveRedLogo from "../../components/Shared/TgApproveRedLogo";

export default function HotelForm({ scrolled }) {
  const [hotelForm, setHotelForm] = useState({
    location: "",
    checkin: "",
    checkout: "",
    guests: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    let obj = { ...hotelForm };
    obj = { ...obj, [name]: value };
    setHotelForm(obj);
  }
  return (
    <form className="flex-1 grid grid-cols-1 lg:grid-cols-[auto_110px] lg:gap-6 xl:gap-10 w-full lg:w-auto">
      <div
        className={`grid  ${
          scrolled
            ? "lg:grid-cols-[200px_1fr] xl:grid-cols-[300px_1fr] gap-x-4"
            : "grid-cols-1 gap-y-4"
        }  `}
      >
        <HotelInput
          label="Location"
          control="location"
          icon={<MdLocationPin />}
          className={scrolled ? " " : "col-span-3"}
        >
          <InputField
            type="text"
            name="location"
            className={` text-sm focus:outline-none ${
              scrolled ? "w-[calc(100%_-_25px)]" : " w-[calc(100%_-_25px)] ml-6"
            }`}
            onChange={(e) => handleChange(e)}
            placeholder="Where are you going?"
          />
        </HotelInput>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <HotelInput
            label="Check In"
            control="checkin"
            icon={<VscCalendar />}
            className=""
          >
            <InputField
              type="date"
              name="checkin"
              onChange={(e) => handleChange(e)}
              placeholder="Enter checkin date"
              className={`text-xs sm:text-sm focus:outline-none justify-between  ${
                scrolled
                  ? "w-[calc(100%_-_24px)] xl:ml-6"
                  : "ml-6 w-[calc(100%_-_24px)]"
              }`}
            />
          </HotelInput>
          <HotelInput
            label="Check Out"
            icon={<VscCalendar />}
            control="checkout"
            className=""
          >
            <InputField
              type="date"
              name="checkout"
              onChange={(e) => handleChange(e)}
              placeholder="Enter checkin date"
              className={`text-xs sm:text-sm focus:outline-none justify-between
               ${
                 scrolled
                   ? "w-[calc(100%_-_24px)] xl:ml-6"
                   : "ml-6 w-[calc(100%_-_24px)]"
               }
              `}
            />
          </HotelInput>
          <HotelInput
            label="Guests"
            icon={<FiUsers />}
            control="guestsNumber"
            className="col-span-2 lg:col-span-1"
          >
            <SelectInput
              name="guestsNumber"
              className="ml-6 text-sm focus:outline-none  w-[calc(100%_-_1.5rem)]"
            >
              <option value="0">0 Guests</option>
              <option value="1">1 Guests</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
            </SelectInput>
          </HotelInput>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-2 lg:gap-4">
        <TgApproveRedLogo
          className={`h-[60px] ${scrolled ? "hidden" : "hidden lg:block"} `}
        />
        <button
          type="submit"
          className={`bg-[#743D7D] text-white flex-1 rounded-md ${
            scrolled ? "my-0" : "my-1"
          } w-full py-3 lg:py-0 mt-4 lg:mt-0`}
        >
          Search
        </button>
      </div>
    </form>
  );
}

HotelForm.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};
