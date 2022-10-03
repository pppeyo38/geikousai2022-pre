import { FC, memo, ReactNode } from 'react'
import Link from 'next/link'

import '../../styles/modules/viewmore.scss'

type Props = {
  children: ReactNode
  link: string
}

export const ViewMore: FC<Props> = memo((props) => {
  const { children, link } = props

  return (
    <>
      {link === '/game' ? (
        <a
          href="/game"
          target="_blank"
          rel="noopener noreferrer"
          className="ViewMore"
        >
          {children}
        </a>
      ) : (
        <Link href={link} className="ViewMore">
          {children}
        </Link>
      )}
    </>
  )
})
