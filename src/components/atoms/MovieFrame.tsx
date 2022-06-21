import { FC, ReactNode, memo } from "react";

type Props = {
	children: ReactNode;
}

export const MovieFrame: FC<Props> = memo((props) => {
	const { children } = props;

	return (
		<div className="top-MovieIntro__content">
			<div className="MovieRect top-left"></div><div className="MovieRect top-rigt"></div><div className="MovieRect btm-left"></div><div className="MovieRect btm-rigt"></div>
			<div className="top-MovieIntro__content-inner">
				{children}
			</div>
		</div>
	)
})