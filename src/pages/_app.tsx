import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider, Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

import { theme } from "@/themes/theme";
import { Header } from "@/components/organisms/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            ${emotionReset}
            @font-face {
              font-family: "txt-basic";
              src: url("fonts/A-OTF-ShinGoPr6N-Regular.otf") format("opentype");
              font-style: normal;
              font-weight: 400;
            }
            @font-face {
              font-family: "txt-basic";
              src: url("fonts/A-OTF-ShinGoPr6N-Bold.otf") format("opentype");
              font-style: normal;
              font-weight: 700;
            }
            @font-face {
              font-family: "pixel";
              src: url("fonts/PixelMplus10-Regular.ttf") format("opentype");
            }
          `}
        />
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
