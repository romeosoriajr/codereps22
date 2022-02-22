function titleToNumber (columnTitle) {

  let result = 0;

  for (let i=0; i < columnTitle.length; i++) {
    const val = columnTitle.charCodeAt(i) - 64;
    result = result * 26 + val;
  }

  return result;
}
