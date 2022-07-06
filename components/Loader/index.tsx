import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

const Loader: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </Box>
  )
}

export default Loader
