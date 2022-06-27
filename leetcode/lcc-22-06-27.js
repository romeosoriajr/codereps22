function minPartitions(n) {
  let result = 0;

  for (let i = 0; i < n.length; i++) {
    const charCode = n.charCodeAt(i);

    if (charCode - 48 == 9) return 9;
    result = Math.max(result, charCode - 48);
  }
  return result;
}

