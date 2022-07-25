import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import FlipButton from '@src/components/FlipButton'

type PropTypes = {}

const Login: NextPage<PropTypes> = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Скедьюлер | Вхід</title>
      </Head>

      <>login page</>

      {/* <button onClick={signIn}>singIn</button> */}

      <FlipButton
        onClick={() => {
          router.push('/register')
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
