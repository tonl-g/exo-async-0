/* Améliorer l'exercice précédent pour afficher dans le cas d'un download réussi, la taille des données downloadées.
Vous pouvez récupérer cette information soit:

grâce à la fonction fsPromises.stat qui retourne un objet Stats qui contient cette information: https://nodejs.org/api/fs.html#fs_class_fs_stats. Il faudra appliquer cette fonction fsPromises.stat au fichier index.html déjà écrit.
grâce à la propriété headers['content-length'] de l'objet "response" retourné par axios.get.
Un console.log(response.headers) peut vous aider à comprendre la structure du header d'une réponse http. */

