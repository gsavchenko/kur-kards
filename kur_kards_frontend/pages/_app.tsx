import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { PhoenixSocketProvider } from "../common/socket/socket.context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PhoenixSocketProvider>
      <Component {...pageProps} />
    </PhoenixSocketProvider>
  );
}

export default MyApp;
