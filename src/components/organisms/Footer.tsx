import { SnsIcons } from "../atoms/SnsIcons";

import "../../styles/base/footer.scss";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__sns">
          <h3>公式SNS</h3>
          <SnsIcons />
        </div>
        <div className="footer__copyright">
          <div className="footer__copyright-logo">
            <img
              src={`${process.env.PUBLIC_URL}/icons/geikosai-logo.png`}
              alt="芸工祭アイコン"
              style={{ width: "109px", height: "98px" }}
            />
          </div>
          <p>@2022 GEIKO SAI</p>
        </div>
      </footer>
    </>
  );
};
