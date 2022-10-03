import type { NextPage } from 'next'
import Head from 'next/head'

import { MovieLayout } from '@/components/templates/MovieLayout'

const MoviePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ムービー | 芸工祭2022</title>
      </Head>

      <MovieLayout />
    </>
  )
}

export default MoviePage
