import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Head from 'next/head'

import Subject from '@models/Subject'
import getItemsFromAPI from '@services/redis/getItemsFromAPI'
import Block from '@src/components/Block'

type PropTypes = {
  items: Array<Subject>
}

const List: NextPage<PropTypes> = ({ items }) => {
  return (
    <Container sx={{ mt: 2 }}>
      <Head>
        <title>Предмети</title>
      </Head>

      <Block<Subject>
        heading='Список Предметів'
        isLoading={false}
        items={items}
        tableName='subjects'
      />
    </Container>
  )
}

export async function getStaticProps() {
  const items = await getItemsFromAPI('subjects')

  return {
    props: { items },
  }
}

export default List
