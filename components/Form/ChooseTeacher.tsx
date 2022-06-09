import MultipleSelect from '@components/MultipleSelect'
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
      <MultipleSelect placeholder='Оберіть Викладача' items={names} />
    </Form>
  )
}

export default ChooseTeacher
