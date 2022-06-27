import { useEffect, useState } from 'react'
import { Container } from '@mui/system'
import { Button, Input } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import Subject from '@models/Subject'
import curry from '@src/utils/curry'
import getItemsFromAPI from '@src/utils/services/getItemsFromAPI'
import SingleSelect from '@components/SingleSelect'
import Teacher from '@models/Teacher'
import postItemToAPI from '@src/utils/services/postItemToAPI'

type PropTypes = {
  subject: Subject
}

const AddSubject: NextPage<PropTypes> = () => {
  const [item, setItem] = useState<Subject>({} as Subject)
  const [teachers, setTeachers] = useState<Array<Teacher>>([])
  useEffect(() => {
    curry<string>(getItemsFromAPI)('teachers').then((data: Array<Teacher>) => {
      setTeachers(data)
    })
  }, [])

  const onSaveClick = (e: React.MouseEvent) => {
    e.preventDefault()

    postItemToAPI({ name: item.name, teacherId: item.teacherId, place: item.place }, 'subjects')
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Head>
        <title>Додаємо Предмет</title>
      </Head>

      <Input
        onChange={(e) => {
          setItem({ ...item, name: e.target.value })
        }}
        value={item.name}
        placeholder='Назва'
      />

      <br />

      <Input
        onChange={(e) => {
          setItem({ ...item, place: e.target.value })
        }}
        value={item.place}
        placeholder='Місце проведення'
      />

      <br />

      <SingleSelect<Teacher>
        items={teachers}
        placeholder='Оберіть Викладача'
        setItem={(teacher: Teacher) => setItem({ ...item, teacherId: teacher.id })}
        fieldToDisplay='name'
        linkText='Додати нового'
        moveOnAddNew='/add-teacher'
      />

      <br />

      <Button onClick={onSaveClick}>Зберегти</Button>
    </Container>
  )
}

export default AddSubject
