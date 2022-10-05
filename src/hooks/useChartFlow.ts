import { useState } from 'react'
import { questionType, resultType } from '@/types/chart'
import data from '@/data/chart/chart.json'

export const useChartFlow = () => {
  const [isStart, setIsStart] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [question, setQuestion] = useState({ id: 0, text: '目立ちたい？' })
  const [result, setResult] = useState({} as resultType)
  const questionData: questionType[] = data.questionData
  const resultData: resultType[] = data.resultData

  const chartReset = () => {
    setIsStart(false)
    setIsCompleted(false)
    setQuestion(questionData[0])
  }

  const onClickAnswer = (isAnswer: boolean) => {
    if (isAnswer) {
      switch (question.id) {
        case 0:
          setQuestion(questionData[1])
          break
        case 1:
          setIsCompleted(true)
          setResult(resultData[8])
          break
        case 2:
          setIsCompleted(true)
          setResult(resultData[12])
          break
        case 3:
          setIsCompleted(true)
          setResult(resultData[3])
          break
        case 4:
          setIsCompleted(true)
          setResult(resultData[7])
          break
        case 5:
          setQuestion(questionData[7])
          break
        case 6:
          setIsCompleted(true)
          setResult(resultData[5])
          break
        case 7:
          setQuestion(questionData[12])
          break
        case 8:
          setIsCompleted(true)
          setResult(resultData[6])
          break
        case 9:
          setIsCompleted(true)
          setResult(resultData[4])
          break
        case 10:
          setIsCompleted(true)
          setResult(resultData[9])
          break
        case 11:
          setQuestion(questionData[10])
          break
        case 12:
          setIsCompleted(true)
          setResult(resultData[0])
          break
        case 13:
          setIsCompleted(true)
          setResult(resultData[1])
          break
        case 14:
          setIsCompleted(true)
          setResult(resultData[10])
          break
        case 15:
          setIsCompleted(true)
          setResult(resultData[11])
          break
      }
    } else {
      switch (question.id) {
        case 0:
          setQuestion(questionData[5])
          break
        case 1:
          setQuestion(questionData[2])
          break
        case 2:
          setQuestion(questionData[4])
          break
        case 3:
          setQuestion(questionData[13])
          break
        case 4:
          setQuestion(questionData[7])
          break
        case 5:
          setQuestion(questionData[6])
          break
        case 6:
          setQuestion(questionData[8])
          break
        case 7:
          setQuestion(questionData[11])
          break
        case 8:
          setQuestion(questionData[9])
          break
        case 9:
          setQuestion(questionData[3])
          break
        case 10:
          setQuestion(questionData[9])
          break
        case 11:
          setQuestion(questionData[15])
          break
        case 12:
          setQuestion(questionData[14])
          break
        case 13:
          setQuestion(questionData[12])
          break
        case 14:
          setIsCompleted(true)
          setResult(resultData[2])
          break
        case 15:
          setQuestion(questionData[13])
          break
      }
    }
  }

  return {
    isStart,
    setIsStart,
    question,
    result,
    isCompleted,
    chartReset,
    onClickAnswer,
  }
}
