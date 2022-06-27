import axios from 'axios'
import compareWithPaths from './compareWithPaths'

export default async (item: object, ...paths: Array<string>) =>
  await (
    await axios.put(compareWithPaths(paths), item)
  ).data
