import { Heading } from "../../atoms/Heading";
import { ViewMore } from "../../atoms/ViewMore";

export const TopMovie = () => {
	return (
		<>
			<div className="top-MovieIntro">
			 <div className="top-MovieIntro__heading">
				<Heading>ムービー</Heading>
			 </div>
			 <div className="top-MovieIntro__content">
				<div className="MovieRect top-left"></div><div className="MovieRect top-rigt"></div><div className="MovieRect btm-left"></div><div className="MovieRect btm-rigt"></div>
				<div className="top-MovieIntro__content-inner"></div>
			 </div>
			 <ViewMore link={`/movie`} />
		 </div>
		</>
	);
}