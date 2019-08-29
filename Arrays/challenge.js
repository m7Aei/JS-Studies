const { childrenAge, mailList, shopCart } = require("./data");

/**
 * Adicione o ano de nascimento das crianças para cada elemento do array
 */
const childrenAddYear = childrenAge.map(child => {
  return {
    age: child,
    birthYear: 2019 - child
  };
});

console.table(childrenAddYear);

/**
 * Crie um array somente com domínios na lista de email
 */
const domainsList = mailList.map(mails => {
  const domains = mails.split("@");

  return domains[1];
});

console.table(domainsList);

/**
 * Encontre o maior preço dos produtos abaixo de 100 reais
 */
const maxPrice = shopCart
  .filter(product => product.unitPrice <= 100)
  .reduce((minorPrice, maxPrice) => {
    if (minorPrice > maxPrice.unitPrice) return minorPrice;

    return maxPrice.unitPrice;
  }, 0);

console.table(maxPrice);
