import axios from 'axios'

import compareWithPaths from '../compareWithPaths'

export default async (...paths: Array<string>) =>
  await (
    await axios.delete(compareWithPaths(paths))
  ).data
