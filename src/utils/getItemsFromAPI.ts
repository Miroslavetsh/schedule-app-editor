const EP = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/`

export default async (...paths: Array<string>) => {
  const url = paths.length === 0 ? EP : EP + `${paths.join('/')}`

  const response = await fetch(url, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
  const data = await response.json()

  return data
}
