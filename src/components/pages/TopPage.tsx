import { memo } from "react";

import { TopVisual } from "../organisms/TopVisual";
import "../../styles/top.scss";

export const TopPage = memo(() => {
	return (
		<>
			<TopVisual />
		</>
	);
})