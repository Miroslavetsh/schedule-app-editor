import SingleSelect from '../SingleSelect'
import Form from './Form'

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
]

const ChooseTeacher = () => {
  return (
    <Form heading='Оберіть Викладача'>
      <SingleSelect
        placeholder='Оберіть Викладача'
        items={names}
        linkText='Додати нового'
        nextClickCallback={() => {}}
        moveOnAddNew='/add-teacher'
      />
    </Form>
  )
}

export default ChooseTeacher
