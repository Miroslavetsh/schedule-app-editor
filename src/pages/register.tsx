import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import FlipButton from '@src/components/FlipButton'

type PropTypes = {}

const Register: NextPage<PropTypes> = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Скедьюлер | Реєстрація</title>
      </Head>

      <>register page</>

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

export default Register
