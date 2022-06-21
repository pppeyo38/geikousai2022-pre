import { Heading } from "../../atoms/Heading";
import { ViewMore } from "../../atoms/ViewMore";
import { MovieFrame } from "../../atoms/MovieFrame";

export const TopMovie = () => {
	return (
		<>
			<div className="top-MovieIntro">
			 	<div className="top-MovieIntro__heading">
					<Heading>ムービー</Heading>
				</div>
				<MovieFrame>
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/e56HFTK1KS8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</MovieFrame>
			 	<div className="top__viewMore">
					<ViewMore link={`/movie`}>ムービーページはこちら</ViewMore>
			 	</div>
		 </div>
		</>
	);
}