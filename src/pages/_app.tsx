import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { Header } from "@/components/organisms/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

export default MyApp;
