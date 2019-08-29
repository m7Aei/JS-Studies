// Função forEach para array
/** 
  Essa função não mantém o padrão de imutabilidade no array, e também
  essa função sozinha ela não retorna um novo objeto. Na função ela 
  recebe o currentValue, o index e o array 
*/

const { passengers } = require("../data");

// Adicione a idade (age) para cada pessoa
passengers.forEach(passenger => {
  passenger.age = 2019 - passenger.birthYear;
});

console.table(passengers);
