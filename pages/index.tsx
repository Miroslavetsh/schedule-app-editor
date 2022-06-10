import type { NextPage } from 'next'
import Container from '@mui/material/Container'

import { ChooseTeacher } from '@components/Form'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Скедьюлер | Ваш Помічник</title>
      </Head>

      <ChooseTeacher />
    </Container>
  )
}

export default Home
