import "/styles/globals.css";
import "/styles/index.css";
import "/styles/search.css";
import "/styles/savedRecipe.css"; 
import "/styles/CommentForm.css";
import "/styles/login.css";
import "/styles/stars.css";
import "/styles/sidebar.css";
import { NextUIProvider } from "@nextui-org/react";
import UserAuthContext from "@/firebase/userAuthContext";
import Footer from "@/components/Footer.js";
import "/styles/footer.css";

export default function App({ Component, pageProps }) {
  return (
    <UserAuthContext>
      <NextUIProvider>
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </UserAuthContext>
  );
}
