import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

import { ChartLayout } from '@/components/templates/ChartLayout'
import { Loading } from '@/components/organisms/Chart/Loading'

const ChartPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <>
      <Head>
        <title>適部署チャート｜芸工祭2022</title>
      </Head>

      <ChartLayout>{isLoading ? <Loading /> : <p>チャート</p>}</ChartLayout>
    </>
  )
}

export default ChartPage
