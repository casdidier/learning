// function calculatePoints(player) {
//   return player.normKill * 100
//     + player.assist * 50
//     + player.damage * 0.5
//     + player.healing * 1
//     + Math.pow(2, player.streak)
//     + player.envKill * 500;
// }

// function scoring(array) {
//   return array.map((player) => {
//     return { name: player.name, total: calculatePoints(player) };
//   })
//     .sort((a, b) => b.total - a.total)
//     .map(player => player.name);
// }


function scoring(array) {
  const pow = (n) => {
    if (n <= 1) return 2;
    return 2 * pow(n - 1);
  };

  return array.map((player) => {
    const {
      normKill,
      assist,
      damage,
      healing,
      streak,
      envKill,
      name,
    } = player;

    return {
      name,
      score: (normKill * 100) + (assist * 50) + (damage * 0.5) + healing + pow(streak) + (envKill * 500),
    };
  })
    .sort((a, b) => a.score < b.score)
    .map(({ name }) => name);
}
