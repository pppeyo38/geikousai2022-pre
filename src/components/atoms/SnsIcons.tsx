export const SnsIcons = () => {
	return (
		<div className="footer__sns-wrap">
			<img src={`${process.env.PUBLIC_URL}/icons/footer/ft_Instagram.svg`} alt="Instagramアイコン" />
			<img src={`${process.env.PUBLIC_URL}/icons/footer/ft_twitter.svg`} alt="Twitterアイコン" />
			<img src={`${process.env.PUBLIC_URL}/icons/footer/ft_LINE.svg`} alt="LINEアイコン" />
		</div>
	);
}