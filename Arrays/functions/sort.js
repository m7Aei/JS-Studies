// Função sort para array
/*
  Essa função mantém o padrão de imutabilidade no array. Nessa função
  ele ordena os elementos e segue a regra do unicode ASCII. Sempre precisa
  de dois valores para se fazer uma comparação. Ele pode retornar um positivo, 
  ou negativo ou 0 e com isso segue a ordenação.  
*/

const { shopCart, passengers } = require("../data");

// Organize o carrinho pelo maior número de produtos para o menor
const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity);
console.table(orderByTotalProducts);

// Organize os passageiros pelo nome
const orderByPassengerName = passengers.sort((pa, pb) => {
  if (pa.name.toLowerCase() < pb.name.toLowerCase()) return -1;
  if (pa.name.toLowerCase() > pb.name.toLowerCase()) return 1;
  return 0;
});

console.table(orderByPassengerName);
