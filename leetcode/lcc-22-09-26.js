function equationsPossible(equations) {
  const uf = new Array(26).fill(null);

  for (let i = 0; i < 26; i++) uf[i] = i;

  for (const e of equations) {
    if (e.charAt(1) == "=")
      uf[find(e.charCodeAt(0) - 97)] = find(e.charCodeAt(3) - 97);
  }

  for (const e of equations) {
    if (
      e.charAt(1) == "!" &&
      find(e.charCodeAt(0) - 97) == find(e.charCodeAt(3) - 97)
    ) {
      return false;
    }
  }

  return true;

  function find(x) {
    if (x != uf[x]) uf[x] = find(uf[x]);
    return uf[x];
  }
}
