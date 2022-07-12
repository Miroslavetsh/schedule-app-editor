import { Typography } from '@mui/material'
import { Box } from '@mui/system'

import ObjectTemplate from '@src/components/Object'
import Loader from '@src/components/Loader'
import Entity from '@models/Entity'
import TableName from '@utils/TableName'

import styles from './Styles.module.scss'

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
        <Loader />
      ) : items.length > 0 ? (
        <>
          <Typography variant='h5' component='h5' fontWeight={700}>
            {heading}
          </Typography>

          <div className={styles.wrapper}>
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
