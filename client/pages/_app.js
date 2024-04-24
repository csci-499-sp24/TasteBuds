import "/styles/globals.css";
import "/styles/index.css";
import "/styles/search.css";
import "/styles/login.css";
import { NextUIProvider } from "@nextui-org/react";
import UserAuthContext from "@/firebase/userAuthContext";

export default function App({ Component, pageProps }) {
  return (
    <UserAuthContext>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </UserAuthContext>
  );
}