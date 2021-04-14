/* Améliorer l'exercice précédent pour afficher dans le cas d'un download réussi, la taille des données downloadées.
Vous pouvez récupérer cette information soit:

grâce à la fonction fsPromises.stat qui retourne un objet Stats qui contient cette information: https://nodejs.org/api/fs.html#fs_class_fs_stats. Il faudra appliquer cette fonction fsPromises.stat au fichier index.html déjà écrit.
grâce à la propriété headers['content-length'] de l'objet "response" retourné par axios.get.
Un console.log(response.headers) peut vous aider à comprendre la structure du header d'une réponse http. */

const axios = require('axios')
const fsPromises = require('fs/promises')

if (process.argv.length !== 3) {
  console.log(`Usage: node my-wget.js url)`)
  process.exit(1)
}

const writeUrl = async () => {
  try {
  const response = await axios.get(process.argv[2])
  const stats = await fsPromises.stat('index.html')
  await fsPromises.writeFile('index.html', response.data) // response.data est une string qui est la page html
  console.log(stats.size)
  console.log(response.headers)
  } catch (e) {
    console.log(e.message)
  }
}

writeUrl()