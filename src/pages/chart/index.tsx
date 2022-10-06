import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import { ChartTemplate } from '@/components/templates/ChartTemplate'
import { Loading } from '@/components/organisms/Chart/Loading'
import { ChartTestLayout } from '@/components/templates/ChartTestLayout'

const ChartPage: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  return (
    <React.Fragment>
      <Head>
        <title>適部署チャート｜芸工祭2022</title>
      </Head>

      <ChartTemplate>
        {isLoading ? <Loading /> : <ChartTestLayout />}
      </ChartTemplate>
    </React.Fragment>
  )
}

export default ChartPage
