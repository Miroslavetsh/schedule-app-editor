import { Button } from '@mui/material'

import Link from '@src/components/NextLink'

import Entity from '@models/Entity'

import deleteItemFromAPI from '@services/redis/deleteItemFromAPI'
import curry from '@utils/curry'
import TableName from '@utils/TableName'

type ObjectTemplateProps<T extends Entity> = { entity: T; tableName: TableName }

const ObjectTemplate = <T extends Entity>({
  entity,
  tableName,
}: ObjectTemplateProps<T>): JSX.Element => {
  const deleteEntity = () => {
    deleteItemFromAPI(tableName, entity.id)
  }

  return (
    <ul>
      {Object.keys(entity).map((field) => {
        // @ts-ignore
        if (field !== 'id') return <li key={field.toString()}>{entity[field]}</li>
        if (field.includes('Id')) return <li key={field.toString()}>{entity[field]}</li>
      })}

      <Link href={`${tableName}/edit/${entity.id}`}>edit</Link>
      <Button onClick={deleteEntity}>delete</Button>
      <br />
    </ul>
  )
}

export default ObjectTemplate
