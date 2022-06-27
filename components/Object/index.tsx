import Entity from '@models/Entity'
import Link from '@components/NextLink'

type ObjectTemplateProps<T extends Entity> = { entity: T }

const ObjectTemplate = <T extends Entity>({ entity }: ObjectTemplateProps<T>): JSX.Element => {
  return (
    <ul>
      {Object.keys(entity).map(
        // @ts-ignore
        (field) => field !== 'id' && <li key={field.toString()}>{entity[field]}</li>,
      )}

      <Link href={`subjects/edit/${entity.id}`}>ed</Link>
      <br />
    </ul>
  )
}

export default ObjectTemplate
