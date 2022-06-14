export default async (path: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/${path}`

  const response = await fetch(url, {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })
  const data = await response.json()

  return data
}
