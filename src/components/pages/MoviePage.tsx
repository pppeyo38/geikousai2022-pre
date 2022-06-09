import { Heading } from "../atoms/Heading";

import "../../styles/movie.scss";

export const MoviePage = () => {
	return (
		<>
			<div className="p-movie">
				<div className="p-movie__heading">
					<h1 className="p-movie__title">MOVIE</h1>
					<p className="p-movie__subtitle">ムービー</p>
				</div>
				<h3 className="p-moive__about">
					映像部署が制作したムービーです。
				</h3>

				<div className="p-movie__concept-wrap">
					<Heading>コンセプトムービー</Heading>
				</div>
			</div>
		</>
	);
}