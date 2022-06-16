const EP = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/`

export default async (item: object, ...paths: Array<string>) => {
  const url = paths.length === 0 ? EP : EP + `${paths.join('/')}`

  const response = await fetch(url, {
    mode: 'cors',
    method: 'PUT',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(item),
  })
  const data = await response.json()

  return data
}
