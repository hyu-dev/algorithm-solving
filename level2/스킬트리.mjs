function solution(skill, skillTrees) {
  const regexp = new RegExp(`[^${skill}]`, "g");

  let count = 0;
  for (let i = 0; i < skillTrees.length; i++) {
    const skillTree = skillTrees[i].replace(regexp, "");
    count += skill.startsWith(skillTree) ? 1 : 0;
  }

  return count;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
