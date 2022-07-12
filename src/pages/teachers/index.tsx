import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Head from 'next/head'

import Teacher from '@models/Teacher'
import getItemsFromAPI from '@services/redis/getItemsFromAPI'
import Block from '@src/components/Block'

type PropTypes = {
  items: Array<Teacher>
}

const List: NextPage<PropTypes> = ({ items }) => {
  return (
    <Container sx={{ mt: 2 }}>
      <Head>
        <title>Викладачі</title>
      </Head>

      <Block<Teacher>
        heading='Список Викладачів'
        isLoading={false}
        items={items}
        tableName='teachers'
      />
    </Container>
  )
}

export async function getStaticProps() {
  const items = await getItemsFromAPI('teachers')

  return {
    props: { items },
  }
}

export default List
