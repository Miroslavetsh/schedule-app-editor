import type { GetServerSideProps, NextPage } from 'next'
import Container from '@mui/material/Container'
import Head from 'next/head'

import FlipButton from '@src/components/FlipButton'
import curry from '@src/utils/curry'
import getPetitionNameForm from '@src/utils/getPetitionNameForm'
import getItemsFromAPI from '@services/redis/getItemsFromAPI'

type PropTypes = {
  fullName: string
}

const Dashboard: NextPage<PropTypes> = ({ fullName }) => {
  return (
    <Container sx={{ mt: 2 }}>
      <Head>
        <title>Скедьюлер | Ваш Помічник</title>
      </Head>

      <h2>Ваш Дешборд, {fullName}</h2>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { teacherId } = context.params as { teacherId: string }
  const teacher = await curry<string>(getItemsFromAPI)('teachers', teacherId)
  const fullName = await curry<string>(getPetitionNameForm)(teacher.name)

  return {
    props: { fullName },
  }
}

export default Dashboard
