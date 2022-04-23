const codeMap = new Map();
const urlMap = new Map();
const domain = 'http://tinyurl.com';

function getCode() {
  const slugLength = 6;
  const validChars = "abcdefghijklmnopqrstuvwxyz";

  return new Array(slugLength)
    .fill(null)
    .map(() => validChars.charAt(Math.random() * validChars.length))
    .join("");
}

function encode(longUrl) {
  let code;

  if (urlMap.has(longUrl)) {
    code = urlMap.get(longUrl);
  } else {
    code = getCode();

    // check code doesnt exist yet;
    while (codeMap.has(code)) {
      code = getCode();
    }

    urlMap.set(longUrl, code);
    codeMap.set(code, longUrl);
  }


  return `${domain}/${code}`
}

function decode(shortUrl) {

  const code = shortUrl.split('/').pop();

  return codeMap.get(code)
}


