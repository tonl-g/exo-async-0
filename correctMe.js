/* Ce programme asynchrone ne fonctionne pas.
Ajouter le code nécessaire pour faire fonctionner ce programme.

const fsPromises = require('fs/promises')

try {
  let txt1 = await fsPromises.readFile('hello.txt', 'utf-8')
  console.log(txt1)
} catch (e) {
  console.log(e.message)
} */

const fsPromises = require('fs/promises')
const myReadFile = async () => {
try {
  const p1 = fsPromises.readFile('hello.txt', 'utf-8')
  console.log(p1)
  let txt1 = await p1
  console.log(p1)
} catch (e) {
  console.log(e.message)
}
}

myReadFile()
