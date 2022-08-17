import { FC, memo, ReactNode } from "react";

import "../../styles/modules/heading.scss";

type Props = {
  children: ReactNode;
};

export const Heading: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <div className="Heading-wrap" id="HeadingBox">
      <div className="HeadingBlackRect bk__top-left"></div>
      <div className="HeadingBlackRect bk__top-rigt"></div>
      <div className="HeadingBlackRect bk__btm-left"></div>
      <div className="HeadingBlackRect bk__btm-rigt"></div>
      <div className="HeadingText">{children}</div>
    </div>
  );
});
