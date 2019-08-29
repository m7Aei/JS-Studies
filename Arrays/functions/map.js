// Função map para array
/*
  Essa função mantém o padrão de imutabilidade no array. Ele vai retornar
  um objeto novo, respeitando o tamanho do objeto original, ou seja, independente
  da lógica que eu fizer ele vai manter o tamanho do array original. 
*/

const { passengers } = require("../data");

// Quantos anos eles tem?
// Criando a constante pra receber o objeto e aplicando o map
const newPassergers = passengers.map(passenger => {
  return `${passenger.name} tem ${2019 - passenger.birthYear} anos`;
});

console.table(newPassergers);

// Encontre o nome palíndromo
const founds = passengers.map(passenger => {
  /* 
    Criando um array "Fake" para passar a função call, para receber dois
    parametros, o primeiro uma string e o segundo uma function
    passando o reverse para ler as letras ao contrário, e o join
    para juntar todas elas 
  */
  const reverseName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join("");

  // criando a condição para ver se o nome é um palíndromo
  if (reverseName.toLowerCase() === passenger.name.toLowerCase()) {
    return `This is palindromo: ${passenger.name}`;
  }
});

console.table(founds);
