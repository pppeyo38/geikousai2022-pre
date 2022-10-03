import { useState } from 'react'

export const usePanelSlide = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const onClickPrev = () => {
    if (tabIndex === 0) {
      setTabIndex(18)
    } else {
      setTabIndex(tabIndex - 1)
    }
  }

  const onClickNext = () => {
    if (tabIndex === 18) {
      setTabIndex(0)
    } else {
      setTabIndex(tabIndex + 1)
    }
  }

  return { tabIndex, onClickPrev, onClickNext }
}
