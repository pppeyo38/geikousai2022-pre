import type { NextPage } from 'next'
import Head from 'next/head'

import { DepartmentLayout } from '@/components/templates/DepartmentLayout'

const DepaPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>部署長紹介 | 芸工祭2022</title>
      </Head>

      <DepartmentLayout />
    </>
  )
}

export default DepaPage
