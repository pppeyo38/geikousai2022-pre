import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

export default MyApp;
