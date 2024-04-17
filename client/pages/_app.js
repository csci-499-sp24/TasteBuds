// pages/_app.js
import "../styles/globals.css";
import "../styles/index.css";
import "../styles/search.css";
import "../styles/login.css";

import { NextUIProvider } from "@nextui-org/react";
import UserAuthContextProvider from "@/firebase/userAuthContext"; // Use only the provider

export default function App({ Component, pageProps }) {
  return (
    <UserAuthContextProvider> {/* Use this as the top-level provider */}
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </UserAuthContextProvider>
  );
}
