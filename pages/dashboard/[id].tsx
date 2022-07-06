import type { GetServerSideProps, NextPage } from 'next'
import Container from '@mui/material/Container'
import Head from 'next/head'

import FlipButton from '@components/FlipButton'
import curry from '@src/utils/curry'
import getPetitionNameForm from '@src/utils/getPetitionNameForm'
import getItemsFromAPI from '@src/utils/services/getItemsFromAPI'

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

      {/* <FlipButton onClick={() => {}} frontContent='Є аккаунт?' backContent='Увійти'></FlipButton> */}
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string }
  const teacher = await curry<string>(getItemsFromAPI)('teachers', id)
  const fullName = await curry<string>(getPetitionNameForm)(teacher.name)

  return {
    props: { fullName },
  }
}

export default Dashboard