function solution(bandage, health, attacks) {
  let currentHealth = health;
  const lastAttackTime = attacks[attacks.length - 1][0];
  const [bandTime, charge, bandProfit] = bandage;

  for (let time = 0, attack = 0, band = 0; time <= lastAttackTime; time++, band++) {
    const attackData = attacks[attack];

    if (attackData) {
      const [attackTime, attackValue] = attackData;

      if (attackTime === time) {
        currentHealth -= attackValue;
        band = 0;
        attack += 1;
      } else {
        currentHealth += charge;
        currentHealth = currentHealth > health ? health : currentHealth;

        if (bandTime === band) {
          band = 0;
          currentHealth += bandProfit;
        }
      }
    }

    if (currentHealth <= 0) {
      return -1;
    }
  }

  return currentHealth;
}

console.log(
  solution([5, 1, 5], 30, [
    [2, 10],
    [9, 15],
    [10, 5],
    [11, 5],
  ])
); // 5
