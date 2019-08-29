// Função filter para o array
/*
  Como já indica o nome ele tem a função de
  filtrar um array com a lógica que colocar dentro da função.
  Quando o array em questão é filtrado ele gera um novo array, só
  com as informações que eram desejadas. Na função ela precisa receber 
  o elemento, uma chave, e o array. Lembrando que não são todos obrigatórios 
  mas algum deles é necessário para fazer a lógica.

  A função retorna só um true ou false.

  A função filter tem o principio de imutabilidade, ou seja, não altera o 
  array original, elas devolvem um objeto novo.
*/

// Desestruturando o dado que eu quero da base de dados
const { childrenAge, mailList } = require("../data");

// Filtrar crianças entre 3 - 15 anos
// Aqui está a função, onde contém a lógica:

function childrenAge3to15(element, index, array) {
  if (element >= 3 && element <= 15) return true;

  return false;
}

// declarando uma constante pra receber o novo array
const childrenFiltered = childrenAge.filter(childrenAge3to15);

// Método para ficar com código mais simples e aplicando ES6
const childrenFiltered = childrenAge.filter(
  element => element >= 3 && element <= 15
);

// para ver o resultado
console.table(childrenFiltered);

// Filtrar todos os hotmails
const filteredHotmails = mailList.filter(mail => mail.includes("@hotmail.com"));

console.table(filteredHotmails);
