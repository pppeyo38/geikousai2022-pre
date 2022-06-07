import { FC, memo } from "react";

import "../../styles/modules/viewmore.scss";

type Props = {
	link: string;
};

export const ViewMore: FC<Props> = memo((props) => {
	const { link } = props;

	return (
		<>
			<a href={link} className="ViewMore">
				 view more
			</a>
		</>
	);
})