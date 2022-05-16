import "../styles/globals.css";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import Script from "next/script";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                      (function(w, d) { w.CollectId = "627d53fcfaa7943a0bbb2472"; var h = d.head || d.getElementsByTagName("head")[0]; var s = d.createElement("script"); s.setAttribute("type", "text/javascript"); s.async=true; s.setAttribute("src", "https://collectcdn.com/launcher.js"); h.appendChild(s); })(window, document);
                      `,
          }}
        />
      </Head>
      <ChakraProvider>
        <Layout>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
