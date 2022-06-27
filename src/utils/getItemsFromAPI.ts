import axios from 'axios'

import compareWithPaths from './compareWithPaths'

export default async (...paths: Array<string>) =>
  await (
    await axios.get(compareWithPaths(paths))
  ).data
