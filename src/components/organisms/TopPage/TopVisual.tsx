import { CountDown } from "../../molecules/CountDown";

export const TopVisual = () => {
	return (
		<section className="MainVisual">
			<div className="MainVisual-img">
				<div className="MainVisual-img-wrap">
					<img src={`${process.env.PUBLIC_URL}/images/top/topVisual.png`} alt="" />
				</div>
				<div className="MainVisual-count">
					<CountDown />
				</div>
			</div>
			<div className="MainVisual-info">
				<p className="flow-text">部署登録は6月29日(水)まで！！！！</p>
			</div>
		</section>
	);
}