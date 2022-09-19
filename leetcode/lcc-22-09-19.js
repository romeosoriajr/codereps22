function findDuplicate(paths) {
  const dupes = new Map();

  for (const p of paths) {
    const [path, ...files] = p.split(" ");

    for (const f of files) {
      const [filename, content] = f.split("(");

      if (!dupes.has(content)) dupes.set(content, []);

      dupes.get(content).push(`${path}/${filename}`);
    }
  }

  const result = [];

  for (let values of dupes.values()) {
    if (values.length > 1) {
      result.push([...values]);
    }
  }

  return result;
}

const paths = [
  "root/a 1.txt(abcd) 2.txt(efgh)",
  "root/c 3.txt(abcd)",
  "root/c/d 4.txt(efgh)",
  "root 4.txt(efgh)",
];

console.log(findDuplicate(paths));
