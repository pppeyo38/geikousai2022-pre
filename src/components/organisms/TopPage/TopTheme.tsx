export const TopTheme = () => {
	return (
		<>
			<div className="top-theme">
				<div className="top-theme__heading">
					<h1 className="top-theme__title">THEME</h1>
					<p className="top-theme__subtitle">今年のテーマ</p>
				</div>
				<div className="top-theme__movie" id="box01">
						<div className="rect top-left"></div><div className="rect top-rigt"></div><div className="rect btm-left"></div><div className="rect btm-rigt"></div>
						<div className="top-theme__movie-box">
							動画が入るよ
						</div>
				</div>
				<div className="top-theme__caption">
					<div className="top-theme__caption-inner">
						<div className="top-theme__caption-bg">
							<img src={`${process.env.PUBLIC_URL}/images/top/themeBg.jpg`} alt="芸工祭2022テーマ" />
						</div>
						<div className="top-theme__caption-content-wrap">
							<div className="top-theme__caption-title">
								<h1>と前に進み続ける</h1>
							</div>
							<div className="top-theme__caption-text">
								<p>
									コロナ収束の目処が立たず、新しい人との繋がり、新しいことへの挑戦など、何かを始めることが難しい現代。そんな中でも私たちは前に進んでいかなければならない。ただ前に進む(Go on)のではなく、こんな時代でも私たちはぐーんと前に突き進み続けるという意味を込めてGOOOON(グーン)というテーマを設定しました。
									<span></span>
									人生という舞台は1人では作ることが出来ず、多くの人との関わりによって完成します。GOOOONの４つのOはRPGのパーティのように産業、情報、建築、そして来場者の繋がりを表しています。今回の芸工祭では様々な個性を持つ人々が新たに出会うことでみんなが前にGOOOONと進むことができるようになることを目指します。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}