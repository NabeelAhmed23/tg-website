import PropTypes from "prop-types";
import HeaderWrapper from "../components/header/HeaderWrapper";
import MainFooter from "../components/footer/MainFooter";

export default function Layout({ children }) {
  return (
    <>
      <HeaderWrapper />
      <main>{children}</main>
      <MainFooter />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
