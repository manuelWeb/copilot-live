import _ from 'lodash';

let object = {
  'a': [{ 'b': { 'c': 3 } }]
};

let value = _.get(object, 'a[0].b.c');
console.log(value);  //

// créer un tableau avec des valeurs dupliquées
let array = [1, 2, 3, 1, 2, 3];
// utiliser lodash pour supprimer les doublons
let uniqueArray = _.uniq(array);
console.log(uniqueArray); //