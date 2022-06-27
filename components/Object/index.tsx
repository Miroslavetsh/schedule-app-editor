import { Button } from '@mui/material'

import Entity from '@models/Entity'
import Link from '@components/NextLink'
import deleteItemFromAPI from '@src/utils/services/deleteItemFromAPI'
import curry from '@src/utils/curry'

type ObjectTemplateProps<T extends Entity> = { entity: T }

const ObjectTemplate = <T extends Entity>({ entity }: ObjectTemplateProps<T>): JSX.Element => {
  const deleteEntity = () => {
    curry<string>(deleteItemFromAPI)('subjects', entity.id)
  }

  return (
    <ul>
      {Object.keys(entity).map(
        // @ts-ignore
        (field) => field !== 'id' && <li key={field.toString()}>{entity[field]}</li>,
      )}

      <Link href={`subjects/edit/${entity.id}`}>edit</Link>
      <Button onClick={deleteEntity}>delete</Button>
      <br />
    </ul>
  )
}

export default ObjectTemplate
