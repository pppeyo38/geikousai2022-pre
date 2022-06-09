import { HeadingMovie } from "../atoms/HeadingMovie";

import "../../styles/movie.scss";

export const MoviePage = () => {
	return (
		<>
			<div className="p-movie">
				<div className="p-movie__heading">
					<h1 className="p-movie__title">MOVIE</h1>
					<p className="p-movie__subtitle">ムービー</p>
				</div>
				<h3 className="p-movie__about">
					映像部署が制作したムービーです。
				</h3>

				<div className="p-movie__concept">
					<HeadingMovie>コンセプトムービー</HeadingMovie>
					<div className="p-movie__concept-inner"></div>
				</div>

				<div className="p-movie__busyocho">
					<HeadingMovie>部署長紹介</HeadingMovie>
					<div className="p-movie__busyocho-inner"></div>
				</div>
			</div>
		</>
	);
}