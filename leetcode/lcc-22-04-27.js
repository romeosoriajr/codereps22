function smallestStringWithSwaps(s, pairs) {
  if (!pairs.length) return s;

  const adjList = new Map();
  const visited = new Array(s.length).fill(false);
  const result = [];
  let strArr = [];
  let indices = [];

  for (let [u, v] of pairs) {
    if (!adjList.has(u)) adjList.set(u, []);
    if (!adjList.has(v)) adjList.set(v, []);

    adjList.get(u).push(v);
    adjList.get(v).push(u);
  }

  for (let i = 0; i < s.length; i++) {
    strArr = [];
    indices = [];
    dfs(i);
    strArr.sort();
    indices.sort((a, b) => a - b);

    for (let j = 0; j < indices.length; j++) {
      const index = indices[j];
      const char = strArr[j];
      result[index] = char;
    }
  }

  return result.join("");

  function dfs(i) {
    if (visited[i]) return;
    visited[i] = true;

    const nodes = adjList.get(i);
    strArr.push(s.charAt(i));
    indices.push(i);

    if (!nodes) return;

    for (let node of nodes) dfs(node);
  }
}

