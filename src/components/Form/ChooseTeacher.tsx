import { useMemo, useState } from 'react'

import { FormPattern } from '@src/components/Form'
import SingleSelect from '@src/components/SingleSelect'
import Block from '@src/components/Block'
// models
import Subject from '@models/Subject'
import Teacher from '@models/Teacher'
// utils
import getItemsFromAPI from '@services/redis/getItemsFromAPI'
import curry from '@utils/curry'

type PropTypes = {
  teachers: Array<Teacher>
}

const ChooseTeacher: React.FC<PropTypes> = ({ teachers }) => {
  const [teacher, setTeacher] = useState<Teacher>({} as Teacher)
  const [subjects, setSubjects] = useState<Array<Subject>>([])
  const [nameInHeading, setNameInHeading] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getSubjects = useMemo(
    async () =>
      teacher.id &&
      (await curry<string>(getItemsFromAPI)('subjects', 'get-by-teacher-id', teacher.id)),
    [teacher.id],
  )

  const getSubjectsListFromAPI = async () => {
    setIsLoading(true)
    setSubjects(JSON.parse(await getSubjects))
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
        moveOnAddNew='/teachers/add'
      />

      <Block<Subject>
        heading={`Предмети викладача ${nameInHeading}`}
        isLoading={isLoading}
        items={subjects}
        tableName='subjects'
      />
    </FormPattern>
  )
}

export default ChooseTeacher
