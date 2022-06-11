import { memo, useState } from "react";
import { Tabs, TabPanel, TabPanels } from "@chakra-ui/react";

import contents from "../../../data/departments.json";
import kanbu from "../../../data/depaImages/kanbu.json";
import busyocho from "../../../data/depaImages/busyocho.json";

export const DepaPanel = memo(() => {
	const [tabIndex, setTabIndex] = useState(0);
	const content: {job: string, name: string, greet: string, image: string, icon: string}[] = contents.departments;
	const kanbuImg: {id: number, image: string}[] = kanbu.kanbu;
	const busyochoImg: {id: number, image: string}[] = busyocho.busyocho;

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
	// 下の写真クリックしたときにフォーカス人物を変える
	const handlePanelChange = (index: number) => {
		setTabIndex(index);
	}

	return (
		<>
			<Tabs defaultIndex={tabIndex} index={tabIndex} className="p-depa__panel">
				<div className="p-depa__display">
					<div className="p-depa__panel-wrap">
						<button className="p-depa__panel-arrow-back"  onClick={handleChangeBack}>
							<img src={`${process.env.PUBLIC_URL}/icons/depa_back.svg`} alt="戻る" />
						</button>
						<TabPanels className="p-depa__panel-image-wrap" style={{ width: '310px' }}>
							{content.map((department, index) => {
								return (
									<TabPanel tabIndex={index} key={index} style={{ padding: '0', display: 'flex', justifyContent: 'center' }}>
										<img className="p-depa__panel-image" src={`${process.env.PUBLIC_URL}/images/busyotyo_full/${department.image}`} alt="" style={{ maxWidth: '115%' }} />
										<span className="p-depa__panel-image-drop"></span>
									</TabPanel>
								);
							})}
						</TabPanels>
						<button className="p-depa__panel-arrow-next" onClick={handleChangeNext}>
							<img src={`${process.env.PUBLIC_URL}/icons/depa_next.svg`} alt="次へ" />
						</button>
						{/* <div className="p-depa__panel-chartLink"> */}
							<a href="/chart" className="p-depa__panel-chartLink">
								悩んでいるキミに適部署チャート！
							</a>
						{/* </div> */}
					</div>

					<TabPanels>
						{content.map((department, index) => {
							return (
								<TabPanel tabIndex={index} key={index}>
									<div className="p-depa__content">
										<div className="p-depa__content-intro">
											<div className="p-depa__content-intro-logo">
												<img src={`${process.env.PUBLIC_URL}/icons/departments/${department.icon}`} alt="芸工祭長ロゴ" width='66px' height='66px' />
											</div>
											<div className="p-depa__content-intro-name">
												<h3>{department.job}</h3>
												<p>{department.name}</p>
											</div>
										</div>
										<div className="p-depa__content-greet">
											<p>{department.greet}</p>
										</div>
									</div>
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
										<img src={`${process.env.PUBLIC_URL}/images/departments/${kanbu.image}`} style={{ filter : tabIndex == kanbu.id ? 'grayscale(0%)': 'grayscale(100%)', width : '61px', height : '109px' }}/>
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
									<li onClick={() => handlePanelChange(busyocho.id)} key={index}>
										<img src={`${process.env.PUBLIC_URL}/images/departments/${busyocho.image}`} style={{ filter : tabIndex == busyocho.id ? 'grayscale(0%)': 'grayscale(100%)', width : '61px', height : '109px' }}/>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

			</Tabs>
		</>
	);
})