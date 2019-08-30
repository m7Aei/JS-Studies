// Método de ordenação insertion
const { numbers } = require("../data");

function insertionSort(array) {
  var length = numbers.length;

  for (var i = 1, j; i < length; i++) {
    var temp = numbers[i];
    for (var j = i - 1; j >= 0 && numbers[j] > temp; j--) {
      numbers[j + 1] = numbers[j];
    }
    numbers[j + 1] = temp;
  }

  return numbers;
}

const ordinationArray = insertionSort(numbers);

console.table(ordinationArray);
