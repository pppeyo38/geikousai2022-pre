import { memo, useEffect } from "react";

import { TopVisual } from "../organisms/TopPage/TopVisual";
import { TopAbout } from "../organisms/TopPage/TopAbout";
import { TopTheme } from "../organisms/TopPage/TopTheme";
import { TopDepa } from "../organisms/TopPage/TopDepa";
import { TopMovie } from "../organisms/TopPage/TopMovie";
import { TopGame } from "../organisms/TopPage/TopGame";
import "../../styles/top.scss";

export const TopPage = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopVisual />
      <TopAbout />
      <TopTheme />
      <TopDepa />
      <TopMovie />
      <TopGame />
    </>
  );
});
