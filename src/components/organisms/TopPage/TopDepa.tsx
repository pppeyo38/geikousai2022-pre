import { Heading } from "../../atoms/Heading";
import { ViewMore } from "../../atoms/ViewMore";
import { DepaTabPanels } from "../../molecules/DepaTabPanels";

export const TopDepa = () => {
	return (
		<>
		 <div className="top-DepaIntro">
			 <div className="top-DepaIntro__heading">
				<Heading>部署紹介</Heading>
			 </div>
			 <div className="top-DepaIntro__content">
				<div className="top-DepaIntro__content-saicho">
					<img src={`${process.env.PUBLIC_URL}/images/busyotyo_full/saicho.png`} alt="" />
					<DepaTabPanels
						Icon={"01chief.png"}
						Job={"芸工祭長"}
						GeikoName={"3N 花天狂骨"}
						Greet={"芸工祭全体の統括をしてるよ！今年の芸工祭は例年に比べて自分の案が通りやすいかも…？！学年とか気にせずドシドシ意見出してみんなで盛り上げていこう💪いろんな部署にいるから会いにきてね❤️❤️❤️"}
					/>
				</div>

				<div className="top-DepaIntro__content-saicho">
					<img src={`${process.env.PUBLIC_URL}/images/busyotyo_full/fuku-saicho.png`} alt="" />
					<DepaTabPanels
						Icon={"02chief_sub.png"}
						Job={"副芸工祭長"}
						GeikoName={"3O オクタン"}
						Greet={"主に祭長のサポートしてます！インテリア、ディレクションにも入っているので一緒に活動して楽しい芸工祭にしましょう！"}
					/>
				</div>
			</div>
			 <div className="top__viewMore">
				<ViewMore link={`/departments`}>部署紹介ページはこちら</ViewMore>
				<ViewMore link={`/chart`}>適部署診断をする</ViewMore>
			 </div>
		 </div>
		</>
	);
}