import { memo, useState } from "react";
import { Fade, useDisclosure } from "@chakra-ui/react";
import Hamburger from 'hamburger-react';

import { SnsIcons } from "../atoms/SnsIcons";

import "../../styles/base/header.scss";

export const Header = memo(() => {
	const { isOpen, onToggle } = useDisclosure();
	const [ booOpen, setOpen ] = useState(false)

	return (
		<>
			<header>
				<div className="Header-wrap">
					<a className="Header-logo-wrap" href="/">
						<img className="Header-logo" src={`${process.env.PUBLIC_URL}/icons/HeaderLogo.svg`} alt="芸工祭ロゴ画像"/>
						<img className="Header-title" src={`${process.env.PUBLIC_URL}/icons/HeaderTitle.svg`} alt="芸工祭タイトル画像"/>
					</a>
					<div className="nav__overlay-close-icon-wrap" onClick={onToggle}>
						<Hamburger
							size={22}
							toggled={booOpen}
							toggle={setOpen}
						/>
					</div>
					<Fade in={isOpen} className="nav__overlay" style={{ pointerEvents: isOpen ? 'auto': 'none' }}>
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