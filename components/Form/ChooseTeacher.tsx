import React, { useState } from 'react'

import Teacher from 'models/Teacher'
import SingleSelect from '../SingleSelect'
import Form from './Form'
import getItemsFromAPI from '@src/utils/getItemsFromAPI'

type PropTypes = {
  items: Array<Teacher>
}

const ChooseTeacher: React.FC<PropTypes> = ({ items }) => {
  const [item, setItem] = useState<Teacher>({} as Teacher)
  const [subjects, setSubjects] = useState<Array<object>>([])

  const getListFromAPI = () => {
    getItemsFromAPI(`subjects/get-by-teacher-id/${item.id}`).then((data) =>
      setSubjects(JSON.parse(data)),
    )
  }

  return (
    <Form heading='Оберіть Викладача'>
      <SingleSelect<Teacher>
        setItem={setItem}
        placeholder='Оберіть Викладача'
        items={items}
        fieldToDisplay={'name'}
        linkText='Додати нового Викладача'
        nextClickCallback={getListFromAPI}
        moveOnAddNew='/add-teacher'
      />

      {subjects?.map((s) => (
        <React.Fragment key={JSON.stringify(s)}>{JSON.stringify(s)}</React.Fragment>
      ))}
    </Form>
  )
}

export default ChooseTeacher
