import { memo, useState } from "react";
import { Tabs, TabPanel, TabPanels } from "@chakra-ui/react";

import contents from "../../../data/departments.json";

export const DepaPanel = memo(() => {
	const [tabIndex, setTabIndex] = useState(0);
	const content: {job: string, name: string, greet: string, image: string, icon: string}[] = contents.departments;

	// 矢印で戻るとき
	const handleChangeBack = () => {
		if (tabIndex === 0){
			setTabIndex(content.length - 1);
		} else {
			setTabIndex(tabIndex - 1);
		}
  };
	// 矢印で進むとき
	const handleChangeNext = () => {
    if (tabIndex === content.length - 1){
			setTabIndex(0);
		} else {
			setTabIndex(tabIndex + 1);
		}
  };

	return (
		<>
			<Tabs defaultIndex={tabIndex} index={tabIndex}>
				<div className="p-depa__panel-wrap">
					<button className="p-depa__panel-arrow-back"  onClick={handleChangeBack}>
						<img src={`${process.env.PUBLIC_URL}/icons/depa_back.svg`} alt="戻る" />
					</button>
					<TabPanels>
						{content.map((department, index) => {
							return (
								<TabPanel tabIndex={index} key={index}>
									<img src={`${process.env.PUBLIC_URL}/images/busyotyo_full/${department.image}`} alt=""/>
								</TabPanel>
							);
						})}
					</TabPanels>
					<button className="p-depa__panel-arrow-next" onClick={handleChangeNext}>
						<img src={`${process.env.PUBLIC_URL}/icons/depa_next.svg`} alt="次へ" />
					</button>
				</div>

				<TabPanels>
					{content.map((department, index) => {
        		return (
							<TabPanel tabIndex={index} key={index}>
								<div className="top-DepaIntro__content-saicho-about">
									<div className="top-DepaIntro__content-saicho-logo-wrap">
										<img src={`${process.env.PUBLIC_URL}/icons/departments/${department.icon}`} alt="芸工祭長ロゴ" width='66px' height='66px' />
									</div>
									<div className="top-DepaIntro__content-saicho-text">
										<div className="top-DepaIntro__content-saicho-name">
											<h3>{department.job}</h3>
											<p>{department.name}</p>
										</div>
										<div className="top-DepaIntro__content-saicho-greeting">
											<p>{department.greet}</p>
										</div>
									</div>
								</div>
							</TabPanel>
						);
					})}
				</TabPanels>

				{/* <ul>
					<li
						onClick={() => handlePanelChange(0)}
					>
						<img src={`${process.env.PUBLIC_URL}/images/department/20.png`} style={{ filter : tabIndex == 0 ? 'grayscale(0%)': 'grayscale(100%)', width : '61px', height : '109px' }}/>
					</li>
					<li
						onClick={() => handlePanelChange(1)}
					>
						<img src={`${process.env.PUBLIC_URL}/images/department/20.png`} style={{ filter : tabIndex == 1 ? 'grayscale(0%)': 'grayscale(100%)', width : '61px', height : '109px' }}/>
					</li>
				</ul> */}
			</Tabs>
		</>
	);
})