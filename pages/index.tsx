import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Head from 'next/head'

import { ChooseTeacher } from '@components/Form'
import getItemsFromAPI from '@src/utils/getItemsFromAPI'
import Teacher from '@models/Teacher'

type PropTypes = {
  items: Array<Teacher>
}

const Home: NextPage<PropTypes> = ({ items }) => {
  return (
    <Container>
      <Head>
        <title>Скедьюлер | Ваш Помічник</title>
      </Head>

      <ChooseTeacher teachers={items} />
    </Container>
  )
}

export async function getStaticProps() {
  const items = await getItemsFromAPI('teachers')

  return {
    props: { items },
  }
}

export default Home
