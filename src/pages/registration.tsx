import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

import FlipButton from '@src/components/FlipButton'

type PropTypes = {}

const Registration: NextPage<PropTypes> = () => {
  const router = useRouter()

  const session = useSession()

  useEffect(() => {
    session ?? router.push('/login')
  })

  return (
    <>
      <Head>
        <title>Скедьюлер | Реєстрація</title>
      </Head>

      <>registration page</>

      <FlipButton
        onClick={() => {
          router.push('/login')
        }}
        frontContent='Є аккаунт?'
        backContent='Увійти'
      />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Registration
