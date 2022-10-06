import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { DepartmentLayout } from '@/components/templates/DepartmentLayout'

const DepaPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>部署長紹介｜芸工祭2022</title>
      </Head>

      <DepartmentLayout />
    </React.Fragment>
  )
}

export default DepaPage
