function calcEquation(equations, values, queries) {
  const map = new Map();

  for (let i = 0; i < equations.length; i++) {
    const [varA, varB] = equations[i];
    if (!map.has(varA)) map.set(varA, new Map());
    if (!map.has(varB)) map.set(varB, new Map());

    map.get(varA).set(varB, values[i]);
    map.get(varB).set(varA, 1 / values[i]);
  }

  const output = new Array(queries.length);

  for (let i = 0; i < queries.length; i++) {
    const [varC, varD] = queries[i];
    if (map.has(varC) && map.has(varD)) {
      if (varC == varD) {
        output[i] = 1.0;
      } else {
        const calc = helper(varC, varD, new Set(), map, 1.0);
        output[i] = calc == 0.0 ? -1.0 : calc;
      }
    } else {
      output[i] = -1.0;
    }
  }

  return output;

  function helper(strA, strB, seen, map, val) {
    if (map.get(strA).has(strB)) return val * map.get(strA).get(strB);

    let temp = 0.0;

    for (let neighbor of map.get(strA).keys()) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        temp = helper(
          neighbor,
          strB,
          seen,
          map,
          val * map.get(strA).get(neighbor)
        );
        if (temp !== 0.0) break;
      }
    }

    return temp;
  }
}

const equations = [
    ["a", "b"],
    ["b", "c"],
  ],
  values = [2.0, 3.0],
  queries = [
    ["a", "c"],
    ["b", "a"],
    ["a", "e"],
    ["a", "a"],
    ["x", "x"],
  ];
console.log(calcEquation(equations, values, queries));
