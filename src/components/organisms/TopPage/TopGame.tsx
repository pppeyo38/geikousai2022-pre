import { Heading } from "../../atoms/Heading";
import { ViewMore } from "../../atoms/ViewMore";

export const TopGame = () => {
	return (
		<>
			<div className="top-MiniGame">
			 	<div className="top-MiniGame__heading">
					<Heading>ミニゲーム</Heading>
			 	</div>
				<div className="top-MiniGame__thumbnail">
					<img src={`${process.env.PUBLIC_URL}/images/top/game_thumbnail.jpg`} alt="" />
				</div>
			 	<div className="top-MiniGame__introduction">
					<p>
						スライムを引っ張って遠くまで飛ばそう！たくさん飛ばして目指せランカー！
					</p>
			 </div>
			 <div className="top__viewMore">
				<ViewMore link={`/game`}>ミニゲームをする</ViewMore>
			 </div>
		 </div>
		</>
	);
}