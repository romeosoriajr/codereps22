function groupAnagrams (strs) {
  const map = new Map();

  for (let str of strs) {

    const key = str.split('').sort((a,b) => a > b ? 1 : -1).join('');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return [...map.values()];

}

