const solution = (s) => s.toLowerCase().replace(/^\w|\s\w/g, (str) => str.toUpperCase());

console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
