import { Button } from '@mui/material'

import Entity from '@models/Entity'
import Link from '@components/NextLink'
import deleteItemFromAPI from '@src/utils/services/deleteItemFromAPI'
import curry from '@src/utils/curry'
import TableName from '@src/utils/TableName'

type ObjectTemplateProps<T extends Entity> = { entity: T, tableName: TableName }

const ObjectTemplate = <T extends Entity>({ entity, tableName }: ObjectTemplateProps<T>): JSX.Element => {
  const deleteEntity = () => {
    curry<string>(deleteItemFromAPI)(tableName, entity.id)
  }

  return (
    <ul>
      {Object.keys(entity).map(
        (field) => {
          // @ts-ignore
          if (field !== 'id') return <li key={field.toString()}>{entity[field]}</li>
          if (field.includes('Id')) return <li key={field.toString()}>{entity[field]}</li>
        },
      )}

      <Link href={`${tableName}/edit/${entity.id}`}>edit</Link>
      <Button onClick={deleteEntity}>delete</Button>
      <br />
    </ul>
  )
}

export default ObjectTemplate
