import PropTypes from "prop-types";
import HeaderWrapper from "../components/header/HeaderWrapper";
import MainFooter from "../components/footer/MainFooter";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <HeaderWrapper />
      <main>{children}</main>
      <MainFooter />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
