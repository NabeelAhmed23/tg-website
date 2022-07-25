/* eslint-disable no-template-curly-in-string */
import { useState } from "react";
import HotelCarousel from "./HotelCarousel";

export default function CarouselWrapper() {
  const [splide, setSplide] = useState();
  function handleArrow(sp) {
    setSplide(sp);
  }

  function handleSplide(dir) {
    splide.go(dir);
  }

  return (
    <div
      className="md:mt-[59px] md:ml-[calc(calc(100%_-_720px)_/_2)] lg:ml-[calc(calc(100%_-_960px)_/_2)] xl:ml-[calc(calc(100%_-_1140px)_/_2)]
    2xl:ml-[calc(calc(100%_-_1313px)_/_2)]"
    >
      <div className="md:grid md:grid-cols-[175px_1fr] md:gap-6 relative">
        <div>
          <h3 className="text-base md:text-2xl text-white md:text-[#D74874] font-semibold">
            Top Hotels
          </h3>
          <p className="mt-2 text-xs text-white md:text-[#666] md:text-sm lg:text-base">
            Travel Gay Approved!
          </p>
          <div className="mt-2 hidden md:block">
            <button type="button" onClick={() => handleSplide("-${i}")}>
              <svg
                className="w-8 h-8 mr-1"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="31.5"
                  y="31.5"
                  width="31"
                  height="31"
                  rx="4.5"
                  transform="rotate(-180 31.5 31.5)"
                  stroke="#D64D78"
                />
                <path
                  d="M9.19696 15.1657L13.5595 19.7609C13.8043 20.0061 14.3296 20.0904 14.616 19.8191C14.9023 19.5477 14.9005 19.0328 14.6122 18.7634L11.416 15.3926H21.845C22.2465 15.3926 22.5721 15.0676 22.5721 14.667C22.5721 14.2663 22.2465 13.9414 21.845 13.9414H11.416L14.6122 10.5705C14.9005 10.3011 14.9196 9.76666 14.616 9.51478C14.3353 9.28198 13.8143 9.27168 13.5595 9.57299L9.19696 14.1682C9.0115 14.3537 8.86696 14.8418 9.19696 15.1659V15.1657Z"
                  fill="#D64D78"
                />
              </svg>
            </button>
            <button type="button" onClick={() => handleSplide("+${i}")}>
              <svg
                className="w-8 h-8 ml-1 rotate-180"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="31.5"
                  y="31.5"
                  width="31"
                  height="31"
                  rx="4.5"
                  transform="rotate(-180 31.5 31.5)"
                  stroke="#D64D78"
                />
                <path
                  d="M9.19696 15.1657L13.5595 19.7609C13.8043 20.0061 14.3296 20.0904 14.616 19.8191C14.9023 19.5477 14.9005 19.0328 14.6122 18.7634L11.416 15.3926H21.845C22.2465 15.3926 22.5721 15.0676 22.5721 14.667C22.5721 14.2663 22.2465 13.9414 21.845 13.9414H11.416L14.6122 10.5705C14.9005 10.3011 14.9196 9.76666 14.616 9.51478C14.3353 9.28198 13.8143 9.27168 13.5595 9.57299L9.19696 14.1682C9.0115 14.3537 8.86696 14.8418 9.19696 15.1659V15.1657Z"
                  fill="#D64D78"
                />
              </svg>
            </button>
          </div>
          <div className="mt-2 md:hidden">
            <button type="button" onClick={() => handleSplide("-${i}")}>
              <svg
                className="w-8 h-8 mr-1"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="31.5"
                  y="31.5"
                  width="31"
                  height="31"
                  rx="4.5"
                  transform="rotate(-180 31.5 31.5)"
                  stroke="white"
                />
                <path
                  d="M9.19696 15.1657L13.5595 19.7609C13.8043 20.0061 14.3296 20.0904 14.616 19.8191C14.9023 19.5477 14.9005 19.0328 14.6122 18.7634L11.416 15.3926H21.845C22.2465 15.3926 22.5721 15.0676 22.5721 14.667C22.5721 14.2663 22.2465 13.9414 21.845 13.9414H11.416L14.6122 10.5705C14.9005 10.3011 14.9196 9.76666 14.616 9.51478C14.3353 9.28198 13.8143 9.27168 13.5595 9.57299L9.19696 14.1682C9.0115 14.3537 8.86696 14.8418 9.19696 15.1659V15.1657Z"
                  fill="white"
                />
              </svg>
            </button>
            <button type="button" onClick={() => handleSplide("+${i}")}>
              <svg
                className="w-8 h-8 ml-1 rotate-180"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="31.5"
                  y="31.5"
                  width="31"
                  height="31"
                  rx="4.5"
                  transform="rotate(-180 31.5 31.5)"
                  stroke="white"
                />
                <path
                  d="M9.19696 15.1657L13.5595 19.7609C13.8043 20.0061 14.3296 20.0904 14.616 19.8191C14.9023 19.5477 14.9005 19.0328 14.6122 18.7634L11.416 15.3926H21.845C22.2465 15.3926 22.5721 15.0676 22.5721 14.667C22.5721 14.2663 22.2465 13.9414 21.845 13.9414H11.416L14.6122 10.5705C14.9005 10.3011 14.9196 9.76666 14.616 9.51478C14.3353 9.28198 13.8143 9.27168 13.5595 9.57299L9.19696 14.1682C9.0115 14.3537 8.86696 14.8418 9.19696 15.1659V15.1657Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <HotelCarousel handleArrow={(sp) => handleArrow(sp)} />
      </div>
    </div>
  );
}
