import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { TopLayout } from '@/components/templates/TopLayout'

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>芸工祭2022</title>
      </Head>

      <TopLayout />
    </React.Fragment>
  )
}

export default Home
