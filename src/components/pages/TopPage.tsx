import { memo } from "react";

import { TopVisual } from "../organisms/TopPage/TopVisual";
import { TopAbout } from "../organisms/TopPage/TopAbout";
import { TopTheme } from "../organisms/TopPage/TopTheme";
import "../../styles/top.scss";

export const TopPage = memo(() => {
	return (
		<>
			<TopVisual />
			<TopAbout />
			<TopTheme />
		</>
	);
})