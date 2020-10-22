function isFriend(string) {
  // Nettoyage de la string pour obtenir un format de donnée plus exploitable
  let stringArr = string.split('\n');
  // on met de coté la question
  let question = stringArr.pop()
  // et on se débarasse du séparateur
  stringArr.pop();
  // on crée un tableau de tableau représantant les liens d'amitié ex: [['Benjamin', 'Paul'], ['Je', 'Benjamin'], ...]
  const friends = stringArr.map(arr => {
    const tmpArr = arr.split(' ');
    return [tmpArr[0], ...tmpArr.slice(-1)];
  });

  // ensuite on isole l'ami a rechercher
  let queArr = question.split(' ');
  const toSrch = queArr.slice(2, 3).join('');

  // recursive qui va parcourir le tableau de liens d'amitié
  function search(friend, count) {

    let newFriend = friend;
    // on boucle sur le tableau a la recherche d'un match avec l'ami a rechercher
    friends.forEach(arr => {
     if (arr.findIndex(f => f === newFriend) !== -1) {
        // on attribue l'ami se trouvant dans ce tableau à la variable `newFriend`
        newFriend = arr.find(f => f !== newFriend);
      }
    });

    // Suite à ça, si l'ami correspond à 'moi', 'je' ou 'Je'
    if (newFriend === 'moi' || newFriend === 'je' || newFriend === 'Je') {
      // on arrete la récursive et on return true
      console.log(true)
      return true;
    } else if(count === 0) {
      // autrement si on a parcouru toutes les entrées du tableau et au'on a aucune correspondance, on return false
      console.log(false)
      return false;
    } else {
      // tant que toutes les entrées du tableau n'ont pas été parcourue (count > 0) on rejoue la fonction avec `newFriend`
      return search(newFriend, count - 1)
    }
  }

  return search(toSrch, friends.length);
}

isFriend(`Benjamin est ami avec Paul
Frank est ami avec Paul
Mathieu est ami avec Aurore
Sophie est amie avec moi
Je suis ami avec Benjamin
---
Est-ce que Sophie est mon amie ?`);