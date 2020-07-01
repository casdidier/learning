// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f

function evaporator(content, evap_per_day, threshold) {
  const thresholdPercentage = (threshold / 100);
  const evaporationPercentage = (evap_per_day / 100);
  const minimumThresholdValue = content * thresholdPercentage;

  let totalDays = 0;
  while (content >= minimumThresholdValue) {
    content -= (content * evaporationPercentage);
    totalDays++;
  }
  return totalDays;
}

console.log(evaporator(10, 10, 10), 22);
