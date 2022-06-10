import { Heading } from "../../atoms/Heading";
import { ViewMore } from "../../atoms/ViewMore";

export const TopDepa = () => {
	return (
		<>
		 <div className="top-DepaIntro">
			 <div className="top-DepaIntro__heading">
				<Heading>部署紹介</Heading>
			 </div>
			 <div className="top-DepaIntro__content">
				<div className="top-DepaIntro__content-saicho">
					<img src={`${process.env.PUBLIC_URL}/images/top/saicho.png`} alt="" />
					<div className="top-DepaIntro__content-saicho-about">
						<div className="top-DepaIntro__content-saicho-logo-wrap">
							<img src={`${process.env.PUBLIC_URL}/icons/departments/01chief.png`} alt="芸工祭長ロゴ" width='66px' height='66px' />
						</div>
						<div className="top-DepaIntro__content-saicho-text">
							<div className="top-DepaIntro__content-saicho-name">
								<h3>芸工祭長</h3>
								<p>3N 花天狂骨</p>
							</div>
							<div className="top-DepaIntro__content-saicho-greeting">
								<p>
									芸工祭全体の統括をしてるよ！
									今年の芸工祭は例年に比べて自分の案が通りやすいかも…？！
									学年とか気にせずドシドシ意見出してみんなで盛り上げていこう💪
									いろんな部署にいるから会いにきてね❤️❤️❤️
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="top-DepaIntro__content-saicho">
					<img src={`${process.env.PUBLIC_URL}/images/top/fuku-saicho.png`} alt="" />
					<div className="top-DepaIntro__content-saicho-about">
						<div className="top-DepaIntro__content-saicho-logo-wrap">
							<img src={`${process.env.PUBLIC_URL}/icons/departments/02chief_sub.png`} alt="芸工祭長ロゴ" width='66px' height='66px' />
						</div>
						<div className="top-DepaIntro__content-saicho-text">
							<div className="top-DepaIntro__content-saicho-name">
								<h3>副芸工祭長</h3>
								<p>3N おくたん</p>
							</div>
							<div className="top-DepaIntro__content-saicho-greeting">
								<p>
									主に祭長のサポートしてます！インテリア、ディレクションにも入っているので
									一緒に活動して楽しい芸工祭にしましょう！
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			 <div className="top__viewMore">
				<ViewMore link={`/departments`}>部署紹介ページはこちら</ViewMore>
			 </div>
		 </div>
		</>
	);
}