import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import FlipButton from '@components/FlipButton'

type PropTypes = {}

const Login: NextPage<PropTypes> = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Скедьюлер | Вхід</title>
      </Head>

      <>login page</>

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
