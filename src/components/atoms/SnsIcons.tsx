export const SnsIcons = () => {
  return (
    <div className="footer__sns-wrap">
      <a href="https://www.instagram.com/geiko.fes_2022/">
        <img
          src={`${process.env.PUBLIC_URL}/icons/footer/ft_Instagram.svg`}
          alt="Instagramアイコン"
        />
      </a>
      <a href="https://twitter.com/geik0" className="">
        <img
          src={`${process.env.PUBLIC_URL}/icons/footer/ft_twitter.svg`}
          alt="Twitterアイコン"
        />
      </a>
      <a href="https://lin.ee/W28H8q6" className="">
        <img
          src={`${process.env.PUBLIC_URL}/icons/footer/ft_LINE.svg`}
          alt="LINEアイコン"
        />
      </a>
    </div>
  );
};
