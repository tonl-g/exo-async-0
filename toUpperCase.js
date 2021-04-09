/* Convertir le code suivant qui utilise les versions synchrones de l'api du module fs, en un code qui utilise les versions asynchrones de l'api du module fs/promises.

const fs = require('fs')
try {
  let txt1 = fs.readFileSync('hello.txt', 'utf-8')
  txt1 = txt1.toUpperCase()
  fs.writeFileSync('hello.txt', txt1)
} catch (e) {
  console.log(e.message)
} */

// const fs = require('fs')
const fsPromises = require('fs/promises')

const myReadAndWriteFile = async () => {
try {
  const p1 = await fsPromises.readFile('hello.txt', 'utf-8')
  let txt1 = p1.toUpperCase()
  p2 = await fsPromises.writeFile('hello.txt', txt1)
  console.log(txt1)
  console.log(p2)
} catch (e) {
  console.log(e.message)
}
}

myReadAndWriteFile()