import { memo, useEffect } from "react";
import { HeadingMovie } from "../atoms/HeadingMovie";
import { MovieFrame } from "../atoms/MovieFrame";

import "../../styles/movie.scss";

export const MoviePage = memo(() => {

	useEffect(() => {
		window.scrollTo(0, 0)
	}, []);

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
					<MovieFrame>
						<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Md_DxUNp4sM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</MovieFrame>
				</div>

				<div className="p-movie__busyocho">
					<HeadingMovie>部署長紹介</HeadingMovie>
					<MovieFrame>
						<iframe width="100%" height="100%" src="https://www.youtube.com/embed/e56HFTK1KS8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</MovieFrame>
				</div>
			</div>
		</>
	);
})