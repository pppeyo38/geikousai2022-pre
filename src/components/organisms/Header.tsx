import { memo } from "react";

import "../../styles/base/header.scss";

export const Header = memo(() => {
	return (
		<>
			<header>
				<div className="Header-wrap">
					<a className="Header-logo-wrap">
						<img className="Header-logo" src={`${process.env.PUBLIC_URL}/icons/HeaderLogo.svg`} alt="芸工祭ロゴ画像"/>
						<img className="Header-title" src={`${process.env.PUBLIC_URL}/icons/HeaderTitle.svg`} alt="芸工祭タイトル画像"/>
					</a>
					<div className="Header-menu-icon">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
			<div className="Menu-Drawer-wrap">
				<ul>
					<li>
						<h3>TOP</h3>
						<p>トップ</p>
					</li>
					<li>
						<h3>DEPARTMENTS</h3>
						<p>部署紹介</p>
					</li>
					<li>
						<h3>CHART</h3>
						<p>適部署チャート</p>
					</li>
					<li>
						<h3>MOVIE</h3>
						<p>ムービー</p>
					</li>
					<li>
						<h3>GAME</h3>
						<p>ゲーム</p>
					</li>
				</ul>
			</div>
		</>
	);
})