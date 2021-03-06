import { DepaPanel } from "../organisms/Department/DepaPanel";

import { useEffect, memo } from "react";
import "../../styles/depa.scss";

export const DepaPage = memo(() => {
	console.log("レンダリング");
	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

	return (
		<>
			<div className="p-depa">
				<div className="p-depa__heading">
					<h1 className="p-depa__title">DEPARTMENTS</h1>
					<p className="p-depa__subtitle">部署紹介</p>
				</div>
				<h3 className="p-depa__about">
					芸工祭には19の幹部と部署長がいます。<br/>
					部署に所属して一緒に芸工祭を盛り上げよう。
				</h3>
				<DepaPanel></DepaPanel>
			</div>
		</>
	);
})