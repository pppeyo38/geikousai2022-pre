import { Heading } from "../../atoms/Heading";
import { ViewMore } from "../../atoms/ViewMore";

export const TopDepa = () => {
	return (
		<>
		 <div className="top-DepaIntro">
			 <div className="top-DepaIntro__heading">
				<Heading>部署紹介</Heading>
			 </div>
			 <div className="top-DepaIntro__content">
				 <p>紹介が入るよ</p>
			 </div>
			 <div className="top__viewMore">
				<ViewMore link={`/departments`}>部署紹介ページはこちら</ViewMore>
			 </div>
		 </div>
		</>
	);
}