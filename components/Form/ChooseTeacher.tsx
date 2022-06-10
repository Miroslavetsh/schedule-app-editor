import React, { useCallback, useState } from 'react'
import { CircularProgress, Typography } from '@mui/material'

import getItemsFromAPI from '@src/utils/getItemsFromAPI'
import SingleSelect from '../SingleSelect'
import Form from './Form'
import Teacher from '@models/Teacher'
import Subject from '@models/Subject'
import { Box } from '@mui/system'

type PropTypes = {
  teachers: Array<Teacher>
}

const ChooseTeacher: React.FC<PropTypes> = ({ teachers }) => {
  const [teacher, setTeacher] = useState<Teacher>({} as Teacher)
  const [subjects, setSubjects] = useState<Array<Subject>>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getListFromAPI = async () => {
    setIsLoading(true)

    const data = await getItemsFromAPI(`subjects/get-by-teacher-id/${teacher.id}`)
    setSubjects(JSON.parse(data))

    setIsLoading(false)
  }

  return (
    <Form heading='Оберіть Викладача'>
      <SingleSelect<Teacher>
        setItem={setTeacher}
        placeholder='Оберіть Викладача'
        items={teachers}
        fieldToDisplay={'name'}
        linkText='Додати нового'
        nextClickCallback={getListFromAPI}
        moveOnAddNew='/add-teacher'
      />

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) : (
        subjects.length > 0 && (
          <>
            <Typography variant='h4' component='h4' fontWeight={700}>
              Предмети викладача {teacher.name}
            </Typography>

            <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap' }}>
              {subjects.map((s) => (
                <Box sx={{ width: '33%' }} key={JSON.stringify(s)}>
                  {s.id}
                  <br />
                  {s.name}
                  <br />
                  {s.place}
                  <br />
                  <br />
                </Box>
              ))}
            </div>
          </>
        )
      )}
    </Form>
  )
}

export default ChooseTeacher
