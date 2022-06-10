import { ReactNode } from 'react'
type PropTypes = {
  children?: ReactNode
  heading?: ReactNode
}

const Form: React.FC<PropTypes> = ({ children }) => <form>{children}</form>

export default Form
