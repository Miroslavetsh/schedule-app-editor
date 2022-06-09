import type { NextPage } from 'next'
import Container from '@mui/material/Container'

import { ChooseTeacher } from '@components/Form'

const Home: NextPage = () => {
  return (
    <Container>
      <ChooseTeacher />
    </Container>
  )
}

export default Home
