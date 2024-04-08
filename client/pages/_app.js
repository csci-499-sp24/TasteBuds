import "@/styles/globals.css";
import "/styles/index.css";
import "/styles/search.css";
import "/styles/login.css";

import "@/styles/index.css"
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}