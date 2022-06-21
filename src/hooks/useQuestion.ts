import { useState } from "react";

export const useQuestion = () => {
	const [ questionId, setQuestionId ] = useState(1);
	const [ answerId, setAnswerId ] = useState(100);

	const change = (YesOrNo: boolean) => {
		if (YesOrNo) {
			switch(questionId){
				case 1:
					setQuestionId(2);
					break;
				case 2:
					setQuestionId(100);
					setAnswerId(109);
					break;
				case 3:
					setQuestionId(100);
					setAnswerId(113);
					break;
				case 4:
					setQuestionId(100);
					setAnswerId(104);
					break;
				case 5:
					setQuestionId(100);
					setAnswerId(108);
					break;
				case 6:
					setQuestionId(8);
					break;
				case 7:
					setQuestionId(100);
					setAnswerId(106);
					break;
				case 8:
					setQuestionId(13);
					break;
				case 9:
					setQuestionId(100);
					setAnswerId(107);
					break;
				case 10:
					setQuestionId(100);
					setAnswerId(105);
					break;
				case 11:
					setQuestionId(100);
					setAnswerId(110);
					break;
				case 12:
					setQuestionId(11);
					break;
				case 13:
					setQuestionId(100);
					setAnswerId(101);
					break;
				case 14:
					setQuestionId(100);
					setAnswerId(102);
					break;
				case 15:
					setQuestionId(100);
					setAnswerId(111);
					break;
				case 16:
					setQuestionId(100);
					setAnswerId(112);
					break;
			}
		} else {
			switch(questionId){
				case 1:
					setQuestionId(6);
					break;
				case 2:
					setQuestionId(3);
					break;
				case 3:
					setQuestionId(5);
					break;
				case 4:
					setQuestionId(14);
					break;
				case 5:
					setQuestionId(8);
					break;
				case 6:
					setQuestionId(7);
					break;
				case 7:
					setQuestionId(9);
					break;
				case 8:
					setQuestionId(12);
					break;
				case 9:
					setQuestionId(10);
					break;
				case 10:
					setQuestionId(4);
					break;
				case 11:
					setQuestionId(10);
					break;
				case 12:
					setQuestionId(16);
					break;
				case 13:
					setQuestionId(15);
					break;
				case 14:
					setQuestionId(13);
					break;
				case 15:
					setQuestionId(100);
					setAnswerId(103);
					break;
				case 16:
					setQuestionId(14);
					break;
			}
		}
	};
	return {change, questionId, setQuestionId, answerId, setAnswerId};
}