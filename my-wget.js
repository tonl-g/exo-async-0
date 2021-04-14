/* Ecrivez un programme my-wget.js qui prend comme paramètre sur la ligne de commande une url, qui telecharge son contenu, et l'écrit dans un fichier index.html sur votre disque.
Il faudra utiliser le package axios et des fonctions du module fs/promises pour cela. */

const axios = require('axios')
const fsPromises = require('fs/promises')

if (process.argv.length !== 3) {
  console.log(`Usage: N\node my-wget.js url)`)
  process.exit(1)
}

const writeUrl = async () => {
  try {
  const response = await axios.get(process.argv[2])
  await fsPromises.writeFile('index.html', response.data) // response.data est une string qui est la page html
  } catch (e) {
    console.log(e.message)
  }
}

writeUrl()