import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import FlipButton from '@components/FlipButton'

type PropTypes = {}

const Registration: NextPage<PropTypes> = () => {
  const router = useRouter()

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
