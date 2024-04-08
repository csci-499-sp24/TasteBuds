<<<<<<< HEAD
import "../styles/globals.css";
import "/styles/index.css";
import "/styles/search.css";
import "/styles/login.css";
import "/styles/recipeprofile.css";
import "/styles/recipeInfo.css";
import "styles/recipeInfo2.css"
=======
import "/styles/globals.css";
import "/styles/index.css";
import "/styles/search.css";
import "/styles/login.css";

import "/styles/index.css"
import { NextUIProvider } from "@nextui-org/react";

>>>>>>> a61c608e8c6f86e089d778aeb0240a4b96b28e8e
export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}