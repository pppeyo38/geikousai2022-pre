import { memo } from "react";
import { Fade, useDisclosure } from "@chakra-ui/react";
import { animated } from "react-spring";

// import Burger from "@animated-burgers/burger-squeeze";
// import '@animated-burgers/burger-squeeze/dist/styles.css';

import { SnsIcons } from "../atoms/SnsIcons";

import "../../styles/base/header.scss";

export const Header = memo(() => {
	const { isOpen, onToggle } = useDisclosure();



	return (
		<>
			<header>
				<div className="Header-wrap">
					<a className="Header-logo-wrap" href="/">
						<img className="Header-logo" src={`${process.env.PUBLIC_URL}/icons/HeaderLogo.svg`} alt="芸工祭ロゴ画像"/>
						<img className="Header-title" src={`${process.env.PUBLIC_URL}/icons/HeaderTitle.svg`} alt="芸工祭タイトル画像"/>
					</a>
					{/* <animated.div className="Header-menu-icon" onClick={onToggle} style={}>
						<span></span>
					</animated.div> */}
					<div className="burger burger-squeeze">
  					<div className="burger-lines"></div>
					</div>
					<Fade in={isOpen} className="nav__overlay">
						{/* <div className="nav__overlay-close-icon">
							<div className="nav__overlay-close-icon-wrap" onClick={onToggle}>
								<span></span>
							</div>
						</div> */}
						<ul className="nav__overlay-menuList">
							<li>
								<a href="/">
									<h3>TOP</h3>
									<p>トップ</p>
								</a>
							</li>
							<li>
								<a href="/departments">
									<h3>DEPARTMENTS</h3>
									<p>部署紹介</p>
								</a>
							</li>
							<li>
								<a href="/chart">
									<h3>CHART</h3>
									<p>チャート</p>
								</a>
							</li>
							<li>
								<a href="/movie">
									<h3>MOVIE</h3>
									<p>ムービー</p>
								</a>
							</li>
							<li>
								<a href="/game">
									<h3>GAME</h3>
									<p>ゲーム</p>
								</a>
							</li>
						</ul>
						<div className="nav__overlay-sns-wrap">
							<SnsIcons />
						</div>
					</Fade>
				</div>
			</header>
		</>
	);
})