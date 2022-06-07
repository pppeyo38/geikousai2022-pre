import { Heading } from "../../atoms/Heading";
import { ViewMore } from "../../atoms/ViewMore";

export const TopGame = () => {
	return (
		<>
			<div className="top-MiniGame">
			 	<div className="top-MiniGame__heading">
					<Heading>ミニゲーム</Heading>
			 	</div>
				<div className="top-MiniGame__thumbnail"></div>
			 	<div className="top-MiniGame__introduction">
					<p>
					 どんなゲームか、くらいの軽い説明　てきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすと
					</p>
			 </div>
			 <ViewMore link={`/game`} />
		 </div>
		</>
	);
}