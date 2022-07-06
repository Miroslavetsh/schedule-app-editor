import axios from 'axios'
import { JSDOM } from 'jsdom'

export default async (fullName: string) => {
  try {
    const [firstName, secondName] = fullName.split(' ').reverse()
    const name = `${firstName} ${secondName}`

    const { data } = await axios.get('https://slovnyk.ua/names.php', {
      params: {
        name,
      },
    })

    if (typeof data === 'string') {
      const parsedDocument = new JSDOM(data)
      const nameNode = parsedDocument.window.document.getElementById('Zvert1')

      if (nameNode === null) throw new Error('Node with id Zvert1 Not Found. For name ' + name)

      return nameNode?.textContent
    }

    return name
  } catch {
    return fullName
  }
}
