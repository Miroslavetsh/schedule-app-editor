import { ReactNode } from 'react'
import Typography from '@mui/material/Typography'

type PropTypes = {
  children?: ReactNode
  heading?: ReactNode
}

const Form: React.FC<PropTypes> = ({ heading, children }) => (
  <div>
    <Typography variant='h2' component='h2' fontWeight={700}>
      {heading}
    </Typography>

    {children}
  </div>
)

export default Form
