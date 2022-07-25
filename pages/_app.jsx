import React from "react";
import "../styles/style.css";
import PropTypes from "prop-types";
import { SessionProvider } from "next-auth/react";
import Layout from "./Layout";
// Default theme
import "@splidejs/splide/dist/css/splide.min.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <React.StrictMode>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </React.StrictMode>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape().isRequired,
};
