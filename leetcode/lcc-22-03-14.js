function simplifyPath(path) {
  const arr = path.split("/");

  console.log(arr);

  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    if (str == "" || str == '.') continue;
    if (str == "..") {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return `/${stack.join("/")}`;
}

console.log(simplifyPath("/home//foo/"));
