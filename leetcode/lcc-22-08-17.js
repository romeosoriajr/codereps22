function uniqueMorseRepresentations(words) {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  const set = new Set();

  for (const word of words) {
    let code = "";

    for (let i = 0; i < word.length; i++) {
      const charCode = word.charCodeAt(i);

      code += morse[charCode - 97];
    }

    set.add(code);
  }

  return set.size;
}
