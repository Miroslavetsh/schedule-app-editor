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
import putItemToAPI from '@src/utils/services/putItemToAPI'

type PropTypes = {
  subject: Subject
}

const EditSubject: NextPage<PropTypes> = ({ subject }) => {
  const [item, setItem] = useState<Subject>(subject)
  const [teachers, setTeachers] = useState<Array<Teacher>>([])
  useEffect(() => {
    curry<string>(getItemsFromAPI)('teachers').then((data: Array<Teacher>) => {
      setTeachers(data)
    })
  }, [])

  const onSaveClick = (e: React.MouseEvent) => {
    e.preventDefault()

    putItemToAPI(
      { name: item.name, teacherId: item.teacherId, place: item.place },
      'subjects',
      item.id,
    )
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Head>
        <title>{subject.name}</title>
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
        selected={teachers.find((teacher) => teacher.id === item.teacherId)}
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string }
  const subject = await curry<string>(getItemsFromAPI)('subjects', id)

  return {
    props: { subject },
  }
}

export default EditSubject
