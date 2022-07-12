import Entity from './Entity'

export default interface Subject extends Entity {
  name: string
  place: string
  teacherId: string
}
