import React from "react";
import "styles/global.css";
import Footer from "components/Footer";
import "util/analytics";
import Chat from "components/Chat";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Chat />
      <>
        <Component {...pageProps} />

        <Footer
          size="md"
          bgColor="bg-white"
          bgImage=""
          bgImageOpacity={1}
          textColor=""
          sticky={false}
        />
      </>
    </>
  );
}

export default MyApp;
