import { ChakraProvider, Flex } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { isMobile } from "react-device-detect";

import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider>
      <BrowserRouter basename="/2022/pre/">
        {isMobile ? (
          <Router />
        ) : (
          <Flex
            width="100vw"
            height="100vh"
            direction="column"
            justify="center"
            align="center"
            background="linear-gradient(to right, #99C955, #30895E)"
          >
            <img
              src={`${process.env.PUBLIC_URL}/icons/geikosai-logo.png`}
              alt="芸工祭アイコン"
              style={{ width: "174px", height: "157px" }}
            />
            <p
              style={{
                marginTop: "50px",
                fontFamily: "ShinGo",
                fontSize: "21px",
                fontWeight: "500",
                color: "white",
              }}
            >
              スマートフォンでご覧ください😓
            </p>
          </Flex>
        )}
      </BrowserRouter>
    </ChakraProvider>
  );
}
