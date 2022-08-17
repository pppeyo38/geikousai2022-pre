import { FC, memo, ReactNode } from "react";

import "../../styles/modules/heading.scss";

type Props = {
  children: ReactNode;
};

export const HeadingMovie: FC<Props> = memo((props) => {
  const { children } = props;

  return (
    <div className="HeadingMovie-wrap" id="HeadingMovieBox">
      <div className="HeadingMovieBlackRect mv__top-left"></div>
      <div className="HeadingMovieBlackRect mv__top-rigt"></div>
      <div className="HeadingMovieBlackRect mv__btm-left"></div>
      <div className="HeadingMovieBlackRect mv__btm-rigt"></div>
      <div className="HeadingMovieText">{children}</div>
    </div>
  );
});
