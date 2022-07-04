import { CircularProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'

import Entity from '@models/Entity'
import ObjectTemplate from '@components/Object'
import TableName from '@src/utils/TableName'

type PropTypes<T extends Entity> = {
  items: Array<T>
  heading: string
  isLoading: boolean
  tableName: TableName
}

const Block = <T extends Entity>({
  items,
  heading,
  isLoading,
  tableName,
}: PropTypes<T>): JSX.Element => {
  return (
    <div>
      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
      ) : items.length > 0 ? (
        <>
          <Typography variant='h5' component='h5' fontWeight={700}>
            {heading}
          </Typography>

          <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap' }}>
            {items.map((entity) => (
              <Box sx={{ width: '33%' }} key={JSON.stringify(entity)}>
                <ObjectTemplate<T> entity={entity} tableName={tableName} />
              </Box>
            ))}
          </div>
        </>
      ) : (
        <div>Наразі Порожньо :&#40;</div>
      )}
    </div>
  )
}

export default Block
