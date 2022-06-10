import { FC, memo, ReactNode } from "react";

import "../../styles/modules/viewmore.scss";

type Props = {
	children: ReactNode;
	link: string;
};

export const ViewMore: FC<Props> = memo((props) => {
	const { children, link } = props;

	return (
		<>
			<a href={link} className="ViewMore">
				 {children}
			</a>
		</>
	);
})