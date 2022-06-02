import { memo, useEffect, useState } from "react";
import { Spinner, Center, Flex } from "@chakra-ui/react";

// チャートページに出力する質問テキストと答えを読み込み
import quetions from "../../data/question.json";
import answers from "../../data/chartAnswer.json";

import { useQuestion } from "../../hooks/useQuestion";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

import "../../styles/chart.scss";

export const ChartPage = memo(() => {
	// 画面の縦横を判定
	const { width, height } = useWindowDimensions();
	const [ loading, setLoading ] = useState(true);
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
	var answerImg: string = "";
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
				answerImg = answer.image;
			}
		});
	}

	// 2秒経ったらスピナーが消える
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	})

	return (
		<Flex
			w="100vw"
			h="100vh"
			bgColor="#0D2E4F"
		>
			{loading ? (
				<Center h="100%" w="100%">
					<Spinner
						thickness='5px'
						speed='0.65s'
						color="#DC4D40"
						emptyColor="rgba(220, 77, 64, 0.4)"
						size='xl'
					/>
				</Center>
			) : (
				width < height ? (
					isStart ? (
						(questionId !== 100) ? (
							<Flex
								justify="center"
								align="center"
								direction="column"
								w="100%"
								h="100%"
								bgGradient='linear(to-b, #0D2E4F 0%, #0D2E4F 50%, #99C955 50%, #30895E 100%)'
							>
								<div className="chart-test-question">
									<span></span>
									<h2>{questionText}</h2>
								</div>
								<div className="chart-test-buttons">
									<a className="chart-button-yes" onClick={onClickChangeYes}>
										<p>YES</p>
									</a>
									<a className="chart-button-no" onClick={onClickChangeNo}>
										<p>NO</p>
									</a>
								</div>
							</Flex>
						) : (
							<Flex
								justify="center"
								align="center"
								direction="column"
								w="100%"
								h="100%"
								bgGradient='linear(to-b, #0D2E4F 0%, #0D2E4F 50%, #99C955 50%, #30895E 100%)'
							>
								<div className="chart-test-answer-text">
									<p>{answerText}</p>
								</div>
								<div className="chart-test-answer">
									<img className="AnswerLogo" src={`${process.env.PUBLIC_URL}/icons/departments/${answerImg}`} alt="チャート結果ロゴ画像"/>
								</div>
								<div className="chart-result-buttons">
									<a className="chart-button-back" onClick={onClickReset}>
										<img className="AnswerLogo" src={`${process.env.PUBLIC_URL}/icons/back.svg`} alt="やり直しアイコン"/>
									</a>
									<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button chart-button-twitter" data-show-count="false">
										<img className="AnswerLogo" src={`${process.env.PUBLIC_URL}/icons/twitter.svg`} alt="ツイッター画像"/>
									</a>
									<script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
									<a className="chart-button-view" onClick={onClickChangeNo}>
										<p>VIEW<br/>MORE</p>
									</a>
								</div>
							</Flex>
						)
					) : (
						<Flex
							justify="center"
							align="center"
							direction="column"
							w="100%"
							h="100%"
							onClick={onClickStart}
						>
							<div className="chart-start-button">
								<p>CHART</p>
							</div>
							<h2 className="chart-start-text">TOUCH START</h2>
						</Flex>
					)
				) : (
					<p>画面を縦にしてね</p>
				)
			)}
		</Flex>
	);
});