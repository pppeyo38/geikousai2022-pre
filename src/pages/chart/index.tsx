import type { NextPage } from 'next'
import Head from 'next/head'

import { ChartLayout } from '@/components/templates/ChartLayout'

const ChartPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>適部署チャート｜芸工祭2022</title>
      </Head>

      <ChartLayout />
    </>
  )
}

export default ChartPage
