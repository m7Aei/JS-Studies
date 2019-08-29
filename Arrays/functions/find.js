// Função find para array
/*
  Essa função mantém o padrão de imutabilidade no array. Na função
  ele pode receber o element, index e o array. Ele pode retornar o 
  elemento que encontrar, ou se não encontrar nada, retorna "undefined"
*/

const { passengers } = require("../data");

// Encontrar o passageiro com nome Natan
const Natan = passengers.find(
  passenger => passenger.name.toLowerCase() === "natan"
);

console.table(Natan);
