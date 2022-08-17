import { memo, FC } from "react";

type Props = {
  Icon: string;
  Job: string;
  GeikoName: string;
  Greet: string;
};

export const DepaTabPanels: FC<Props> = memo((props) => {
  const { Icon, Job, GeikoName, Greet } = props;

  return (
    <>
      <div className="p-depa__content">
        <div className="p-depa__content-intro">
          <div className="p-depa__content-intro-logo">
            <img
              src={`${process.env.PUBLIC_URL}/icons/departments/${Icon}`}
              alt="芸工祭長ロゴ"
              width="66px"
              height="66px"
            />
          </div>
          <div className="p-depa__content-intro-name">
            <h3>{Job}</h3>
            <p>{GeikoName}</p>
          </div>
        </div>
        <div className="p-depa__content-greet">
          <p>{Greet}</p>
        </div>
      </div>
    </>
  );
});
