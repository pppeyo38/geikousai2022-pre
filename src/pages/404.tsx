import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const CustomErrorPage = () => {
  const router = useRouter()

  return (
    <React.Fragment>
      <div>{router.asPath} ページは存在しません</div>
      <Link href="/">ホームに戻る</Link>
    </React.Fragment>
  )
}

export default CustomErrorPage
