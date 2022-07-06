import axios from 'axios'
import { JSDOM } from 'jsdom'

export default async (fullName: string) => {
  const [_, firstName, secondName] = fullName.split(' ')
  const name = `${firstName} ${secondName}`

  try {
    const { data } = await axios.get('https://slovnyk.ua/names.php', {
      params: {
        name,
      },
    })

    if (typeof data === 'string') {
      const parsedDocument = new JSDOM(data)
      const name = parsedDocument.window.document.getElementById('Zvert1')?.textContent

      return name
    }
  } catch (e) {
    return name
  }
}
