import { memo } from "react";

import { TopVisual } from "../organisms/TopPage/TopVisual";
import { TopAbout } from "../organisms/TopPage/TopAbout";
import { TopTheme } from "../organisms/TopPage/TopTheme";
import { TopDepa } from "../organisms/TopPage/TopDepa";
import "../../styles/top.scss";

import { Heading } from "../atoms/Heading";

export const TopPage = memo(() => {
	return (
		<>
			<TopVisual />
			<TopAbout />
			<TopTheme />
			<TopDepa />
		</>
	);
})