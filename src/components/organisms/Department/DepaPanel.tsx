import { memo, useState } from "react";
import { Tabs, TabPanel, TabPanels } from "@chakra-ui/react";
import Link from "next/link";

import { DepaTabPanels } from "../../molecules/DepaTabPanels";
import contents from "../../../data/departments.json";
import kanbu from "../../../data/depaImages/kanbu.json";
import busyocho from "../../../data/depaImages/busyocho.json";

export const DepaPanel = memo(() => {
  const [tabIndex, setTabIndex] = useState(0);
  const [whichSlide, setWhichSlide] = useState("next"); // true: Next false: back
  const content: {
    job: string;
    name: string;
    greet: string;
    image: string;
    icon: string;
  }[] = contents.departments;
  const kanbuImg: { id: number; image: string }[] = kanbu.kanbu;
  const busyochoImg: { id: number; image: string }[] = busyocho.busyocho;

  // 矢印で戻るとき
  const handleChangeBack = () => {
    if (tabIndex === 0) {
      setTabIndex(content.length - 1);
    } else {
      setTabIndex(tabIndex - 1);
    }
    setWhichSlide("back");
  };
  // 矢印で進むとき
  const handleChangeNext = () => {
    if (tabIndex === content.length - 1) {
      setTabIndex(0);
    } else {
      setTabIndex(tabIndex + 1);
    }
    setWhichSlide("next");
  };
  // 下の写真クリックしたときにフォーカス人物を変える
  const handlePanelChange = (index: number) => {
    setTabIndex(index);
    setWhichSlide("next");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Tabs defaultIndex={tabIndex} index={tabIndex} className="p-depa__panel">
        <div className="p-depa__display">
          <div className="p-depa__panel-wrap">
            <button
              className="p-depa__panel-arrow-back"
              onClick={handleChangeBack}
            >
              <img
                src={`${process.env.PUBLIC_URL}/icons/depa_back.svg`}
                alt="戻る"
              />
            </button>
            <TabPanels
              className="p-depa__panel-image-wrap"
              style={{ width: "310px" }}
            >
              {content.map((department, index) => {
                return (
                  <TabPanel
                    tabIndex={index}
                    key={index}
                    style={{
                      padding: "0",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      className={`p-depa__panel-image-${whichSlide}`}
                      src={`${process.env.PUBLIC_URL}/images/busyotyo_full/${department.image}`}
                      alt=""
                      style={{ maxWidth: "115%" }}
                    />
                  </TabPanel>
                );
              })}
            </TabPanels>
            <button
              className="p-depa__panel-arrow-next"
              onClick={handleChangeNext}
            >
              <img
                src={`${process.env.PUBLIC_URL}/icons/depa_next.svg`}
                alt="次へ"
              />
            </button>
            <Link href="/chart" className="p-depa__panel-chartLink">
              悩んでいるキミに適部署チャート！
            </Link>
          </div>

          <TabPanels>
            {content.map((department, index) => {
              return (
                <TabPanel
                  tabIndex={index}
                  key={index}
                  style={{ padding: "0px" }}
                >
                  <DepaTabPanels
                    Icon={department.icon}
                    Job={department.job}
                    GeikoName={department.name}
                    Greet={department.greet}
                  />
                </TabPanel>
              );
            })}
          </TabPanels>
        </div>

        <div className="p-depa__handleImg">
          <div className="p-depa__handleImg-kanbu">
            <div className="p-depa__handleImg-kanbu-heading">
              <h3>KANBU</h3>
              <p>幹部</p>
            </div>
            <ul className="p-depa__handleImg-wrap">
              {kanbuImg.map((kanbu, index) => {
                return (
                  <li onClick={() => handlePanelChange(kanbu.id)} key={index}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/departments/${kanbu.image}`}
                      style={{
                        filter:
                          tabIndex == kanbu.id
                            ? "grayscale(0%)"
                            : "grayscale(100%)",
                        width: "59px",
                        height: "115px",
                        objectFit: "cover",
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="p-depa__handleImg-busyocho">
            <div className="p-depa__handleImg-busyocho-heading">
              <h3>BUSYOCHO</h3>
              <p>部署長</p>
            </div>
            <ul className="p-depa__handleImg-wrap">
              {busyochoImg.map((busyocho, index) => {
                return (
                  <li
                    onClick={() => handlePanelChange(busyocho.id)}
                    key={index}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/departments/${busyocho.image}`}
                      style={{
                        filter:
                          tabIndex == busyocho.id
                            ? "grayscale(0%)"
                            : "grayscale(100%)",
                        width: "59px",
                        height: "115px",
                        objectFit: "cover",
                      }}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Tabs>
    </>
  );
});
