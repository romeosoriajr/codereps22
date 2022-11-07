function maximum69Number(num) {
  const numStr = num.toString();

  const index = numStr.indexOf("6");

  if (index != -1) {
    return parseInt(numStr.substring(0, index) + "9" + num.substring(index+1));
  }

  return num;
}

