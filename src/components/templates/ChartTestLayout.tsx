import { useChartFlow } from '@/hooks/useChartFlow'
import { StartDisplay } from '@/components/organisms/Chart/StartDisplay'
import { QuestionDisplay } from '@/components/organisms/Chart/QuestionDisplay'
import { AnswerDisplay } from '@/components/organisms/Chart/AnswerDisplay'

export const ChartTestLayout = () => {
  const {
    isStart,
    setIsStart,
    question,
    result,
    isCompleted,
    chartReset,
    onClickAnswer,
  } = useChartFlow()

  return (
    <>
      {!isStart ? (
        <StartDisplay setIsStart={setIsStart} />
      ) : (
        <>
          {!isCompleted ? (
            <QuestionDisplay
              questionText={question.text}
              onClickAnswer={onClickAnswer}
            />
          ) : (
            <AnswerDisplay result={result} chartReset={chartReset} />
          )}
        </>
      )}
    </>
  )
}
