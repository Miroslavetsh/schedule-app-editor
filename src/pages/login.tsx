import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'

import FlipButton from '@src/components/FlipButton'

type PropTypes = {}

const Login: NextPage<PropTypes> = () => {
  const router = useRouter()
  const session = useSession()

  return (
    <>
      <Head>
        <title>Скедьюлер | Вхід</title>
      </Head>

      <>login page</>

      {/* <button onClick={signIn}>singIn</button> */}

      <FlipButton
        onClick={() => {
          router.push('/registration')
        }}
        frontContent='Немає аккаунту?'
        backContent='Реєстрація'
      />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {},
  }
}

export default Login
