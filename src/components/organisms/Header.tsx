import { memo, useState } from "react";
import { Fade, useDisclosure } from "@chakra-ui/react";
import Hamburger from 'hamburger-react';

import { SnsIcons } from "../atoms/SnsIcons";

import "../../styles/base/header.scss";
import { Link } from "react-router-dom";

export const Header = memo(() => {
	const { isOpen, onToggle } = useDisclosure();
	const [ booOpen, setOpen ] = useState(false);

	const hiddenNav = () => {
		setOpen(!booOpen);
		onToggle();
	}

	return (
		<>
			<header>
				<div className="Header-wrap">
					<Link className="Header-logo-wrap" to="/">
						<img className="Header-logo" src={`${process.env.PUBLIC_URL}/icons/geikosai-logo.png`} alt="芸工祭ロゴ画像" width="47px" height="43px" />
						<img className="Header-title" src={`${process.env.PUBLIC_URL}/icons/HeaderTitle.svg`} alt="芸工祭"/>
					</Link>
					<div className="nav__overlay-close-icon-wrap" onClick={onToggle}>
						<Hamburger
							size={22}
							toggled={booOpen}
							toggle={setOpen}
						/>
					</div>
					<Fade in={isOpen} className="nav__overlay" style={{ pointerEvents: isOpen ? 'auto': 'none' }}>
						<ul className="nav__overlay-menuList" onClick={hiddenNav}>
							<li>
								<Link to={`${process.env.PUBLIC_URL}/`}>
									<h3>TOP</h3>
									<p>トップ</p>
								</Link>
							</li>
							<li>
								<Link to={`${process.env.PUBLIC_URL}/departments`}>
									<h3>DEPARTMENTS</h3>
									<p>部署紹介</p>
								</Link>
							</li>
							<li>
								<Link to={`${process.env.PUBLIC_URL}/chart`}>
									<h3>CHART</h3>
									<p>チャート</p>
								</Link>
							</li>
							<li>
								<Link to={`${process.env.PUBLIC_URL}/movie`}>
									<h3>MOVIE</h3>
									<p>ムービー</p>
								</Link>
							</li>
							<li>
								<Link to={`${process.env.PUBLIC_URL}/game`}>
									<h3>GAME</h3>
									<p>ゲーム</p>
								</Link>
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