import PropTypes from "prop-types";
import Head from "next/head";
import HeaderWrapper from "../components/header/HeaderWrapper";
import MainFooter from "../components/footer/MainFooter";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
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
