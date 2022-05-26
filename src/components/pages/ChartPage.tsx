import { memo, useState } from "react";

// チャートページに出力する質問テキストと答えを読み込み
import quetions from "../../data/question.json";
import answers from "../../data/answer.json";

import { useQuestion } from "../../hooks/useQuestion";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import "../../styles/chart.scss";

export const ChartPage = memo(() => {
	// 画面の縦横を判定
	const { width, height } = useWindowDimensions();
	const [ isStart, setIsStart ] = useState(false);
	const onClickStart = () => setIsStart(true);
	const onClickReset = () => {
		setIsStart(false);
		setQuestionId(1);
		setAnswerId(100);
	}

	const { change, questionId, setQuestionId, answerId, setAnswerId } = useQuestion();
	const onClickChangeYes = () => change(true);
	const onClickChangeNo = () => change(false);

	const questionData = quetions.question;
	const answerData = answers.answer;

	var questionText: string = "";
	var answerText: string = "";
	if (questionId !== 100){
		questionData.map(question => {
			if (questionId === question.id){
				questionText = question.text;
			}
		});
	} else {
		answerData.map(answer => {
			if (answerId === answer.id){
				answerText = answer.busyo;
			}
		});
	}

	return (
		<>
			{width > height ? (
				isStart ? (
					(questionId !== 100) ? (
						<div className="chart-test-display">
							<div className="chart-test-content-wrap">
								<a className="chart-button-yes" onClick={onClickChangeYes}>
									<p>はい</p>
								</a>
								<div className="chart-test-question">
									<h2>{questionText}</h2>
								</div>
								<a className="chart-button-no" onClick={onClickChangeNo}>
									<p>いいえ</p>
								</a>
							</div>
						</div>
					) : (
						<div>
							<p>あなたの結果は{answerText}です</p>
							<button onClick={onClickReset}>はじめから</button>
						</div>
					)
				) : (
					<div className="chart-start-display">
						<div className="chart-start-button-wrap">
							<a className="chart-start-button" onClick={onClickStart}>
								<p>START</p>
							</a>
						</div>
					</div>
				)
			) : (
				<p>横にしてね</p>
			)}
		</>
	);
});