import { CountDown } from "../../molecules/CountDown";

export const TopVisual = () => {
	return (
		<section className="MainVisual">
			<div className="MainVisual-img">
				<h4>メインビジュアルが入るよ</h4>
				<div className="MainVisual-count">
					<CountDown />
				</div>
			</div>
			<div className="MainVisual-info">
				<p className="flow-text">部署登録は○月○日まで！！！！</p>
			</div>
		</section>
	);
}