import { useState } from 'react'

export const usePanelSlide = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const prevSlide = () => {
    if (tabIndex === 0) {
      setTabIndex(18)
    } else {
      setTabIndex(tabIndex - 1)
    }
  }

  const nextSlide = () => {
    if (tabIndex === 18) {
      setTabIndex(0)
    } else {
      setTabIndex(tabIndex + 1)
    }
  }

  const onClickSetPanel = (index: number) => {
    setTabIndex(index)
    window.scrollTo({
      top: 160,
      behavior: 'smooth',
    })
  }

  return { tabIndex, prevSlide, nextSlide, onClickSetPanel }
}
