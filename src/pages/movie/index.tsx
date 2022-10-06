import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { MovieLayout } from '@/components/templates/MovieLayout'

const MoviePage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>ムービー｜芸工祭2022</title>
      </Head>

      <MovieLayout />
    </React.Fragment>
  )
}

export default MoviePage
