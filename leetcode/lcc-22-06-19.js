function suggestedProducts(products, searchWord) {
  products.sort();

  let result = [];

  for (let i = 0; i < searchWord.length; i++) {
    getResults(i + 1);
  }

  return result;

  function getResults(index) {
    const prefix = searchWord.substring(0, index);
    const arr = [];

    for (let i = 0; i < products.length; i++) {
      const dictWord = products[i];
      if (dictWord.indexOf(prefix) == 0) {
        arr.push(dictWord);
      }

      if (arr.length == 3) {
        result.push(arr);
        return;
      }
    }

    result.push(arr);
  }
}

