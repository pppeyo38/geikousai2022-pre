import styled from '@emotion/styled'
import { useChartFlow } from '@/hooks/useChartFlow'
import { StartDisplay } from '@/components/organisms/Chart/StartDisplay'
import { QuestionDisplay } from '@/components/organisms/Chart/QuestionDisplay'
import { ResultDisplay } from '@/components/organisms/Chart/ResultDisplay'
import { fadeIn } from '@/styles/animation/fadeKeyframes'

export const ChartTestLayout = () => {
  const {
    isStart,
    setIsStart,
    question,
    result,
    isCompleted,
    chartReset,
    switchChartContent,
  } = useChartFlow()

  return (
    <>
      {!isStart ? (
        <StartDisplay setIsStart={setIsStart} />
      ) : (
        <_ContentWrap>
          {!isCompleted ? (
            <QuestionDisplay
              questionText={question.text}
              switchChartContent={switchChartContent}
            />
          ) : (
            <ResultDisplay result={result} chartReset={chartReset} />
          )}
        </_ContentWrap>
      )}
    </>
  )
}

const _ContentWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-image: linear-gradient(
    rgb(13, 46, 79) 0%,
    rgb(13, 46, 79) 50%,
    rgb(153, 201, 85) 50%,
    rgb(48, 137, 94) 100%
  );
  animation: 2s ${fadeIn} forwards;
`
