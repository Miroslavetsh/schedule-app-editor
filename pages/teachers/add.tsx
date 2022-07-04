import { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { Button, Input } from '@mui/material'
import { NextPage } from 'next'
import Head from 'next/head'

import Subject from '@models/Subject'
import curry from '@src/utils/curry'
import getItemsFromAPI from '@src/utils/services/getItemsFromAPI'
import SingleSelect from '@components/SingleSelect'
import Teacher from '@models/Teacher'
import postItemToAPI from '@src/utils/services/postItemToAPI'

const AddTeacher: NextPage = () => {
  const [item, setItem] = useState<Teacher>({} as Teacher)

  const onSaveClick = (e: React.MouseEvent) => {
    e.preventDefault()

    postItemToAPI({ name: item.name }, 'teachers')
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Head>
        <title>Додаємо Викладача</title>
      </Head>

      <Input
        onChange={(e) => {
          setItem({ ...item, name: e.target.value })
        }}
        value={item.name}
        placeholder="Повне Ім'я"
      />

      <br />

      <Button onClick={onSaveClick}>Зберегти</Button>
    </Container>
  )
}

export default AddTeacher
