import { memo, useState } from "react";
import { Tabs, TabPanel, TabPanels, TabList, Tab } from "@chakra-ui/react";

export const DepaPanel = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [activeIndex, setActiveIndex] = useState(tabIndex);

	// 矢印で戻るとき
	const handleChangeBack = () => {
		if (tabIndex === 0){
			setTabIndex(1);
		} else {
			setTabIndex(tabIndex - 1);
		}
  };
	// 矢印で進むとき
	const handleChangeNext = () => {
    if (tabIndex === 1){
			setTabIndex(0);
		} else {
			setTabIndex(tabIndex + 1);
		}
  };

	const handlePanelChange = (index: number) => {
		setTabIndex(index);
	}

	// const handlePanelChange = (
	// 	event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	// ): void => {
	// 	setTabIndex(parseInt(event.target.value));
	// };

	return (
		<>
			<Tabs defaultIndex={tabIndex} index={tabIndex}>
				<div className="p-depa__panel-wrap">
					<button className="p-depa__panel-arrow-back"  onClick={handleChangeBack}>
						<img src={`${process.env.PUBLIC_URL}/icons/depa_back.svg`} alt="戻る" />
					</button>
					<TabPanels>
						<TabPanel>
							芸工祭長の写真
						</TabPanel>
						<TabPanel>
							副芸工祭長の写真
						</TabPanel>
					</TabPanels>
					<button className="p-depa__panel-arrow-next" onClick={handleChangeNext}>
						<img src={`${process.env.PUBLIC_URL}/icons/depa_next.svg`} alt="次へ" />
					</button>
				</div>

				<TabPanels>
					<TabPanel>芸工祭長について〜〜〜</TabPanel>
					<TabPanel>副芸工祭長について〜〜〜</TabPanel>
				</TabPanels>

				{/* <TabList style={{ border: 'none' }}>
					<Tab><img src={`${process.env.PUBLIC_URL}/images/department/saicho.svg`} /></Tab>
					<Tab><img src={`${process.env.PUBLIC_URL}/images/department/saicho.svg`} /></Tab>
				</TabList> */}

				<ul>
					<li
						onClick={() => handlePanelChange(0)}
						style={{ backgroundColor : tabIndex == 0 ? 'red': '' }}
					>
						<img src={`${process.env.PUBLIC_URL}/images/department/saicho.svg`} />
					</li>
					<li
						onClick={() => handlePanelChange(1)}
						style={{ backgroundColor : tabIndex == 1 ? 'red': '' }}
					>
						<img src={`${process.env.PUBLIC_URL}/images/department/saicho.svg`} />
					</li>
				</ul>
			</Tabs>
		</>
	);
}