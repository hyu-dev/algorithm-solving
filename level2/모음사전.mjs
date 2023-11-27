var COUNT = 0;

const recursive = (word, str, set) => {
  if (str.length === 5) {
    set[str] = COUNT;
    return;
  }

  for (let i = 0; i < word.length; i++) {
    const newStr = str + word[i];
    COUNT += 1;
    set[newStr] = COUNT;
    recursive(word, newStr, set);
  }
};

const solution = (word) => {
  const set = {};

  recursive(["A", "E", "I", "O", "U"], "", set);

  return set[word];
};

console.log(solution("I"));
