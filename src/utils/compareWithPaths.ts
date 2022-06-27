import ENDPOINT from './endpoint'

export default (paths: Array<string>) =>
  paths.length === 0 ? ENDPOINT : ENDPOINT + `${paths.join('/')}`
