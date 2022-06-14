import React, { useEffect, useMemo, useState } from 'react'

import Teacher from '@models/Teacher'
import Subject from '@models/Subject'
import getItemsFromAPI from '@src/utils/getItemsFromAPI'
import { FormPattern } from '@components/Form'
import SingleSelect from '@components/SingleSelect'
import Block from '@components/Block'

type PropTypes = {
  teachers: Array<Teacher>
}

const ChooseTeacher: React.FC<PropTypes> = ({ teachers }) => {
  const [teacher, setTeacher] = useState<Teacher>({} as Teacher)
  const [subjects, setSubjects] = useState<Array<Subject>>([])
  const [nameInHeading, setNameInHeading] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const items = useMemo(
    async () => await getItemsFromAPI(`subjects/get-by-teacher-id/${teacher.id}`),
    [teacher.id],
  )

  const getSubjectsListFromAPI = async () => {
    setIsLoading(true)
    setSubjects(JSON.parse(await items))
    setNameInHeading(teacher.name)
    setIsLoading(false)
  }

  return (
    <FormPattern heading='Оберіть Викладача'>
      <SingleSelect<Teacher>
        setItem={setTeacher}
        placeholder='Оберіть Викладача'
        items={teachers}
        fieldToDisplay='name'
        linkText='Додати нового'
        nextClickCallback={getSubjectsListFromAPI}
        moveOnAddNew='/add-teacher'
      />

      <Block<Subject>
        heading={`Предмети викладача ${nameInHeading}`}
        isLoading={isLoading}
        items={subjects}
      />
    </FormPattern>
  )
}

export default ChooseTeacher
