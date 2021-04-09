/* Ecrivez un programme my-wget.js qui prend comme paramètre sur la ligne de commande une url, qui telecharge son contenu, et l'écrit dans un fichier index.html sur votre disque.
Il faudra utiliser le package axios et des fonctions du module fs/promises pour cela. */

const axios = require('axios')
const fsPromises = require('fs/promises')

const writeUrl = async () => {
  try {
  const response = await axios.get('https://fr.wikipedia.org/wiki/Blockchain')
  await fsPromises.writeFile('blockchain.html', response.data) // response.data est une string qui est la page html
  } catch (e) {
    console.log(e.message)
  }
}

writeUrl()