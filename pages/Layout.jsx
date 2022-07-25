import PropTypes from "prop-types";
import HeaderWrapper from "../components/header/HeaderWrapper";
import MainFooter from "../components/footer/MainFooter";
import HotelFormWrapper from "../features/hotelBookingForm/HotelFormWrapper";

export default function Layout({ children }) {
  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <HeaderWrapper />
      <main>
        {children}
        <div className="lg:hidden">
          <HotelFormWrapper />
        </div>
        <button
          onClick={handleScrollToTop}
          type="button"
          className="hidden lg:block fixed right-8 bottom-8 "
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.896484 24C0.896484 37.2543 11.6415 48 24.8965 48C38.152 48 48.8965 37.2545 48.8965 24C48.8965 10.7457 38.1515 -9.53674e-07 24.8965 -9.53674e-07C11.641 -9.53674e-07 0.896484 10.7445 0.896484 24ZM26.4381 9.11883L31.5945 14.8989C31.6205 14.9277 31.6456 14.9573 31.6689 14.9879L34.0822 18.0394C34.3673 18.3998 34.5056 18.8287 34.5056 19.2552C34.5056 19.8346 34.2505 20.408 33.7606 20.7954C32.9111 21.4679 31.6771 21.3237 31.0046 20.4738L28.6274 17.4679L26.8555 15.4816L26.855 37.5756C26.855 38.6591 25.9768 39.5377 24.8929 39.5377C23.8094 39.5377 22.9307 38.6595 22.9307 37.5756L22.9307 15.7899L18.734 20.6485C18.0255 21.4688 16.7865 21.5595 15.9667 20.8506C15.1465 20.1421 15.0557 18.9035 15.7646 18.0833L23.4891 9.14176C23.8582 8.71384 24.3938 8.46704 24.9581 8.46202C25.5229 8.45791 26.0616 8.69742 26.438 9.1185L26.4381 9.11883Z"
              fill="#D64D78"
            />
          </svg>
        </button>
      </main>
      <MainFooter />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
