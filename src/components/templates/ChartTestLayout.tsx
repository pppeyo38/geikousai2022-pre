import { useChartFlow } from '@/hooks/useChartFlow'
import { StartDisplay } from '@/components/organisms/Chart/StartDisplay'
import { QuestionDisplay } from '@/components/organisms/Chart/QuestionDisplay'
import { ResultDisplay } from '@/components/organisms/Chart/ResultDisplay'

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
            <ResultDisplay result={result} chartReset={chartReset} />
          )}
        </>
      )}
    </>
  )
}
