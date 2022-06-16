import Entity from '@models/Entity'
import Link from '@components/Link'

type ObjectTemplateProps<T extends Entity> = { entity: T }

const ObjectTemplate = <T extends Entity>({ entity }: ObjectTemplateProps<T>): JSX.Element => {
  return (
    <ul>
      {Object.values(entity).map((field: object) => {
        return <li key={field.toString()}>{field.toString()}</li>
      })}

      <Link href={`edit-subject/${entity.id}`}>ed</Link>
      <br />
    </ul>
  )
}

export default ObjectTemplate
