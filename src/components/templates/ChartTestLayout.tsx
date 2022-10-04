import { useState } from 'react'

import { StartDisplay } from '@/components/organisms/Chart/StartDisplay'
import { QuestionDisplay } from '@/components/organisms/Chart/QuestionDisplay'
import { AnswerDisplay } from '@/components/organisms/Chart/AnswerDisplay'

export const ChartTestLayout = () => {
  const [isStart, setIsStart] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const resultReset = () => {
    setIsStart(false)
    setIsCompleted(false)
  }

  return (
    <>
      {!isStart ? (
        <StartDisplay setIsStart={setIsStart} />
      ) : (
        <>
          {!isCompleted ? (
            <QuestionDisplay setIsCompleted={setIsCompleted} />
          ) : (
            <AnswerDisplay resultReset={resultReset} />
          )}
        </>
      )}
    </>
  )
}
