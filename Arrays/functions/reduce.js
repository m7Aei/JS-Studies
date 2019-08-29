// Função reduce para array
/*
  Essa função mantém o padrão de imutabilidade no array. Nessa função tem
  o objetivo de reduzir o objeto a um valor único. E ele retorna o que eu 
  pedir para retornar. Ele tem um callback e o initialValue, geralmente são
  chamados de accumulator e currentValue e também pode ter o index e o array.
*/

const { shopCart } = require("../data");

// Qual o valor total do carrinho de compras
// Novo objeto para receber o resultado
const totalValue = shopCart.reduce(
  (acc, item) => acc + item.quantity * item.unitPrice,
  0
);

// Quantidade total de produtos no carrinho
const totalProducts = shopCart.reduce(
  (totalProduct, product) => totalProduct + product.quantity,
  0
);

console.table(totalValue);
console.table(totalProducts);
