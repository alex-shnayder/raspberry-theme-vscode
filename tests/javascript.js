import getRandomValues from './getRandomValues'
import { URL_CHARS } from './constants'

const GREETINGS = {
  english: 'Hello',
  spanish: 'Hola',
  french: 'Bonjour',
  italian: 'Ciao',
}

/**
 * Compose a welcome message
 */
function greet(name, language = 'english') {
  return `${GREETINGS[language]}, ${name}!`
}

/**
 * Generate a secure URL-friendly unique ID
 */
function generateId(size = 22) {
  let id = ''
  let bytes = getRandomValues(new Uint8Array(size))

  for (let i = 0; i < size; i++) {
    id += URL_CHARS[bytes[i] & 63]
  }

  return id
}

export { greet, generateId }
