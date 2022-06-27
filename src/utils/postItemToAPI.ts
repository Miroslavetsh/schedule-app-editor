import axios from 'axios'

import compareWithPaths from './compareWithPaths'

export default async (item: object, ...paths: Array<string>) =>
  await (
    await axios.post(compareWithPaths(paths), item)
  ).data
